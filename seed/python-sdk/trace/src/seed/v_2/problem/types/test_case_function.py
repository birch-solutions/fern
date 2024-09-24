# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType
import typing
import typing_extensions
from .non_void_function_definition import NonVoidFunctionDefinition
from ....core.serialization import FieldMetadata
from .assert_correctness_check import AssertCorrectnessCheck
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .parameter import Parameter
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from ....core.pydantic_utilities import update_forward_refs


class TestCaseFunction_WithActualResult(UniversalBaseModel):
    type: typing.Literal["withActualResult"] = "withActualResult"
    get_actual_result: typing_extensions.Annotated[NonVoidFunctionDefinition, FieldMetadata(alias="getActualResult")]
    assert_correctness_check: typing_extensions.Annotated[
        AssertCorrectnessCheck, FieldMetadata(alias="assertCorrectnessCheck")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class TestCaseFunction_Custom(UniversalBaseModel):
    type: typing.Literal["custom"] = "custom"
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


TestCaseFunction = typing.Union[TestCaseFunction_WithActualResult, TestCaseFunction_Custom]
update_forward_refs(ListType, TestCaseFunction_WithActualResult=TestCaseFunction_WithActualResult)
update_forward_refs(MapType, TestCaseFunction_WithActualResult=TestCaseFunction_WithActualResult)
update_forward_refs(ListType, TestCaseFunction_Custom=TestCaseFunction_Custom)
update_forward_refs(MapType, TestCaseFunction_Custom=TestCaseFunction_Custom)
