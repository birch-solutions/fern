# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.variable_value import VariableValue
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
import typing_extensions
from ...core.serialization import FieldMetadata
from .exception_v_2 import ExceptionV2


class ActualResult_Value(UniversalBaseModel):
    value: VariableValue
    type: typing.Literal["value"] = "value"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class ActualResult_Exception(UniversalBaseModel):
    type: typing.Literal["exception"] = "exception"
    exception_type: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionType")]
    exception_message: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionMessage")]
    exception_stacktrace: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionStacktrace")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class ActualResult_ExceptionV2(UniversalBaseModel):
    value: ExceptionV2
    type: typing.Literal["exceptionV2"] = "exceptionV2"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


ActualResult = typing.Union[ActualResult_Value, ActualResult_Exception, ActualResult_ExceptionV2]
