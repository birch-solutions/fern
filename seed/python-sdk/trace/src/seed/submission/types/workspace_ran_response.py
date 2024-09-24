# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .submission_id import SubmissionId
from ...core.serialization import FieldMetadata
from .workspace_run_details import WorkspaceRunDetails
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class WorkspaceRanResponse(UniversalBaseModel):
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]
    run_details: typing_extensions.Annotated[WorkspaceRunDetails, FieldMetadata(alias="runDetails")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
