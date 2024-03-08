# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class Base(pydantic.BaseModel):
    """
    from seed.examples import Metadata_Html

    Metadata_Html(type="html", value="<head>...</head>")
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
        extra = pydantic.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class Metadata_Html(Base):
    type: typing.Literal["html"]
    value: str

    class Config:
        allow_population_by_field_name = True


class Metadata_Markdown(Base):
    type: typing.Literal["markdown"]
    value: str

    class Config:
        allow_population_by_field_name = True


"""
from seed.examples import Metadata_Html

Metadata_Html(type="html", value="<head>...</head>")
"""
Metadata = typing.Union[Metadata_Html, Metadata_Markdown]
