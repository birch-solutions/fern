# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class LightweightStackframeInformation(UniversalBaseModel):
    num_stack_frames: typing_extensions.Annotated[int, FieldMetadata(alias="numStackFrames")]
    top_stack_frame_method_name: typing_extensions.Annotated[str, FieldMetadata(alias="topStackFrameMethodName")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
