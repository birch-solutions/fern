# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class Base(UniversalBaseModel):
    id: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class UnionWithBaseProperties_Integer(Base):
    value: int
    type: typing.Literal["integer"] = "integer"


class UnionWithBaseProperties_String(Base):
    value: str
    type: typing.Literal["string"] = "string"


class UnionWithBaseProperties_Foo(Base):
    type: typing.Literal["foo"] = "foo"
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


UnionWithBaseProperties = typing.Union[
    UnionWithBaseProperties_Integer, UnionWithBaseProperties_String, UnionWithBaseProperties_Foo
]
