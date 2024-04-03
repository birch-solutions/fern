# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import pydantic_v1
from .foo import Foo as resources_types_types_foo_Foo

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: resources_types_types_foo_Foo) -> UnionWithUnknown:
        return UnionWithUnknown(__root__=_UnionWithUnknown.Foo(**value.dict(exclude_unset=True), type="foo"))

    def unknown(self) -> UnionWithUnknown:
        return UnionWithUnknown(__root__=_UnionWithUnknown.Unknown(type="unknown"))


class UnionWithUnknown(pydantic_v1.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown]:
        return self.__root__

    def visit(
        self, foo: typing.Callable[[resources_types_types_foo_Foo], T_Result], unknown: typing.Callable[[], T_Result]
    ) -> T_Result:
        if self.__root__.type == "foo":
            return foo(resources_types_types_foo_Foo(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "unknown":
            return unknown()

    __root__: typing_extensions.Annotated[
        typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown], pydantic_v1.Field(discriminator="type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _UnionWithUnknown:
    class Foo(resources_types_types_foo_Foo):
        type: typing.Literal["foo"] = "foo"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Unknown(pydantic_v1.BaseModel):
        type: typing.Literal["unknown"] = "unknown"


UnionWithUnknown.update_forward_refs()
