# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from .....commons.types.list_type import ListType
from .....commons.types.map_type import MapType
from .....commons.types.key_value_pair import KeyValuePair
from .....commons.types.map_value import MapValue
import typing
from .test_case_template import TestCaseTemplate
import typing_extensions
from .test_case_v_2 import TestCaseV2
from .....core.serialization import FieldMetadata
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class GetGeneratedTestCaseFileRequest(UniversalBaseModel):
    template: typing.Optional[TestCaseTemplate] = None
    test_case: typing_extensions.Annotated[TestCaseV2, FieldMetadata(alias="testCase")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType, GetGeneratedTestCaseFileRequest=GetGeneratedTestCaseFileRequest)
update_forward_refs(MapType, GetGeneratedTestCaseFileRequest=GetGeneratedTestCaseFileRequest)
update_forward_refs(KeyValuePair, GetGeneratedTestCaseFileRequest=GetGeneratedTestCaseFileRequest)
update_forward_refs(MapValue, GetGeneratedTestCaseFileRequest=GetGeneratedTestCaseFileRequest)
