# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class UnionWithoutKey_Foo(pydantic_v1.BaseModel):
    type: typing.Literal["foo"] = "foo"
    name: str

    class Config:
        frozen = True
        smart_union = True


class UnionWithoutKey_Bar(pydantic_v1.BaseModel):
    type: typing.Literal["bar"] = "bar"
    name: str

    class Config:
        frozen = True
        smart_union = True


UnionWithoutKey = typing.Union[UnionWithoutKey_Foo, UnionWithoutKey_Bar]
