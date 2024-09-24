# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.debug_key_value_pairs import DebugKeyValuePairs
from ...commons.types.debug_map_value import DebugMapValue
import typing_extensions
from ...core.serialization import FieldMetadata
import typing
from .stack_frame import StackFrame
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class StackInformation(UniversalBaseModel):
    num_stack_frames: typing_extensions.Annotated[int, FieldMetadata(alias="numStackFrames")]
    top_stack_frame: typing_extensions.Annotated[typing.Optional[StackFrame], FieldMetadata(alias="topStackFrame")] = (
        None
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


update_forward_refs(DebugKeyValuePairs, StackInformation=StackInformation)
update_forward_refs(DebugMapValue, StackInformation=StackInformation)
