# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, update_forward_refs
from .binary_tree_node_value import BinaryTreeNodeValue
from .doubly_linked_list_node_value import DoublyLinkedListNodeValue
from .node_id import NodeId
from .singly_linked_list_node_value import SinglyLinkedListNodeValue


class VariableValue_IntegerValue(UniversalBaseModel):
    value: int
    type: typing.Literal["integerValue"] = "integerValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_BooleanValue(UniversalBaseModel):
    value: bool
    type: typing.Literal["booleanValue"] = "booleanValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_DoubleValue(UniversalBaseModel):
    value: float
    type: typing.Literal["doubleValue"] = "doubleValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_StringValue(UniversalBaseModel):
    value: str
    type: typing.Literal["stringValue"] = "stringValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_CharValue(UniversalBaseModel):
    value: str
    type: typing.Literal["charValue"] = "charValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_MapValue(UniversalBaseModel):
    type: typing.Literal["mapValue"] = "mapValue"
    key_value_pairs: typing.List["KeyValuePair"] = pydantic.Field(alias="keyValuePairs")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableValue_ListValue(UniversalBaseModel):
    value: typing.List["VariableValue"]
    type: typing.Literal["listValue"] = "listValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class VariableValue_BinaryTreeValue(UniversalBaseModel):
    type: typing.Literal["binaryTreeValue"] = "binaryTreeValue"
    root: typing.Optional[NodeId] = None
    nodes: typing.Dict[NodeId, BinaryTreeNodeValue]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableValue_SinglyLinkedListValue(UniversalBaseModel):
    type: typing.Literal["singlyLinkedListValue"] = "singlyLinkedListValue"
    head: typing.Optional[NodeId] = None
    nodes: typing.Dict[NodeId, SinglyLinkedListNodeValue]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableValue_DoublyLinkedListValue(UniversalBaseModel):
    type: typing.Literal["doublyLinkedListValue"] = "doublyLinkedListValue"
    head: typing.Optional[NodeId] = None
    nodes: typing.Dict[NodeId, DoublyLinkedListNodeValue]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableValue_NullValue(UniversalBaseModel):
    type: typing.Literal["nullValue"] = "nullValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


VariableValue = typing.Union[
    VariableValue_IntegerValue,
    VariableValue_BooleanValue,
    VariableValue_DoubleValue,
    VariableValue_StringValue,
    VariableValue_CharValue,
    VariableValue_MapValue,
    VariableValue_ListValue,
    VariableValue_BinaryTreeValue,
    VariableValue_SinglyLinkedListValue,
    VariableValue_DoublyLinkedListValue,
    VariableValue_NullValue,
]
from .key_value_pair import KeyValuePair  # noqa: E402

update_forward_refs(VariableValue_MapValue)
update_forward_refs(VariableValue_ListValue)
