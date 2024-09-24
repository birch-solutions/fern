# This file was auto-generated by Fern from our API Definition.

from .core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic


class Pagination(UniversalBaseModel):
    next: typing.Optional[str] = None

    class Config:
        extra = pydantic.Extra.allow
