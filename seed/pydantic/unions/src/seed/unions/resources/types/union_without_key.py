# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1


class UnionWithoutKey_Foo(pydantic_v1.BaseModel):
    name: str
    type: typing.Literal["foo"] = "foo"

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class UnionWithoutKey_Bar(pydantic_v1.BaseModel):
    name: str
    type: typing.Literal["bar"] = "bar"

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


UnionWithoutKey = typing.Union[UnionWithoutKey_Foo, UnionWithoutKey_Bar]
