# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1


class Base(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed import Metadata_Html

    Metadata_Html(value="<head>...</head>")
    """

    extra: typing.Dict[str, str]
    tags: typing.Set[str]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class Metadata_Html(Base):
    value: str
    type: typing.Literal["html"] = "html"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class Metadata_Markdown(Base):
    value: str
    type: typing.Literal["markdown"] = "markdown"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


"""
from seed import Metadata_Html

Metadata_Html(value="<head>...</head>")
"""
Metadata = typing.Union[Metadata_Html, Metadata_Markdown]
