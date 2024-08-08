# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, update_forward_refs


class DebugKeyValuePairs(UniversalBaseModel):
    key: "DebugVariableValue"
    value: "DebugVariableValue"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


from .debug_variable_value import DebugVariableValue  # noqa: E402

update_forward_refs(DebugKeyValuePairs)
