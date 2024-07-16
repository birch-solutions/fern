# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, UniversalRootModel
from .bar import Bar as resources_types_types_bar_Bar
from .foo import Foo as resources_types_types_foo_Foo

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: resources_types_types_foo_Foo) -> UnionWithDiscriminant:
        return UnionWithDiscriminant(_UnionWithDiscriminant.Foo(type="foo", foo=value))

    def bar(self, value: resources_types_types_bar_Bar) -> UnionWithDiscriminant:
        return UnionWithDiscriminant(_UnionWithDiscriminant.Bar(type="bar", bar=value))


class UnionWithDiscriminant(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar]:
            return self.root

    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar]:
            return self.__root__

    def visit(
        self,
        foo: typing.Callable[[resources_types_types_foo_Foo], T_Result],
        bar: typing.Callable[[resources_types_types_bar_Bar], T_Result],
    ) -> T_Result:
        if self.get_as_union().type == "foo":
            return foo(self.get_as_union().foo)
        if self.get_as_union().type == "bar":
            return bar(self.get_as_union().bar)


class _UnionWithDiscriminant:
    class Foo(UniversalBaseModel):
        type: typing.Literal["foo"] = pydantic.Field(alias="_type", default="foo")
        foo: resources_types_types_foo_Foo

        class Config:
            allow_population_by_field_name = True

    class Bar(UniversalBaseModel):
        type: typing.Literal["bar"] = pydantic.Field(alias="_type", default="bar")
        bar: resources_types_types_bar_Bar

        class Config:
            allow_population_by_field_name = True
