# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
from .......commons.types.list_type import ListType
from .......commons.types.map_type import MapType
from .......commons.types.key_value_pair import KeyValuePair
from .......commons.types.map_value import MapValue
import typing
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2
import pydantic
from ........core.pydantic_utilities import IS_PYDANTIC_V2
from ........core.pydantic_utilities import update_forward_refs


class GetGeneratedTestCaseFileRequest(UniversalBaseModel):
    template: typing.Optional[TestCaseTemplate] = None
    test_case: TestCaseV2 = pydantic.Field(alias="testCase")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(MapType)
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
update_forward_refs(ListType)
