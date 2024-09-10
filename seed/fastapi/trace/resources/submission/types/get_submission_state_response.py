# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...commons.types.map_value import MapValue
from ...commons.types.key_value_pair import KeyValuePair
import typing
import datetime as dt
import pydantic
from ...commons.types.language import Language
from .submission_type_state import SubmissionTypeState
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import update_forward_refs


class GetSubmissionStateResponse(UniversalBaseModel):
    time_submitted: typing.Optional[dt.datetime] = pydantic.Field(
        alias="timeSubmitted", default=None
    )
    submission: str
    language: Language
    submission_type_state: SubmissionTypeState = pydantic.Field(
        alias="submissionTypeState"
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
