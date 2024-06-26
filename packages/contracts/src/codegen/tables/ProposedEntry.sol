// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

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
import { FieldLayout, FieldLayoutLib } from "@latticexyz/store/src/FieldLayout.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";
import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";
import { RESOURCE_TABLE, RESOURCE_OFFCHAIN_TABLE } from "@latticexyz/store/src/storeResourceTypes.sol";

ResourceId constant _tableId = ResourceId.wrap(
  bytes32(abi.encodePacked(RESOURCE_TABLE, bytes14("mud"), bytes16("ProposedEntry")))
);
ResourceId constant ProposedEntryTableId = _tableId;

FieldLayout constant _fieldLayout = FieldLayout.wrap(
  0x0074040220202014000000000000000000000000000000000000000000000000
);

struct ProposedEntryData {
  uint256 proposedOnBlock;
  bytes32 parentKey;
  uint256 timestamp;
  address proposer;
  string sentence;
  address[] votes;
}

library ProposedEntry {
  /**
   * @notice Get the table values' field layout.
   * @return _fieldLayout The field layout for the table.
   */
  function getFieldLayout() internal pure returns (FieldLayout) {
    return _fieldLayout;
  }

  /**
   * @notice Get the table's key schema.
   * @return _keySchema The key schema for the table.
   */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _keySchema = new SchemaType[](1);
    _keySchema[0] = SchemaType.BYTES32;

    return SchemaLib.encode(_keySchema);
  }

  /**
   * @notice Get the table's value schema.
   * @return _valueSchema The value schema for the table.
   */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _valueSchema = new SchemaType[](6);
    _valueSchema[0] = SchemaType.UINT256;
    _valueSchema[1] = SchemaType.BYTES32;
    _valueSchema[2] = SchemaType.UINT256;
    _valueSchema[3] = SchemaType.ADDRESS;
    _valueSchema[4] = SchemaType.STRING;
    _valueSchema[5] = SchemaType.ADDRESS_ARRAY;

    return SchemaLib.encode(_valueSchema);
  }

  /**
   * @notice Get the table's key field names.
   * @return keyNames An array of strings with the names of key fields.
   */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](1);
    keyNames[0] = "key";
  }

  /**
   * @notice Get the table's value field names.
   * @return fieldNames An array of strings with the names of value fields.
   */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](6);
    fieldNames[0] = "proposedOnBlock";
    fieldNames[1] = "parentKey";
    fieldNames[2] = "timestamp";
    fieldNames[3] = "proposer";
    fieldNames[4] = "sentence";
    fieldNames[5] = "votes";
  }

  /**
   * @notice Register the table with its config.
   */
  function register() internal {
    StoreSwitch.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /**
   * @notice Register the table with its config.
   */
  function _register() internal {
    StoreCore.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /**
   * @notice Get proposedOnBlock.
   */
  function getProposedOnBlock(bytes32 key) internal view returns (uint256 proposedOnBlock) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (uint256(bytes32(_blob)));
  }

  /**
   * @notice Get proposedOnBlock.
   */
  function _getProposedOnBlock(bytes32 key) internal view returns (uint256 proposedOnBlock) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (uint256(bytes32(_blob)));
  }

  /**
   * @notice Set proposedOnBlock.
   */
  function setProposedOnBlock(bytes32 key, uint256 proposedOnBlock) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((proposedOnBlock)), _fieldLayout);
  }

  /**
   * @notice Set proposedOnBlock.
   */
  function _setProposedOnBlock(bytes32 key, uint256 proposedOnBlock) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((proposedOnBlock)), _fieldLayout);
  }

  /**
   * @notice Get parentKey.
   */
  function getParentKey(bytes32 key) internal view returns (bytes32 parentKey) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 1, _fieldLayout);
    return (bytes32(_blob));
  }

  /**
   * @notice Get parentKey.
   */
  function _getParentKey(bytes32 key) internal view returns (bytes32 parentKey) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 1, _fieldLayout);
    return (bytes32(_blob));
  }

  /**
   * @notice Set parentKey.
   */
  function setParentKey(bytes32 key, bytes32 parentKey) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 1, abi.encodePacked((parentKey)), _fieldLayout);
  }

  /**
   * @notice Set parentKey.
   */
  function _setParentKey(bytes32 key, bytes32 parentKey) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setStaticField(_tableId, _keyTuple, 1, abi.encodePacked((parentKey)), _fieldLayout);
  }

  /**
   * @notice Get timestamp.
   */
  function getTimestamp(bytes32 key) internal view returns (uint256 timestamp) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 2, _fieldLayout);
    return (uint256(bytes32(_blob)));
  }

  /**
   * @notice Get timestamp.
   */
  function _getTimestamp(bytes32 key) internal view returns (uint256 timestamp) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 2, _fieldLayout);
    return (uint256(bytes32(_blob)));
  }

  /**
   * @notice Set timestamp.
   */
  function setTimestamp(bytes32 key, uint256 timestamp) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 2, abi.encodePacked((timestamp)), _fieldLayout);
  }

  /**
   * @notice Set timestamp.
   */
  function _setTimestamp(bytes32 key, uint256 timestamp) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setStaticField(_tableId, _keyTuple, 2, abi.encodePacked((timestamp)), _fieldLayout);
  }

  /**
   * @notice Get proposer.
   */
  function getProposer(bytes32 key) internal view returns (address proposer) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 3, _fieldLayout);
    return (address(bytes20(_blob)));
  }

  /**
   * @notice Get proposer.
   */
  function _getProposer(bytes32 key) internal view returns (address proposer) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 3, _fieldLayout);
    return (address(bytes20(_blob)));
  }

  /**
   * @notice Set proposer.
   */
  function setProposer(bytes32 key, address proposer) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 3, abi.encodePacked((proposer)), _fieldLayout);
  }

  /**
   * @notice Set proposer.
   */
  function _setProposer(bytes32 key, address proposer) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setStaticField(_tableId, _keyTuple, 3, abi.encodePacked((proposer)), _fieldLayout);
  }

  /**
   * @notice Get sentence.
   */
  function getSentence(bytes32 key) internal view returns (string memory sentence) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getDynamicField(_tableId, _keyTuple, 0);
    return (string(_blob));
  }

  /**
   * @notice Get sentence.
   */
  function _getSentence(bytes32 key) internal view returns (string memory sentence) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreCore.getDynamicField(_tableId, _keyTuple, 0);
    return (string(_blob));
  }

  /**
   * @notice Set sentence.
   */
  function setSentence(bytes32 key, string memory sentence) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setDynamicField(_tableId, _keyTuple, 0, bytes((sentence)));
  }

  /**
   * @notice Set sentence.
   */
  function _setSentence(bytes32 key, string memory sentence) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setDynamicField(_tableId, _keyTuple, 0, bytes((sentence)));
  }

  /**
   * @notice Get the length of sentence.
   */
  function lengthSentence(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreSwitch.getDynamicFieldLength(_tableId, _keyTuple, 0);
    unchecked {
      return _byteLength / 1;
    }
  }

  /**
   * @notice Get the length of sentence.
   */
  function _lengthSentence(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreCore.getDynamicFieldLength(_tableId, _keyTuple, 0);
    unchecked {
      return _byteLength / 1;
    }
  }

  /**
   * @notice Get an item of sentence.
   * @dev Reverts with Store_IndexOutOfBounds if `_index` is out of bounds for the array.
   */
  function getItemSentence(bytes32 key, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreSwitch.getDynamicFieldSlice(_tableId, _keyTuple, 0, _index * 1, (_index + 1) * 1);
      return (string(_blob));
    }
  }

  /**
   * @notice Get an item of sentence.
   * @dev Reverts with Store_IndexOutOfBounds if `_index` is out of bounds for the array.
   */
  function _getItemSentence(bytes32 key, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreCore.getDynamicFieldSlice(_tableId, _keyTuple, 0, _index * 1, (_index + 1) * 1);
      return (string(_blob));
    }
  }

  /**
   * @notice Push a slice to sentence.
   */
  function pushSentence(bytes32 key, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.pushToDynamicField(_tableId, _keyTuple, 0, bytes((_slice)));
  }

  /**
   * @notice Push a slice to sentence.
   */
  function _pushSentence(bytes32 key, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.pushToDynamicField(_tableId, _keyTuple, 0, bytes((_slice)));
  }

  /**
   * @notice Pop a slice from sentence.
   */
  function popSentence(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.popFromDynamicField(_tableId, _keyTuple, 0, 1);
  }

  /**
   * @notice Pop a slice from sentence.
   */
  function _popSentence(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.popFromDynamicField(_tableId, _keyTuple, 0, 1);
  }

  /**
   * @notice Update a slice of sentence at `_index`.
   */
  function updateSentence(bytes32 key, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _encoded = bytes((_slice));
      StoreSwitch.spliceDynamicData(_tableId, _keyTuple, 0, uint40(_index * 1), uint40(_encoded.length), _encoded);
    }
  }

  /**
   * @notice Update a slice of sentence at `_index`.
   */
  function _updateSentence(bytes32 key, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _encoded = bytes((_slice));
      StoreCore.spliceDynamicData(_tableId, _keyTuple, 0, uint40(_index * 1), uint40(_encoded.length), _encoded);
    }
  }

  /**
   * @notice Get votes.
   */
  function getVotes(bytes32 key) internal view returns (address[] memory votes) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getDynamicField(_tableId, _keyTuple, 1);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_address());
  }

  /**
   * @notice Get votes.
   */
  function _getVotes(bytes32 key) internal view returns (address[] memory votes) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreCore.getDynamicField(_tableId, _keyTuple, 1);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_address());
  }

  /**
   * @notice Set votes.
   */
  function setVotes(bytes32 key, address[] memory votes) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setDynamicField(_tableId, _keyTuple, 1, EncodeArray.encode((votes)));
  }

  /**
   * @notice Set votes.
   */
  function _setVotes(bytes32 key, address[] memory votes) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setDynamicField(_tableId, _keyTuple, 1, EncodeArray.encode((votes)));
  }

  /**
   * @notice Get the length of votes.
   */
  function lengthVotes(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreSwitch.getDynamicFieldLength(_tableId, _keyTuple, 1);
    unchecked {
      return _byteLength / 20;
    }
  }

  /**
   * @notice Get the length of votes.
   */
  function _lengthVotes(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreCore.getDynamicFieldLength(_tableId, _keyTuple, 1);
    unchecked {
      return _byteLength / 20;
    }
  }

  /**
   * @notice Get an item of votes.
   * @dev Reverts with Store_IndexOutOfBounds if `_index` is out of bounds for the array.
   */
  function getItemVotes(bytes32 key, uint256 _index) internal view returns (address) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreSwitch.getDynamicFieldSlice(_tableId, _keyTuple, 1, _index * 20, (_index + 1) * 20);
      return (address(bytes20(_blob)));
    }
  }

  /**
   * @notice Get an item of votes.
   * @dev Reverts with Store_IndexOutOfBounds if `_index` is out of bounds for the array.
   */
  function _getItemVotes(bytes32 key, uint256 _index) internal view returns (address) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreCore.getDynamicFieldSlice(_tableId, _keyTuple, 1, _index * 20, (_index + 1) * 20);
      return (address(bytes20(_blob)));
    }
  }

  /**
   * @notice Push an element to votes.
   */
  function pushVotes(bytes32 key, address _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.pushToDynamicField(_tableId, _keyTuple, 1, abi.encodePacked((_element)));
  }

  /**
   * @notice Push an element to votes.
   */
  function _pushVotes(bytes32 key, address _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.pushToDynamicField(_tableId, _keyTuple, 1, abi.encodePacked((_element)));
  }

  /**
   * @notice Pop an element from votes.
   */
  function popVotes(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.popFromDynamicField(_tableId, _keyTuple, 1, 20);
  }

  /**
   * @notice Pop an element from votes.
   */
  function _popVotes(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.popFromDynamicField(_tableId, _keyTuple, 1, 20);
  }

  /**
   * @notice Update an element of votes at `_index`.
   */
  function updateVotes(bytes32 key, uint256 _index, address _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _encoded = abi.encodePacked((_element));
      StoreSwitch.spliceDynamicData(_tableId, _keyTuple, 1, uint40(_index * 20), uint40(_encoded.length), _encoded);
    }
  }

  /**
   * @notice Update an element of votes at `_index`.
   */
  function _updateVotes(bytes32 key, uint256 _index, address _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _encoded = abi.encodePacked((_element));
      StoreCore.spliceDynamicData(_tableId, _keyTuple, 1, uint40(_index * 20), uint40(_encoded.length), _encoded);
    }
  }

  /**
   * @notice Get the full data.
   */
  function get(bytes32 key) internal view returns (ProposedEntryData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    (bytes memory _staticData, PackedCounter _encodedLengths, bytes memory _dynamicData) = StoreSwitch.getRecord(
      _tableId,
      _keyTuple,
      _fieldLayout
    );
    return decode(_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Get the full data.
   */
  function _get(bytes32 key) internal view returns (ProposedEntryData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    (bytes memory _staticData, PackedCounter _encodedLengths, bytes memory _dynamicData) = StoreCore.getRecord(
      _tableId,
      _keyTuple,
      _fieldLayout
    );
    return decode(_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Set the full data using individual values.
   */
  function set(
    bytes32 key,
    uint256 proposedOnBlock,
    bytes32 parentKey,
    uint256 timestamp,
    address proposer,
    string memory sentence,
    address[] memory votes
  ) internal {
    bytes memory _staticData = encodeStatic(proposedOnBlock, parentKey, timestamp, proposer);

    PackedCounter _encodedLengths = encodeLengths(sentence, votes);
    bytes memory _dynamicData = encodeDynamic(sentence, votes);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Set the full data using individual values.
   */
  function _set(
    bytes32 key,
    uint256 proposedOnBlock,
    bytes32 parentKey,
    uint256 timestamp,
    address proposer,
    string memory sentence,
    address[] memory votes
  ) internal {
    bytes memory _staticData = encodeStatic(proposedOnBlock, parentKey, timestamp, proposer);

    PackedCounter _encodedLengths = encodeLengths(sentence, votes);
    bytes memory _dynamicData = encodeDynamic(sentence, votes);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData, _fieldLayout);
  }

  /**
   * @notice Set the full data using the data struct.
   */
  function set(bytes32 key, ProposedEntryData memory _table) internal {
    bytes memory _staticData = encodeStatic(
      _table.proposedOnBlock,
      _table.parentKey,
      _table.timestamp,
      _table.proposer
    );

    PackedCounter _encodedLengths = encodeLengths(_table.sentence, _table.votes);
    bytes memory _dynamicData = encodeDynamic(_table.sentence, _table.votes);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Set the full data using the data struct.
   */
  function _set(bytes32 key, ProposedEntryData memory _table) internal {
    bytes memory _staticData = encodeStatic(
      _table.proposedOnBlock,
      _table.parentKey,
      _table.timestamp,
      _table.proposer
    );

    PackedCounter _encodedLengths = encodeLengths(_table.sentence, _table.votes);
    bytes memory _dynamicData = encodeDynamic(_table.sentence, _table.votes);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData, _fieldLayout);
  }

  /**
   * @notice Decode the tightly packed blob of static data using this table's field layout.
   */
  function decodeStatic(
    bytes memory _blob
  ) internal pure returns (uint256 proposedOnBlock, bytes32 parentKey, uint256 timestamp, address proposer) {
    proposedOnBlock = (uint256(Bytes.slice32(_blob, 0)));

    parentKey = (Bytes.slice32(_blob, 32));

    timestamp = (uint256(Bytes.slice32(_blob, 64)));

    proposer = (address(Bytes.slice20(_blob, 96)));
  }

  /**
   * @notice Decode the tightly packed blob of dynamic data using the encoded lengths.
   */
  function decodeDynamic(
    PackedCounter _encodedLengths,
    bytes memory _blob
  ) internal pure returns (string memory sentence, address[] memory votes) {
    uint256 _start;
    uint256 _end;
    unchecked {
      _end = _encodedLengths.atIndex(0);
    }
    sentence = (string(SliceLib.getSubslice(_blob, _start, _end).toBytes()));

    _start = _end;
    unchecked {
      _end += _encodedLengths.atIndex(1);
    }
    votes = (SliceLib.getSubslice(_blob, _start, _end).decodeArray_address());
  }

  /**
   * @notice Decode the tightly packed blobs using this table's field layout.
   * @param _staticData Tightly packed static fields.
   * @param _encodedLengths Encoded lengths of dynamic fields.
   * @param _dynamicData Tightly packed dynamic fields.
   */
  function decode(
    bytes memory _staticData,
    PackedCounter _encodedLengths,
    bytes memory _dynamicData
  ) internal pure returns (ProposedEntryData memory _table) {
    (_table.proposedOnBlock, _table.parentKey, _table.timestamp, _table.proposer) = decodeStatic(_staticData);

    (_table.sentence, _table.votes) = decodeDynamic(_encodedLengths, _dynamicData);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function deleteRecord(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function _deleteRecord(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreCore.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }

  /**
   * @notice Tightly pack static (fixed length) data using this table's schema.
   * @return The static data, encoded into a sequence of bytes.
   */
  function encodeStatic(
    uint256 proposedOnBlock,
    bytes32 parentKey,
    uint256 timestamp,
    address proposer
  ) internal pure returns (bytes memory) {
    return abi.encodePacked(proposedOnBlock, parentKey, timestamp, proposer);
  }

  /**
   * @notice Tightly pack dynamic data lengths using this table's schema.
   * @return _encodedLengths The lengths of the dynamic fields (packed into a single bytes32 value).
   */
  function encodeLengths(
    string memory sentence,
    address[] memory votes
  ) internal pure returns (PackedCounter _encodedLengths) {
    // Lengths are effectively checked during copy by 2**40 bytes exceeding gas limits
    unchecked {
      _encodedLengths = PackedCounterLib.pack(bytes(sentence).length, votes.length * 20);
    }
  }

  /**
   * @notice Tightly pack dynamic (variable length) data using this table's schema.
   * @return The dynamic data, encoded into a sequence of bytes.
   */
  function encodeDynamic(string memory sentence, address[] memory votes) internal pure returns (bytes memory) {
    return abi.encodePacked(bytes((sentence)), EncodeArray.encode((votes)));
  }

  /**
   * @notice Encode all of a record's fields.
   * @return The static (fixed length) data, encoded into a sequence of bytes.
   * @return The lengths of the dynamic fields (packed into a single bytes32 value).
   * @return The dyanmic (variable length) data, encoded into a sequence of bytes.
   */
  function encode(
    uint256 proposedOnBlock,
    bytes32 parentKey,
    uint256 timestamp,
    address proposer,
    string memory sentence,
    address[] memory votes
  ) internal pure returns (bytes memory, PackedCounter, bytes memory) {
    bytes memory _staticData = encodeStatic(proposedOnBlock, parentKey, timestamp, proposer);

    PackedCounter _encodedLengths = encodeLengths(sentence, votes);
    bytes memory _dynamicData = encodeDynamic(sentence, votes);

    return (_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Encode keys as a bytes32 array using this table's field layout.
   */
  function encodeKeyTuple(bytes32 key) internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    return _keyTuple;
  }
}
