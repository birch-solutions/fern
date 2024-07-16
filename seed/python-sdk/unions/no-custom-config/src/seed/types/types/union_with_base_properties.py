# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Base(UniversalBaseModel):
    id: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class UnionWithBaseProperties_Integer(Base):
    value: int
    type: typing.Literal["integer"] = "integer"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True


class UnionWithBaseProperties_String(Base):
    value: str
    type: typing.Literal["string"] = "string"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True


class UnionWithBaseProperties_Foo(Base):
    name: str
    type: typing.Literal["foo"] = "foo"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


UnionWithBaseProperties = typing.Union[
    UnionWithBaseProperties_Integer, UnionWithBaseProperties_String, UnionWithBaseProperties_Foo
]
