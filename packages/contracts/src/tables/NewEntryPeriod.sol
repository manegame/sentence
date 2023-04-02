// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

uint256 constant _tableId = uint256(bytes32(abi.encodePacked(bytes16(""), bytes16("newentryperiod"))));
uint256 constant NewEntryPeriodTableId = _tableId;

struct NewEntryPeriodData {
  uint256 id;
  uint256 parentBlock;
  uint256 periodEndsBlock;
}

library NewEntryPeriod {
  /** Get the table's schema */
  function getSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](3);
    _schema[0] = SchemaType.UINT256;
    _schema[1] = SchemaType.UINT256;
    _schema[2] = SchemaType.UINT256;

    return SchemaLib.encode(_schema);
  }

  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.BYTES32;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's metadata */
  function getMetadata() internal pure returns (string memory, string[] memory) {
    string[] memory _fieldNames = new string[](3);
    _fieldNames[0] = "id";
    _fieldNames[1] = "parentBlock";
    _fieldNames[2] = "periodEndsBlock";
    return ("NewEntryPeriod", _fieldNames);
  }

  /** Register the table's schema */
  function registerSchema() internal {
    StoreSwitch.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Register the table's schema (using the specified store) */
  function registerSchema(IStore _store) internal {
    _store.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Set the table's metadata */
  function setMetadata() internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    StoreSwitch.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Set the table's metadata (using the specified store) */
  function setMetadata(IStore _store) internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    _store.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Get id */
  function getId(bytes32 key) internal view returns (uint256 id) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _primaryKeys, 0);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Get id (using the specified store) */
  function getId(IStore _store, bytes32 key) internal view returns (uint256 id) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _primaryKeys, 0);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Set id */
  function setId(bytes32 key, uint256 id) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _primaryKeys, 0, abi.encodePacked((id)));
  }

  /** Set id (using the specified store) */
  function setId(IStore _store, bytes32 key, uint256 id) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    _store.setField(_tableId, _primaryKeys, 0, abi.encodePacked((id)));
  }

  /** Get parentBlock */
  function getParentBlock(bytes32 key) internal view returns (uint256 parentBlock) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _primaryKeys, 1);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Get parentBlock (using the specified store) */
  function getParentBlock(IStore _store, bytes32 key) internal view returns (uint256 parentBlock) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _primaryKeys, 1);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Set parentBlock */
  function setParentBlock(bytes32 key, uint256 parentBlock) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _primaryKeys, 1, abi.encodePacked((parentBlock)));
  }

  /** Set parentBlock (using the specified store) */
  function setParentBlock(IStore _store, bytes32 key, uint256 parentBlock) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    _store.setField(_tableId, _primaryKeys, 1, abi.encodePacked((parentBlock)));
  }

  /** Get periodEndsBlock */
  function getPeriodEndsBlock(bytes32 key) internal view returns (uint256 periodEndsBlock) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _primaryKeys, 2);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Get periodEndsBlock (using the specified store) */
  function getPeriodEndsBlock(IStore _store, bytes32 key) internal view returns (uint256 periodEndsBlock) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _primaryKeys, 2);
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Set periodEndsBlock */
  function setPeriodEndsBlock(bytes32 key, uint256 periodEndsBlock) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _primaryKeys, 2, abi.encodePacked((periodEndsBlock)));
  }

  /** Set periodEndsBlock (using the specified store) */
  function setPeriodEndsBlock(IStore _store, bytes32 key, uint256 periodEndsBlock) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    _store.setField(_tableId, _primaryKeys, 2, abi.encodePacked((periodEndsBlock)));
  }

  /** Get the full data */
  function get(bytes32 key) internal view returns (NewEntryPeriodData memory _table) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getRecord(_tableId, _primaryKeys, getSchema());
    return decode(_blob);
  }

  /** Get the full data (using the specified store) */
  function get(IStore _store, bytes32 key) internal view returns (NewEntryPeriodData memory _table) {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    bytes memory _blob = _store.getRecord(_tableId, _primaryKeys, getSchema());
    return decode(_blob);
  }

  /** Set the full data using individual values */
  function set(bytes32 key, uint256 id, uint256 parentBlock, uint256 periodEndsBlock) internal {
    bytes memory _data = encode(id, parentBlock, periodEndsBlock);

    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    StoreSwitch.setRecord(_tableId, _primaryKeys, _data);
  }

  /** Set the full data using individual values (using the specified store) */
  function set(IStore _store, bytes32 key, uint256 id, uint256 parentBlock, uint256 periodEndsBlock) internal {
    bytes memory _data = encode(id, parentBlock, periodEndsBlock);

    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    _store.setRecord(_tableId, _primaryKeys, _data);
  }

  /** Set the full data using the data struct */
  function set(bytes32 key, NewEntryPeriodData memory _table) internal {
    set(key, _table.id, _table.parentBlock, _table.periodEndsBlock);
  }

  /** Set the full data using the data struct (using the specified store) */
  function set(IStore _store, bytes32 key, NewEntryPeriodData memory _table) internal {
    set(_store, key, _table.id, _table.parentBlock, _table.periodEndsBlock);
  }

  /** Decode the tightly packed blob using this table's schema */
  function decode(bytes memory _blob) internal pure returns (NewEntryPeriodData memory _table) {
    _table.id = (uint256(Bytes.slice32(_blob, 0)));

    _table.parentBlock = (uint256(Bytes.slice32(_blob, 32)));

    _table.periodEndsBlock = (uint256(Bytes.slice32(_blob, 64)));
  }

  /** Tightly pack full data using this table's schema */
  function encode(uint256 id, uint256 parentBlock, uint256 periodEndsBlock) internal view returns (bytes memory) {
    return abi.encodePacked(id, parentBlock, periodEndsBlock);
  }

  /* Delete all data for given keys */
  function deleteRecord(bytes32 key) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    StoreSwitch.deleteRecord(_tableId, _primaryKeys);
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, bytes32 key) internal {
    bytes32[] memory _primaryKeys = new bytes32[](1);
    _primaryKeys[0] = bytes32((key));

    _store.deleteRecord(_tableId, _primaryKeys);
  }
}
