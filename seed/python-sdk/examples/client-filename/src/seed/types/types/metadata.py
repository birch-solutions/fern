# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Base(UniversalBaseModel):
    """
    Examples
    --------
    from seed import Metadata_Html

    Metadata_Html(value="<head>...</head>")
    """

    extra: typing.Dict[str, str]
    tags: typing.Set[str]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class Metadata_Html(Base):
    value: str
    type: typing.Literal["html"] = "html"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class Metadata_Markdown(Base):
    value: str
    type: typing.Literal["markdown"] = "markdown"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


"""
from seed import Metadata_Html

Metadata_Html(value="<head>...</head>")
"""
Metadata = typing.Union[Metadata_Html, Metadata_Markdown]
