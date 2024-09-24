# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
import typing_extensions
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import update_forward_refs


class VariableType_IntegerType(UniversalBaseModel):
    type: typing.Literal["integerType"] = "integerType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_DoubleType(UniversalBaseModel):
    type: typing.Literal["doubleType"] = "doubleType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_BooleanType(UniversalBaseModel):
    type: typing.Literal["booleanType"] = "booleanType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_StringType(UniversalBaseModel):
    type: typing.Literal["stringType"] = "stringType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_CharType(UniversalBaseModel):
    type: typing.Literal["charType"] = "charType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_ListType(UniversalBaseModel):
    type: typing.Literal["listType"] = "listType"
    value_type: typing_extensions.Annotated["VariableType", FieldMetadata(alias="valueType")]
    is_fixed_length: typing_extensions.Annotated[typing.Optional[bool], FieldMetadata(alias="isFixedLength")] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_MapType(UniversalBaseModel):
    type: typing.Literal["mapType"] = "mapType"
    key_type: typing_extensions.Annotated["VariableType", FieldMetadata(alias="keyType")]
    value_type: typing_extensions.Annotated["VariableType", FieldMetadata(alias="valueType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .list_type import ListType  # noqa: E402
from .map_type import MapType  # noqa: E402


class VariableType_BinaryTreeType(UniversalBaseModel):
    type: typing.Literal["binaryTreeType"] = "binaryTreeType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_SinglyLinkedListType(UniversalBaseModel):
    type: typing.Literal["singlyLinkedListType"] = "singlyLinkedListType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class VariableType_DoublyLinkedListType(UniversalBaseModel):
    type: typing.Literal["doublyLinkedListType"] = "doublyLinkedListType"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


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
update_forward_refs(ListType, VariableType_ListType=VariableType_ListType)
update_forward_refs(MapType, VariableType_ListType=VariableType_ListType)
update_forward_refs(VariableType_ListType)
update_forward_refs(ListType, VariableType_MapType=VariableType_MapType)
update_forward_refs(MapType, VariableType_MapType=VariableType_MapType)
update_forward_refs(VariableType_MapType)
