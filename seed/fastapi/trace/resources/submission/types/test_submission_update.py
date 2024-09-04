# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
import datetime as dt
from ....core.serialization import FieldMetadata
from .test_submission_update_info import TestSubmissionUpdateInfo
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class TestSubmissionUpdate(UniversalBaseModel):
    update_time: typing_extensions.Annotated[
        dt.datetime, FieldMetadata(alias="updateTime")
    ]
    update_info: typing_extensions.Annotated[
        TestSubmissionUpdateInfo, FieldMetadata(alias="updateInfo")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
