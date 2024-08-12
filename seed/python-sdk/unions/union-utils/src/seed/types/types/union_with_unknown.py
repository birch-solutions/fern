# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .foo import Foo as types_types_foo_Foo
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ...core.pydantic_utilities import UniversalBaseModel

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: types_types_foo_Foo) -> UnionWithUnknown:
        if IS_PYDANTIC_V2:
            return UnionWithUnknown(root=_UnionWithUnknown.Foo(**value.dict(exclude_unset=True), type="foo"))
        else:
            return UnionWithUnknown(__root__=_UnionWithUnknown.Foo(**value.dict(exclude_unset=True), type="foo"))

    def unknown(self) -> UnionWithUnknown:
        if IS_PYDANTIC_V2:
            return UnionWithUnknown(root=_UnionWithUnknown.Unknown(type="unknown"))
        else:
            return UnionWithUnknown(__root__=_UnionWithUnknown.Unknown(type="unknown"))


class UnionWithUnknown(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown]:
            return self.__root__

    def visit(
        self, foo: typing.Callable[[types_types_foo_Foo], T_Result], unknown: typing.Callable[[], T_Result]
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "foo":
            return foo(types_types_foo_Foo(**unioned_value.dict(exclude_unset=True, exclude={"type"})))
        if unioned_value.type == "unknown":
            return unknown()


class _UnionWithUnknown:
    class Foo(types_types_foo_Foo):
        type: typing.Literal["foo"] = "foo"

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True

    class Unknown(UniversalBaseModel):
        type: typing.Literal["unknown"] = "unknown"

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True
