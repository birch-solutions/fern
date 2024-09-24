# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .metadata import Metadata
import pydantic


class User(UniversalBaseModel):
    id: str
    username: str
    email: typing.Optional[str] = None
    age: typing.Optional[int] = None
    weight: typing.Optional[float] = None
    metadata: typing.Optional[Metadata] = None

    class Config:
        extra = pydantic.Extra.allow
