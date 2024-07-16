# This file was auto-generated by Fern from our API Definition.

import typing
import uuid

import pydantic

from ......core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Foo(UniversalBaseModel):
    bar_property: uuid.UUID

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
