# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing


class StreamResponse(UniversalBaseModel):
    id: str
    name: typing.Optional[str] = None
