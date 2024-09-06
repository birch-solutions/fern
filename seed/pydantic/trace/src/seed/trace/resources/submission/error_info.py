# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
import typing_extensions
from .exception_info import ExceptionInfo
from ...core.serialization import FieldMetadata


class ErrorInfo_CompileError(UniversalBaseModel):
    type: typing.Literal["compileError"] = "compileError"
    message: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class ErrorInfo_RuntimeError(UniversalBaseModel):
    type: typing.Literal["runtimeError"] = "runtimeError"
    message: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class ErrorInfo_InternalError(UniversalBaseModel):
    type: typing.Literal["internalError"] = "internalError"
    exception_info: typing_extensions.Annotated[ExceptionInfo, FieldMetadata(alias="exceptionInfo")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


ErrorInfo = typing.Union[ErrorInfo_CompileError, ErrorInfo_RuntimeError, ErrorInfo_InternalError]
