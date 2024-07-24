# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .bar import Bar
from .foo import Foo


class UnionWithDiscriminant_Foo(UniversalBaseModel):
    foo: Foo
    type: typing.Literal["foo"] = pydantic.Field(alias="_type", default="foo")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class UnionWithDiscriminant_Bar(UniversalBaseModel):
    bar: Bar
    type: typing.Literal["bar"] = pydantic.Field(alias="_type", default="bar")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


UnionWithDiscriminant = typing.Union[UnionWithDiscriminant_Foo, UnionWithDiscriminant_Bar]
