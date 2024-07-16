# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from .....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .assert_correctness_check import AssertCorrectnessCheck
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .non_void_function_definition import NonVoidFunctionDefinition
from .parameter import Parameter


class TestCaseFunction_WithActualResult(UniversalBaseModel):
    get_actual_result: NonVoidFunctionDefinition = pydantic.Field(alias="getActualResult")
    assert_correctness_check: AssertCorrectnessCheck = pydantic.Field(alias="assertCorrectnessCheck")
    type: typing.Literal["withActualResult"] = "withActualResult"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class TestCaseFunction_Custom(UniversalBaseModel):
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages
    type: typing.Literal["custom"] = "custom"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


TestCaseFunction = typing.Union[TestCaseFunction_WithActualResult, TestCaseFunction_Custom]
