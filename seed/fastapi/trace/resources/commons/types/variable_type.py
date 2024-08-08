# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, UniversalRootModel, update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def integer_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.IntegerType(type="integerType"))
        else:
            return VariableType(__root__=_VariableType.IntegerType(type="integerType"))

    def double_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.DoubleType(type="doubleType"))
        else:
            return VariableType(__root__=_VariableType.DoubleType(type="doubleType"))

    def boolean_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.BooleanType(type="booleanType"))
        else:
            return VariableType(__root__=_VariableType.BooleanType(type="booleanType"))

    def string_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.StringType(type="stringType"))
        else:
            return VariableType(__root__=_VariableType.StringType(type="stringType"))

    def char_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.CharType(type="charType"))
        else:
            return VariableType(__root__=_VariableType.CharType(type="charType"))

    def list_type(self, value: resources_commons_types_list_type_ListType) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.ListType(**value.dict(exclude_unset=True), type="listType"))
        else:
            return VariableType(__root__=_VariableType.ListType(**value.dict(exclude_unset=True), type="listType"))

    def map_type(self, value: resources_commons_types_map_type_MapType) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.MapType(**value.dict(exclude_unset=True), type="mapType"))
        else:
            return VariableType(__root__=_VariableType.MapType(**value.dict(exclude_unset=True), type="mapType"))

    def binary_tree_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.BinaryTreeType(type="binaryTreeType"))
        else:
            return VariableType(__root__=_VariableType.BinaryTreeType(type="binaryTreeType"))

    def singly_linked_list_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.SinglyLinkedListType(type="singlyLinkedListType"))
        else:
            return VariableType(__root__=_VariableType.SinglyLinkedListType(type="singlyLinkedListType"))

    def doubly_linked_list_type(self) -> VariableType:
        if IS_PYDANTIC_V2:
            return VariableType(root=_VariableType.DoublyLinkedListType(type="doublyLinkedListType"))
        else:
            return VariableType(__root__=_VariableType.DoublyLinkedListType(type="doublyLinkedListType"))


class VariableType(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
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
            return self.root

    else:
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
        list_type: typing.Callable[["resources_commons_types_list_type_ListType"], T_Result],
        map_type: typing.Callable[["resources_commons_types_map_type_MapType"], T_Result],
        binary_tree_type: typing.Callable[[], T_Result],
        singly_linked_list_type: typing.Callable[[], T_Result],
        doubly_linked_list_type: typing.Callable[[], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "integerType":
            return integer_type()
        if unioned_value.type == "doubleType":
            return double_type()
        if unioned_value.type == "booleanType":
            return boolean_type()
        if unioned_value.type == "stringType":
            return string_type()
        if unioned_value.type == "charType":
            return char_type()
        if unioned_value.type == "listType":
            return list_type(
                resources_commons_types_list_type_ListType(**unioned_value.dict(exclude_unset=True, exclude={"type"}))
            )
        if unioned_value.type == "mapType":
            return map_type(
                resources_commons_types_map_type_MapType(**unioned_value.dict(exclude_unset=True, exclude={"type"}))
            )
        if unioned_value.type == "binaryTreeType":
            return binary_tree_type()
        if unioned_value.type == "singlyLinkedListType":
            return singly_linked_list_type()
        if unioned_value.type == "doublyLinkedListType":
            return doubly_linked_list_type()


from .list_type import ListType as resources_commons_types_list_type_ListType  # noqa: E402
from .map_type import MapType as resources_commons_types_map_type_MapType  # noqa: E402


class _VariableType:
    class IntegerType(UniversalBaseModel):
        type: typing.Literal["integerType"] = "integerType"

    class DoubleType(UniversalBaseModel):
        type: typing.Literal["doubleType"] = "doubleType"

    class BooleanType(UniversalBaseModel):
        type: typing.Literal["booleanType"] = "booleanType"

    class StringType(UniversalBaseModel):
        type: typing.Literal["stringType"] = "stringType"

    class CharType(UniversalBaseModel):
        type: typing.Literal["charType"] = "charType"

    class ListType(resources_commons_types_list_type_ListType):
        type: typing.Literal["listType"] = "listType"

    class MapType(resources_commons_types_map_type_MapType):
        type: typing.Literal["mapType"] = "mapType"

    class BinaryTreeType(UniversalBaseModel):
        type: typing.Literal["binaryTreeType"] = "binaryTreeType"

    class SinglyLinkedListType(UniversalBaseModel):
        type: typing.Literal["singlyLinkedListType"] = "singlyLinkedListType"

    class DoublyLinkedListType(UniversalBaseModel):
        type: typing.Literal["doublyLinkedListType"] = "doublyLinkedListType"


update_forward_refs(_VariableType.ListType)
update_forward_refs(_VariableType.MapType)
update_forward_refs(VariableType)
