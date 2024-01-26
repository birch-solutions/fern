# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def integer_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.IntegerType(type="integerType"))

    def double_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.DoubleType(type="doubleType"))

    def boolean_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.BooleanType(type="booleanType"))

    def string_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.StringType(type="stringType"))

    def char_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.CharType(type="charType"))

    def list_type(self, value: resources_commons_types_list_type_ListType) -> VariableType:
        return VariableType(__root__=_VariableType.ListType(**value.dict(exclude_unset=True), type="listType"))

    def map_type(self, value: resources_commons_types_map_type_MapType) -> VariableType:
        return VariableType(__root__=_VariableType.MapType(**value.dict(exclude_unset=True), type="mapType"))

    def binary_tree_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.BinaryTreeType(type="binaryTreeType"))

    def singly_linked_list_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.SinglyLinkedListType(type="singlyLinkedListType"))

    def doubly_linked_list_type(self) -> VariableType:
        return VariableType(__root__=_VariableType.DoublyLinkedListType(type="doublyLinkedListType"))


class VariableType(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(
        self,
    ) -> typing.Union[
        _VariableType.IntegerType,
        _VariableType.DoubleType,
        _VariableType.BooleanType,
        _VariableType.StringType,
        _VariableType.CharType,
        _VariableType.ListType,
        _VariableType.MapType,
        _VariableType.BinaryTreeType,
        _VariableType.SinglyLinkedListType,
        _VariableType.DoublyLinkedListType,
    ]:
        return self.__root__

    def visit(
        self,
        integer_type: typing.Callable[[], T_Result],
        double_type: typing.Callable[[], T_Result],
        boolean_type: typing.Callable[[], T_Result],
        string_type: typing.Callable[[], T_Result],
        char_type: typing.Callable[[], T_Result],
        list_type: typing.Callable[[resources_commons_types_list_type_ListType], T_Result],
        map_type: typing.Callable[[resources_commons_types_map_type_MapType], T_Result],
        binary_tree_type: typing.Callable[[], T_Result],
        singly_linked_list_type: typing.Callable[[], T_Result],
        doubly_linked_list_type: typing.Callable[[], T_Result],
    ) -> T_Result:
        if self.__root__.type == "integerType":
            return integer_type()
        if self.__root__.type == "doubleType":
            return double_type()
        if self.__root__.type == "booleanType":
            return boolean_type()
        if self.__root__.type == "stringType":
            return string_type()
        if self.__root__.type == "charType":
            return char_type()
        if self.__root__.type == "listType":
            return list_type(
                resources_commons_types_list_type_ListType(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "mapType":
            return map_type(
                resources_commons_types_map_type_MapType(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "binaryTreeType":
            return binary_tree_type()
        if self.__root__.type == "singlyLinkedListType":
            return singly_linked_list_type()
        if self.__root__.type == "doublyLinkedListType":
            return doubly_linked_list_type()

    __root__: typing_extensions.Annotated[
        typing.Union[
            _VariableType.IntegerType,
            _VariableType.DoubleType,
            _VariableType.BooleanType,
            _VariableType.StringType,
            _VariableType.CharType,
            _VariableType.ListType,
            _VariableType.MapType,
            _VariableType.BinaryTreeType,
            _VariableType.SinglyLinkedListType,
            _VariableType.DoublyLinkedListType,
        ],
        pydantic.Field(discriminator="type"),
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


from .list_type import ListType as resources_commons_types_list_type_ListType  # noqa: E402
from .map_type import MapType as resources_commons_types_map_type_MapType  # noqa: E402


class _VariableType:
    class IntegerType(pydantic.BaseModel):
        type: typing_extensions.Literal["integerType"]

    class DoubleType(pydantic.BaseModel):
        type: typing_extensions.Literal["doubleType"]

    class BooleanType(pydantic.BaseModel):
        type: typing_extensions.Literal["booleanType"]

    class StringType(pydantic.BaseModel):
        type: typing_extensions.Literal["stringType"]

    class CharType(pydantic.BaseModel):
        type: typing_extensions.Literal["charType"]

    class ListType(resources_commons_types_list_type_ListType):
        type: typing_extensions.Literal["listType"]

        class Config:
            allow_population_by_field_name = True

    class MapType(resources_commons_types_map_type_MapType):
        type: typing_extensions.Literal["mapType"]

        class Config:
            allow_population_by_field_name = True

    class BinaryTreeType(pydantic.BaseModel):
        type: typing_extensions.Literal["binaryTreeType"]

    class SinglyLinkedListType(pydantic.BaseModel):
        type: typing_extensions.Literal["singlyLinkedListType"]

    class DoublyLinkedListType(pydantic.BaseModel):
        type: typing_extensions.Literal["doublyLinkedListType"]


_VariableType.ListType.update_forward_refs(
    ListType=resources_commons_types_list_type_ListType,
    MapType=resources_commons_types_map_type_MapType,
    VariableType=VariableType,
)
_VariableType.MapType.update_forward_refs(
    ListType=resources_commons_types_list_type_ListType,
    MapType=resources_commons_types_map_type_MapType,
    VariableType=VariableType,
)
VariableType.update_forward_refs()
