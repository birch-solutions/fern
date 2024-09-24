# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
from .non_void_function_definition import NonVoidFunctionDefinition
import pydantic
from .assert_correctness_check import AssertCorrectnessCheck


class TestCaseWithActualResultImplementation(UniversalBaseModel):
    get_actual_result: NonVoidFunctionDefinition = pydantic.Field(
        alias="getActualResult"
    )
    assert_correctness_check: AssertCorrectnessCheck = pydantic.Field(
        alias="assertCorrectnessCheck"
    )

    class Config:
        extra = pydantic.Extra.forbid
