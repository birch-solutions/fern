# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class VariableType_IntegerType(pydantic_v1.BaseModel):
    type: typing.Literal["integerType"] = "integerType"


class VariableType_DoubleType(pydantic_v1.BaseModel):
    type: typing.Literal["doubleType"] = "doubleType"


class VariableType_BooleanType(pydantic_v1.BaseModel):
    type: typing.Literal["booleanType"] = "booleanType"


class VariableType_StringType(pydantic_v1.BaseModel):
    type: typing.Literal["stringType"] = "stringType"


class VariableType_CharType(pydantic_v1.BaseModel):
    type: typing.Literal["charType"] = "charType"


class VariableType_ListType(pydantic_v1.BaseModel):
    type: typing.Literal["listType"] = "listType"
    value_type: VariableType = pydantic_v1.Field(alias="valueType")
    is_fixed_length: typing.Optional[bool] = pydantic_v1.Field(alias="isFixedLength")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableType_MapType(pydantic_v1.BaseModel):
    type: typing.Literal["mapType"] = "mapType"
    key_type: VariableType = pydantic_v1.Field(alias="keyType")
    value_type: VariableType = pydantic_v1.Field(alias="valueType")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class VariableType_BinaryTreeType(pydantic_v1.BaseModel):
    type: typing.Literal["binaryTreeType"] = "binaryTreeType"


class VariableType_SinglyLinkedListType(pydantic_v1.BaseModel):
    type: typing.Literal["singlyLinkedListType"] = "singlyLinkedListType"


class VariableType_DoublyLinkedListType(pydantic_v1.BaseModel):
    type: typing.Literal["doublyLinkedListType"] = "doublyLinkedListType"


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
