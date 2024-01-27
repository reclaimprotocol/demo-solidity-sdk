import {
    CompleteClaimData,
    createSignDataForClaim,
    fetchWitnessListForClaim,
    hashClaimInfo
  } from '@reclaimprotocol/crypto-sdk'
  

  import { expect } from 'chai'
  import { BigNumber, utils } from 'ethers'
  import { Reclaim } from '../src/types'
  import {
    deployReclaimContract,
    generateMockWitnessesList,
    randomEthAddress,
    randomWallet,
    randomiseWitnessList
  } from './utils'
  import { ethers, run, upgrades } from 'hardhat'
  
  import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
  import { randomBytes } from 'crypto'
  
  import { deployFixture, proofsFixture } from './fixtures'
  
  describe('Reclaim Tests', () => {
    const NUM_WITNESSES = 5
    const MOCK_HOST_PREFIX = 'localhost:555'
  
    it('should fail to execute admin functions if not owner', async () => {
      let { contract, witnesses } = await loadFixture(deployFixture)
      const NOT_OWNER_MSG = 'Ownable: caller is not the owner'
      const user = await randomWallet(1, ethers.provider)
      contract = await contract.connect(user)
  
      const expectedRejections = [() => contract.addNewEpoch(witnesses, 5)]
      for (const reject of expectedRejections) {
        expect(reject()).to.be.revertedWith(NOT_OWNER_MSG)
      }
    })
  
    it('should insert some epochs', async () => {
      let { contract, witnesses, owner } = await loadFixture(deployFixture)
      const currentEpoch = await contract.currentEpoch()
      for (let i = 1; i < 5; i++) {
        const tx = await contract.addNewEpoch(witnesses, 5)
        await tx.wait()
        // current epoch
        const epoch = await contract.fetchEpoch(0)
        expect(epoch.id).to.be.eq(currentEpoch + i)
        expect(epoch.witnesses).to.have.length(NUM_WITNESSES)
        expect(epoch.timestampStart).to.be.gt(0)
  
        const epochById = await contract.fetchEpoch(epoch.id)
        expect(epochById.id).to.be.eq(epoch.id)
      }
    })
  

    describe('Proofs tests', async () => {
      it('should verify a claim', async () => {
        let { contract, user, superProofs } = await loadFixture(proofsFixture)
        await contract.connect(user).verifyProof(superProofs[1])
      })

    })
  })
  
  describe('Reclaim Witness Fetch Tests', () => {
    const NUM_WITNESSES = 15
    const MOCK_HOST_PREFIX = 'localhost:555'
    let contract: Reclaim
    let witnesses: Reclaim.WitnessStruct[] = []
  
    beforeEach(async () => {
  
      contract = await deployReclaimContract(ethers)
      let { mockWitnesses } = await generateMockWitnessesList(
        NUM_WITNESSES,
        MOCK_HOST_PREFIX,
        ethers
      )
      witnesses = await randomiseWitnessList(mockWitnesses)
    })
  
    // check TS & solidity implementations match
    it('match fetchWitnessList implementation for claim', async () => {
      await contract.addNewEpoch(witnesses, 5)
      const currentEpoch = await contract.fetchEpoch(0)
  
      const identifier = hashClaimInfo({
        parameters: '1234',
        provider: 'test',
        context: 'test'
      })
  
      const timestampS = Math.floor(Date.now() / 1000)
  
      const witnessesTs = await fetchWitnessListForClaim(
        {
          epoch: currentEpoch.id,
          witnesses: currentEpoch.witnesses.map(w => ({
            id: w.addr,
            url: w.host
          })),
          witnessesRequiredForClaim:
            currentEpoch.minimumWitnessesForClaimCreation,
          nextEpochTimestampS: 0
        },
        identifier,
        timestampS
      )
  
      const witnessesContract = await contract.fetchWitnessesForClaim(
        currentEpoch.id,
        identifier,
        timestampS
      )
  
      const witnessesContractHosts = witnessesContract.length
      for (let i = 0; i < witnessesContractHosts; i++) {
        expect(witnessesContract[i].host.toLowerCase()).to.equal(
          witnessesTs[i].url.toLowerCase()
        )
      }
    })
  })
  