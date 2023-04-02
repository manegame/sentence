/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IWorldInterface extends utils.Interface {
  functions: {
    "call(bytes16,bytes16,bytes)": FunctionFragment;
    "deleteRecord(uint256,bytes32[])": FunctionFragment;
    "deleteRecord(bytes16,bytes16,bytes32[])": FunctionFragment;
    "getField(uint256,bytes32[],uint8)": FunctionFragment;
    "getKeySchema(uint256)": FunctionFragment;
    "getRecord(uint256,bytes32[],bytes32)": FunctionFragment;
    "getRecord(uint256,bytes32[])": FunctionFragment;
    "getSchema(uint256)": FunctionFragment;
    "grantAccess(bytes16,address)": FunctionFragment;
    "grantAccess(bytes16,bytes16,address)": FunctionFragment;
    "installModule(address,bytes)": FunctionFragment;
    "installRootModule(address,bytes)": FunctionFragment;
    "isStore()": FunctionFragment;
    "proposeEntry(string)": FunctionFragment;
    "pushToField(uint256,bytes32[],uint8,bytes)": FunctionFragment;
    "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)": FunctionFragment;
    "registerSchema(uint256,bytes32,bytes32)": FunctionFragment;
    "registerStoreHook(uint256,address)": FunctionFragment;
    "retractAccess(bytes16,bytes16,address)": FunctionFragment;
    "setField(bytes16,bytes16,bytes32[],uint8,bytes)": FunctionFragment;
    "setField(uint256,bytes32[],uint8,bytes)": FunctionFragment;
    "setMetadata(uint256,string,string[])": FunctionFragment;
    "setRecord(bytes16,bytes16,bytes32[],bytes)": FunctionFragment;
    "setRecord(uint256,bytes32[],bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "call"
      | "deleteRecord(uint256,bytes32[])"
      | "deleteRecord(bytes16,bytes16,bytes32[])"
      | "getField"
      | "getKeySchema"
      | "getRecord(uint256,bytes32[],bytes32)"
      | "getRecord(uint256,bytes32[])"
      | "getSchema"
      | "grantAccess(bytes16,address)"
      | "grantAccess(bytes16,bytes16,address)"
      | "installModule"
      | "installRootModule"
      | "isStore"
      | "proposeEntry"
      | "pushToField(uint256,bytes32[],uint8,bytes)"
      | "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"
      | "registerSchema"
      | "registerStoreHook"
      | "retractAccess"
      | "setField(bytes16,bytes16,bytes32[],uint8,bytes)"
      | "setField(uint256,bytes32[],uint8,bytes)"
      | "setMetadata"
      | "setRecord(bytes16,bytes16,bytes32[],bytes)"
      | "setRecord(uint256,bytes32[],bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "call",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRecord(uint256,bytes32[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRecord(bytes16,bytes16,bytes32[])",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getField",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getKeySchema",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecord(uint256,bytes32[],bytes32)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecord(uint256,bytes32[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchema",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantAccess(bytes16,address)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantAccess(bytes16,bytes16,address)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "installModule",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "installRootModule",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "isStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeEntry",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pushToField(uint256,bytes32[],uint8,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerSchema",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStoreHook",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "retractAccess",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setField(bytes16,bytes16,bytes32[],uint8,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setField(uint256,bytes32[],uint8,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMetadata",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecord(bytes16,bytes16,bytes32[],bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecord(uint256,bytes32[],bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteRecord(uint256,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRecord(bytes16,bytes16,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getField", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getKeySchema",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecord(uint256,bytes32[],bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecord(uint256,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "grantAccess(bytes16,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantAccess(bytes16,bytes16,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "installModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "installRootModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeEntry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushToField(uint256,bytes32[],uint8,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSchema",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStoreHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retractAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setField(bytes16,bytes16,bytes32[],uint8,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setField(uint256,bytes32[],uint8,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecord(bytes16,bytes16,bytes32[],bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecord(uint256,bytes32[],bytes)",
    data: BytesLike
  ): Result;

  events: {
    "StoreDeleteRecord(uint256,bytes32[])": EventFragment;
    "StoreSetField(uint256,bytes32[],uint8,bytes)": EventFragment;
    "StoreSetRecord(uint256,bytes32[],bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StoreDeleteRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoreSetField"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoreSetRecord"): EventFragment;
}

export interface StoreDeleteRecordEventObject {
  table: BigNumber;
  key: string[];
}
export type StoreDeleteRecordEvent = TypedEvent<
  [BigNumber, string[]],
  StoreDeleteRecordEventObject
>;

export type StoreDeleteRecordEventFilter =
  TypedEventFilter<StoreDeleteRecordEvent>;

export interface StoreSetFieldEventObject {
  table: BigNumber;
  key: string[];
  schemaIndex: number;
  data: string;
}
export type StoreSetFieldEvent = TypedEvent<
  [BigNumber, string[], number, string],
  StoreSetFieldEventObject
>;

export type StoreSetFieldEventFilter = TypedEventFilter<StoreSetFieldEvent>;

export interface StoreSetRecordEventObject {
  table: BigNumber;
  key: string[];
  data: string;
}
export type StoreSetRecordEvent = TypedEvent<
  [BigNumber, string[], string],
  StoreSetRecordEventObject
>;

export type StoreSetRecordEventFilter = TypedEventFilter<StoreSetRecordEvent>;

export interface IWorld extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWorldInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    call(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      funcSelectorAndArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deleteRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deleteRecord(bytes16,bytes16,bytes32[])"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getField(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    getKeySchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { schema: string }>;

    "getRecord(uint256,bytes32[],bytes32)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    "getRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    getSchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { schema: string }>;

    "grantAccess(bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "grantAccess(bytes16,bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    installModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    installRootModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isStore(overrides?: CallOverrides): Promise<[void]>;

    proposeEntry(
      entry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "pushToField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerSchema(
      table: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerStoreHook(
      table: PromiseOrValue<BigNumberish>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retractAccess(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMetadata(
      table: PromiseOrValue<BigNumberish>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setRecord(bytes16,bytes16,bytes32[],bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setRecord(uint256,bytes32[],bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  call(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    funcSelectorAndArgs: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deleteRecord(uint256,bytes32[])"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deleteRecord(bytes16,bytes16,bytes32[])"(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getField(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getKeySchema(
    table: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecord(uint256,bytes32[],bytes32)"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    schema: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecord(uint256,bytes32[])"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<string>;

  getSchema(
    table: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "grantAccess(bytes16,address)"(
    namespace: PromiseOrValue<BytesLike>,
    grantee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "grantAccess(bytes16,bytes16,address)"(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    grantee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  installModule(
    module: PromiseOrValue<string>,
    args: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  installRootModule(
    module: PromiseOrValue<string>,
    args: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isStore(overrides?: CallOverrides): Promise<void>;

  proposeEntry(
    entry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "pushToField(uint256,bytes32[],uint8,bytes)"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    dataToPush: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    dataToPush: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerSchema(
    table: PromiseOrValue<BigNumberish>,
    schema: PromiseOrValue<BytesLike>,
    keySchema: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerStoreHook(
    table: PromiseOrValue<BigNumberish>,
    hook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retractAccess(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    grantee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setField(bytes16,bytes16,bytes32[],uint8,bytes)"(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setField(uint256,bytes32[],uint8,bytes)"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMetadata(
    table: PromiseOrValue<BigNumberish>,
    tableName: PromiseOrValue<string>,
    fieldNames: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setRecord(bytes16,bytes16,bytes32[],bytes)"(
    namespace: PromiseOrValue<BytesLike>,
    file: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setRecord(uint256,bytes32[],bytes)"(
    table: PromiseOrValue<BigNumberish>,
    key: PromiseOrValue<BytesLike>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    call(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      funcSelectorAndArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "deleteRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteRecord(bytes16,bytes16,bytes32[])"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getField(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getKeySchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecord(uint256,bytes32[],bytes32)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string>;

    getSchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "grantAccess(bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantAccess(bytes16,bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    installModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    installRootModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    isStore(overrides?: CallOverrides): Promise<void>;

    proposeEntry(
      entry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "pushToField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerSchema(
      table: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerStoreHook(
      table: PromiseOrValue<BigNumberish>,
      hook: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    retractAccess(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMetadata(
      table: PromiseOrValue<BigNumberish>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setRecord(bytes16,bytes16,bytes32[],bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRecord(uint256,bytes32[],bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "StoreDeleteRecord(uint256,bytes32[])"(
      table?: null,
      key?: null
    ): StoreDeleteRecordEventFilter;
    StoreDeleteRecord(table?: null, key?: null): StoreDeleteRecordEventFilter;

    "StoreSetField(uint256,bytes32[],uint8,bytes)"(
      table?: null,
      key?: null,
      schemaIndex?: null,
      data?: null
    ): StoreSetFieldEventFilter;
    StoreSetField(
      table?: null,
      key?: null,
      schemaIndex?: null,
      data?: null
    ): StoreSetFieldEventFilter;

    "StoreSetRecord(uint256,bytes32[],bytes)"(
      table?: null,
      key?: null,
      data?: null
    ): StoreSetRecordEventFilter;
    StoreSetRecord(
      table?: null,
      key?: null,
      data?: null
    ): StoreSetRecordEventFilter;
  };

  estimateGas: {
    call(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      funcSelectorAndArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deleteRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deleteRecord(bytes16,bytes16,bytes32[])"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getField(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKeySchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecord(uint256,bytes32[],bytes32)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "grantAccess(bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "grantAccess(bytes16,bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    installModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    installRootModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isStore(overrides?: CallOverrides): Promise<BigNumber>;

    proposeEntry(
      entry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "pushToField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerSchema(
      table: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerStoreHook(
      table: PromiseOrValue<BigNumberish>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retractAccess(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMetadata(
      table: PromiseOrValue<BigNumberish>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setRecord(bytes16,bytes16,bytes32[],bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setRecord(uint256,bytes32[],bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    call(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      funcSelectorAndArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deleteRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deleteRecord(bytes16,bytes16,bytes32[])"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getField(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKeySchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecord(uint256,bytes32[],bytes32)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecord(uint256,bytes32[])"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchema(
      table: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "grantAccess(bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "grantAccess(bytes16,bytes16,address)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    installModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    installRootModule(
      module: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeEntry(
      entry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "pushToField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "pushToField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerSchema(
      table: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerStoreHook(
      table: PromiseOrValue<BigNumberish>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retractAccess(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      grantee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setField(bytes16,bytes16,bytes32[],uint8,bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setField(uint256,bytes32[],uint8,bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMetadata(
      table: PromiseOrValue<BigNumberish>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setRecord(bytes16,bytes16,bytes32[],bytes)"(
      namespace: PromiseOrValue<BytesLike>,
      file: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setRecord(uint256,bytes32[],bytes)"(
      table: PromiseOrValue<BigNumberish>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
