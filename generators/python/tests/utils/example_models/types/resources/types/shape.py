# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.unchecked_base_model import UncheckedBaseModel, UnionMetadata


class Base(UncheckedBaseModel):
    id: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class Shape_Circle(Base):
    radius: float
    type: typing.Literal["circle"] = "circle"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class Shape_Square(Base):
    length: float
    type: typing.Literal["square"] = "square"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


Shape = typing_extensions.Annotated[typing.Union[Shape_Circle, Shape_Square], UnionMetadata(discriminant="type")]
