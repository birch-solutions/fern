# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...commons.types.debug_key_value_pairs import DebugKeyValuePairs
from ...commons.types.debug_map_value import DebugMapValue
from ...submission.types.workspace_run_details import WorkspaceRunDetails
import pydantic
import typing
from ...submission.types.trace_response import TraceResponse
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import update_forward_refs


class StoreTracedWorkspaceRequest(UniversalBaseModel):
    workspace_run_details: WorkspaceRunDetails = pydantic.Field(
        alias="workspaceRunDetails"
    )
    trace_responses: typing.List[TraceResponse] = pydantic.Field(alias="traceResponses")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(DebugKeyValuePairs)
update_forward_refs(DebugMapValue)
