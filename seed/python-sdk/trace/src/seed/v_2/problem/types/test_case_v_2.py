# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....commons.types.map_value import MapValue
from ....commons.types.key_value_pair import KeyValuePair
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType
from .test_case_metadata import TestCaseMetadata
from .test_case_implementation_reference import TestCaseImplementationReference
import typing
from .parameter_id import ParameterId
from ....commons.types.variable_value import VariableValue
from .test_case_expects import TestCaseExpects
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ....core.pydantic_utilities import update_forward_refs


class TestCaseV2(UniversalBaseModel):
    metadata: TestCaseMetadata
    implementation: TestCaseImplementationReference
    arguments: typing.Dict[ParameterId, VariableValue]
    expects: typing.Optional[TestCaseExpects] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(ListType)
update_forward_refs(MapType)
