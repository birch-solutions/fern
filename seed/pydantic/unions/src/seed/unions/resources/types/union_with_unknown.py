# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class UnionWithUnknown_Foo(pydantic_v1.BaseModel):
    type: typing.Literal["foo"] = "foo"
    name: str


class UnionWithUnknown_Unknown(pydantic_v1.BaseModel):
    type: typing.Literal["unknown"] = "unknown"


UnionWithUnknown = typing.Union[UnionWithUnknown_Foo, UnionWithUnknown_Unknown]
