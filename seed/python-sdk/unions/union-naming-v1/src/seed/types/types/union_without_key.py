# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class FooUnionWithoutKey(UniversalBaseModel):
    type: typing.Literal["foo"] = "foo"
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class BarUnionWithoutKey(UniversalBaseModel):
    type: typing.Literal["bar"] = "bar"
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


UnionWithoutKey = typing.Union[FooUnionWithoutKey, BarUnionWithoutKey]
