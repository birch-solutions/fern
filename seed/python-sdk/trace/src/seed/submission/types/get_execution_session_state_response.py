# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .execution_session_state import ExecutionSessionState


class GetExecutionSessionStateResponse(UniversalBaseModel):
    states: typing.Dict[str, ExecutionSessionState]
    num_warming_instances: typing.Optional[int] = pydantic.Field(alias="numWarmingInstances", default=None)
    warming_session_ids: typing.List[str] = pydantic.Field(alias="warmingSessionIds")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
