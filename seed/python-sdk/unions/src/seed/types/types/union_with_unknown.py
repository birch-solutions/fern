# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class UnionWithUnknown_Foo(pydantic_v1.BaseModel):
    type: typing.Literal["foo"] = "foo"
    name: str

    class Config:
        frozen = True
        smart_union = True


class UnionWithUnknown_Unknown(pydantic_v1.BaseModel):
    type: typing.Literal["unknown"] = "unknown"

    class Config:
        frozen = True
        smart_union = True


UnionWithUnknown = typing.Union[UnionWithUnknown_Foo, UnionWithUnknown_Unknown]
