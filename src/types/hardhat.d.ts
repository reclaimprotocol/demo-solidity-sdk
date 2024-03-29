/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "Pairing",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pairing__factory>;
    getContractFactory(
      name: "SemaphoreGroups",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SemaphoreGroups__factory>;
    getContractFactory(
      name: "SemaphoreVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SemaphoreVerifier__factory>;
    getContractFactory(
      name: "ISemaphore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemaphore__factory>;
    getContractFactory(
      name: "ISemaphoreGroups",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemaphoreGroups__factory>;
    getContractFactory(
      name: "ISemaphoreVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemaphoreVerifier__factory>;
    getContractFactory(
      name: "Semaphore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Semaphore__factory>;
    getContractFactory(
      name: "PoseidonT3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoseidonT3__factory>;
    getContractFactory(
      name: "PoseidonT6",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoseidonT6__factory>;
    getContractFactory(
      name: "SemaphoreInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SemaphoreInterface__factory>;
    getContractFactory(
      name: "Reclaim",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reclaim__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "Pairing",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pairing>;
    getContractAt(
      name: "SemaphoreGroups",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SemaphoreGroups>;
    getContractAt(
      name: "SemaphoreVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SemaphoreVerifier>;
    getContractAt(
      name: "ISemaphore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemaphore>;
    getContractAt(
      name: "ISemaphoreGroups",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemaphoreGroups>;
    getContractAt(
      name: "ISemaphoreVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemaphoreVerifier>;
    getContractAt(
      name: "Semaphore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Semaphore>;
    getContractAt(
      name: "PoseidonT3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoseidonT3>;
    getContractAt(
      name: "PoseidonT6",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoseidonT6>;
    getContractAt(
      name: "SemaphoreInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SemaphoreInterface>;
    getContractAt(
      name: "Reclaim",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reclaim>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
