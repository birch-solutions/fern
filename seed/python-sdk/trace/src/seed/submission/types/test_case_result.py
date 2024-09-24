# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
import typing_extensions
from ...commons.types.variable_value import VariableValue
from ...core.serialization import FieldMetadata
from .actual_result import ActualResult
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class TestCaseResult(UniversalBaseModel):
    expected_result: typing_extensions.Annotated[VariableValue, FieldMetadata(alias="expectedResult")]
    actual_result: typing_extensions.Annotated[ActualResult, FieldMetadata(alias="actualResult")]
    passed: bool

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair, TestCaseResult=TestCaseResult)
update_forward_refs(MapValue, TestCaseResult=TestCaseResult)
