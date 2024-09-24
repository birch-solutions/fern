# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....types.type import Type
import pydantic


class ResponseType(UniversalBaseModel):
    type: Type

    class Config:
        extra = pydantic.Extra.forbid
