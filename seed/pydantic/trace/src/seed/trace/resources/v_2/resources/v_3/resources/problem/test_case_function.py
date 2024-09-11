# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .......core.pydantic_utilities import UniversalBaseModel
from ......commons.list_type import ListType
from ......commons.map_type import MapType
import typing
from .non_void_function_definition import NonVoidFunctionDefinition
import pydantic
from .assert_correctness_check import AssertCorrectnessCheck
from .......core.pydantic_utilities import IS_PYDANTIC_V2
from .parameter import Parameter
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .......core.pydantic_utilities import update_forward_refs


class TestCaseFunction_WithActualResult(UniversalBaseModel):
    type: typing.Literal["withActualResult"] = "withActualResult"
    get_actual_result: NonVoidFunctionDefinition = pydantic.Field(alias="getActualResult")
    assert_correctness_check: AssertCorrectnessCheck = pydantic.Field(alias="assertCorrectnessCheck")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class TestCaseFunction_Custom(UniversalBaseModel):
    type: typing.Literal["custom"] = "custom"
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


TestCaseFunction = typing.Union[TestCaseFunction_WithActualResult, TestCaseFunction_Custom]
update_forward_refs(ListType, TestCaseFunction_WithActualResult=TestCaseFunction_WithActualResult)
update_forward_refs(MapType, TestCaseFunction_WithActualResult=TestCaseFunction_WithActualResult)
update_forward_refs(ListType, TestCaseFunction_Custom=TestCaseFunction_Custom)
update_forward_refs(MapType, TestCaseFunction_Custom=TestCaseFunction_Custom)
