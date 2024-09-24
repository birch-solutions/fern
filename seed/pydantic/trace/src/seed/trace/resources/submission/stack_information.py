# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.debug_key_value_pairs import DebugKeyValuePairs
from ..commons.debug_map_value import DebugMapValue
import pydantic
import typing
from .stack_frame import StackFrame
from ...core.pydantic_utilities import update_forward_refs


class StackInformation(UniversalBaseModel):
    num_stack_frames: int = pydantic.Field(alias="numStackFrames")
    top_stack_frame: typing.Optional[StackFrame] = pydantic.Field(alias="topStackFrame", default=None)

    class Config:
        extra = pydantic.Extra.allow


update_forward_refs(DebugKeyValuePairs, StackInformation=StackInformation)
update_forward_refs(DebugMapValue, StackInformation=StackInformation)
