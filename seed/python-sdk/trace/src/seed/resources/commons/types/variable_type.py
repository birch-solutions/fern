# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class VariableType_IntegerType(pydantic.BaseModel):
    type: typing.Literal["integerType"] = "integerType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_DoubleType(pydantic.BaseModel):
    type: typing.Literal["doubleType"] = "doubleType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_BooleanType(pydantic.BaseModel):
    type: typing.Literal["booleanType"] = "booleanType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_StringType(pydantic.BaseModel):
    type: typing.Literal["stringType"] = "stringType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_CharType(pydantic.BaseModel):
    type: typing.Literal["charType"] = "charType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_ListType(ListType):
    type: typing.Literal["listType"] = "listType"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class VariableType_MapType(MapType):
    type: typing.Literal["mapType"] = "mapType"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class VariableType_BinaryTreeType(pydantic.BaseModel):
    type: typing.Literal["binaryTreeType"] = "binaryTreeType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_SinglyLinkedListType(pydantic.BaseModel):
    type: typing.Literal["singlyLinkedListType"] = "singlyLinkedListType"

    class Config:
        frozen = True
        smart_union = True


class VariableType_DoublyLinkedListType(pydantic.BaseModel):
    type: typing.Literal["doublyLinkedListType"] = "doublyLinkedListType"

    class Config:
        frozen = True
        smart_union = True


VariableType = typing.Union[
    VariableType_IntegerType,
    VariableType_DoubleType,
    VariableType_BooleanType,
    VariableType_StringType,
    VariableType_CharType,
    VariableType_ListType,
    VariableType_MapType,
    VariableType_BinaryTreeType,
    VariableType_SinglyLinkedListType,
    VariableType_DoublyLinkedListType,
]
from .list_type import ListType  # noqa: E402
from .map_type import MapType  # noqa: E402

VariableType_ListType.update_forward_refs(ListType=ListType, MapType=MapType, VariableType=VariableType)
VariableType_MapType.update_forward_refs(ListType=ListType, MapType=MapType, VariableType=VariableType)
