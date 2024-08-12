# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
from ..types.shape import Shape
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class CreateRequest(UniversalBaseModel):
    decimal: float
    even: int
    name: str
    shape: Shape

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
