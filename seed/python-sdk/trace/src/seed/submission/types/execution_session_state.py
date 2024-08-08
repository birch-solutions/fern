# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...commons.types.language import Language
from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .execution_session_status import ExecutionSessionStatus


class ExecutionSessionState(UniversalBaseModel):
    last_time_contacted: typing.Optional[str] = pydantic.Field(alias="lastTimeContacted", default=None)
    session_id: str = pydantic.Field(alias="sessionId")
    """
    The auto-generated session id. Formatted as a uuid.
    """

    is_warm_instance: bool = pydantic.Field(alias="isWarmInstance")
    aws_task_id: typing.Optional[str] = pydantic.Field(alias="awsTaskId", default=None)
    language: Language
    status: ExecutionSessionStatus

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
