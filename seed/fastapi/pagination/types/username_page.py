# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing


class UsernamePage(UniversalBaseModel):
    after: typing.Optional[str] = None
    data: typing.List[str]
