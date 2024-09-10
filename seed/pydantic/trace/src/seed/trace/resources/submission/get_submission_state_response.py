# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
import datetime as dt
import pydantic
from ..commons.language import Language
from .submission_type_state import SubmissionTypeState
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import update_forward_refs
from ..commons.key_value_pair import KeyValuePair
from ..commons.map_value import MapValue


class GetSubmissionStateResponse(UniversalBaseModel):
    time_submitted: typing.Optional[dt.datetime] = pydantic.Field(alias="timeSubmitted", default=None)
    submission: str
    language: Language
    submission_type_state: SubmissionTypeState = pydantic.Field(alias="submissionTypeState")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
