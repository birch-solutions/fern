# This file was auto-generated by Fern from our API Definition.

from .......core.pydantic_utilities import UniversalBaseModel
from .......id import Id
import typing


class Metadata(UniversalBaseModel):
    id: Id
    value: typing.Optional[typing.Any] = None
