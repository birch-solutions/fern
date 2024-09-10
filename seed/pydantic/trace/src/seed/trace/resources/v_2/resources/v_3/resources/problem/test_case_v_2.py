# This file was auto-generated by Fern from our API Definition.

from .......core.pydantic_utilities import UniversalBaseModel
from .test_case_metadata import TestCaseMetadata
from .test_case_implementation_reference import TestCaseImplementationReference
import typing
from .parameter_id import ParameterId
from ......commons.variable_value import VariableValue
from .test_case_expects import TestCaseExpects
from .......core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .......core.pydantic_utilities import update_forward_refs
from ......commons.key_value_pair import KeyValuePair
from ......commons.list_type import ListType
from ......commons.map_type import MapType
from ......commons.map_value import MapValue


class TestCaseV2(UniversalBaseModel):
    metadata: TestCaseMetadata
    implementation: TestCaseImplementationReference
    arguments: typing.Dict[ParameterId, VariableValue]
    expects: typing.Optional[TestCaseExpects] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(MapValue)
