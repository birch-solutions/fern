# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .map_value import MapValue
from .key_value_pair import KeyValuePair
import typing_extensions
from .test_case import TestCase
from ...core.serialization import FieldMetadata
from .variable_value import VariableValue
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class TestCaseWithExpectedResult(UniversalBaseModel):
    test_case: typing_extensions.Annotated[TestCase, FieldMetadata(alias="testCase")]
    expected_result: typing_extensions.Annotated[VariableValue, FieldMetadata(alias="expectedResult")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
