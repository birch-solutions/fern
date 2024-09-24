# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic


class Usage(UniversalBaseModel):
    units: typing.Optional[int] = None

    class Config:
        extra = pydantic.Extra.forbid
