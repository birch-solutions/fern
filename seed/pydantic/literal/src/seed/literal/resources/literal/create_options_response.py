# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import typing_extensions

from .options import Options

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class CreateOptionsResponse_Ok(pydantic.BaseModel):
    type: typing_extensions.Literal["ok"]
    value: typing_extensions.Literal[True]


class CreateOptionsResponse_Options(Options):
    type: typing_extensions.Literal["options"]

    class Config:
        allow_population_by_field_name = True


CreateOptionsResponse = typing.Union[CreateOptionsResponse_Ok, CreateOptionsResponse_Options]
