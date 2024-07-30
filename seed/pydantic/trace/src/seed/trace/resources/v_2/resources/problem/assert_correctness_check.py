# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from .....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .parameter import Parameter
from .parameter_id import ParameterId


class AssertCorrectnessCheck_DeepEquality(UniversalBaseModel):
    type: typing.Literal["deepEquality"] = "deepEquality"
    expected_value_parameter_id: ParameterId = pydantic.Field(alias="expectedValueParameterId")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class AssertCorrectnessCheck_Custom(UniversalBaseModel):
    type: typing.Literal["custom"] = "custom"
    additional_parameters: typing.List[Parameter] = pydantic.Field(alias="additionalParameters")
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


AssertCorrectnessCheck = typing.Union[AssertCorrectnessCheck_DeepEquality, AssertCorrectnessCheck_Custom]
