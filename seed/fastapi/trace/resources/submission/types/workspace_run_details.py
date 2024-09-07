# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from .exception_v_2 import ExceptionV2
import pydantic
from .exception_info import ExceptionInfo
from ....core.pydantic_utilities import IS_PYDANTIC_V2


class WorkspaceRunDetails(UniversalBaseModel):
    exception_v_2: typing.Optional[ExceptionV2] = pydantic.Field(
        alias="exceptionV2", default=None
    )
    exception: typing.Optional[ExceptionInfo] = None
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
