# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .......core.pydantic_utilities import pydantic_v1
from .assert_correctness_check import AssertCorrectnessCheck
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .non_void_function_definition import NonVoidFunctionDefinition
from .parameter import Parameter


class TestCaseFunction_WithActualResult(pydantic_v1.BaseModel):
    type: typing.Literal["withActualResult"] = "withActualResult"
    get_actual_result: NonVoidFunctionDefinition = pydantic_v1.Field(alias="getActualResult")
    assert_correctness_check: AssertCorrectnessCheck = pydantic_v1.Field(alias="assertCorrectnessCheck")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class TestCaseFunction_Custom(pydantic_v1.BaseModel):
    type: typing.Literal["custom"] = "custom"
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages


TestCaseFunction = typing.Union[TestCaseFunction_WithActualResult, TestCaseFunction_Custom]
