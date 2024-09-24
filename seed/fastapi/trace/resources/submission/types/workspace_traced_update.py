# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic


class WorkspaceTracedUpdate(UniversalBaseModel):
    trace_responses_size: int = pydantic.Field(alias="traceResponsesSize")

    class Config:
        extra = pydantic.Extra.forbid
