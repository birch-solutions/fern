# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ....types.metadata import Metadata


class CreateRequest(UniversalBaseModel):
    username: typing.Optional[str] = None
    email: typing.Optional[str] = None
    age: typing.Optional[int] = None
    weight: typing.Optional[float] = None
    metadata: typing.Optional[Metadata] = None
