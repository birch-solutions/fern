# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing
from .stack_frame import StackFrame
from ...core.pydantic_utilities import IS_PYDANTIC_V2


class StackInformation(UniversalBaseModel):
    num_stack_frames: int = pydantic.Field(alias="numStackFrames")
    top_stack_frame: typing.Optional[StackFrame] = pydantic.Field(
        alias="topStackFrame", default=None
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
