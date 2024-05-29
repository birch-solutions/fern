# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import deep_union_pydantic_dicts, pydantic_v1
from .bar import Bar as resources_types_types_bar_Bar
from .foo import Foo as resources_types_types_foo_Foo

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: resources_types_types_foo_Foo) -> UnionWithDiscriminant:
        return UnionWithDiscriminant(__root__=_UnionWithDiscriminant.Foo(type="foo", foo=value))

    def bar(self, value: resources_types_types_bar_Bar) -> UnionWithDiscriminant:
        return UnionWithDiscriminant(__root__=_UnionWithDiscriminant.Bar(type="bar", bar=value))


class UnionWithDiscriminant(pydantic_v1.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar]:
        return self.__root__

    def visit(
        self,
        foo: typing.Callable[[resources_types_types_foo_Foo], T_Result],
        bar: typing.Callable[[resources_types_types_bar_Bar], T_Result],
    ) -> T_Result:
        if self.__root__.type == "foo":
            return foo(self.__root__.foo)
        if self.__root__.type == "bar":
            return bar(self.__root__.bar)

    __root__: typing_extensions.Annotated[
        typing.Union[_UnionWithDiscriminant.Foo, _UnionWithDiscriminant.Bar], pydantic_v1.Field(discriminator="type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _UnionWithDiscriminant:
    class Foo(pydantic_v1.BaseModel):
        type: typing.Literal["foo"] = pydantic_v1.Field(alias="_type", default="foo")
        foo: resources_types_types_foo_Foo

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Bar(pydantic_v1.BaseModel):
        type: typing.Literal["bar"] = pydantic_v1.Field(alias="_type", default="bar")
        bar: resources_types_types_bar_Bar

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


UnionWithDiscriminant.update_forward_refs()
