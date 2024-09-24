# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
import typing_extensions
import typing
import datetime as dt
from ...core.serialization import FieldMetadata
from ...commons.types.language import Language
from .submission_type_state import SubmissionTypeState
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class GetSubmissionStateResponse(UniversalBaseModel):
    time_submitted: typing_extensions.Annotated[typing.Optional[dt.datetime], FieldMetadata(alias="timeSubmitted")] = (
        None
    )
    submission: str
    language: Language
    submission_type_state: typing_extensions.Annotated[SubmissionTypeState, FieldMetadata(alias="submissionTypeState")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair, GetSubmissionStateResponse=GetSubmissionStateResponse)
update_forward_refs(MapValue, GetSubmissionStateResponse=GetSubmissionStateResponse)
