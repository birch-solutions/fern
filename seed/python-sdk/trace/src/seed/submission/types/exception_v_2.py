# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
import typing_extensions
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ExceptionV2_Generic(UniversalBaseModel):
    type: typing.Literal["generic"] = "generic"
    exception_type: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionType")]
    exception_message: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionMessage")]
    exception_stacktrace: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionStacktrace")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class ExceptionV2_Timeout(UniversalBaseModel):
    type: typing.Literal["timeout"] = "timeout"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


ExceptionV2 = typing.Union[ExceptionV2_Generic, ExceptionV2_Timeout]
