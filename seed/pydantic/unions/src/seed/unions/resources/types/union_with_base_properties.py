# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing


class Base(UniversalBaseModel):
    id: str


class UnionWithBaseProperties_Integer(Base):
    value: int
    type: typing.Literal["integer"] = "integer"


class UnionWithBaseProperties_String(Base):
    value: str
    type: typing.Literal["string"] = "string"


class UnionWithBaseProperties_Foo(Base):
    type: typing.Literal["foo"] = "foo"
    name: str


UnionWithBaseProperties = typing.Union[
    UnionWithBaseProperties_Integer, UnionWithBaseProperties_String, UnionWithBaseProperties_Foo
]
