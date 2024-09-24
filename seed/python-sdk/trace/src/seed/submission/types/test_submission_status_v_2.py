# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
from ...commons.types.list_type import ListType
from ...commons.types.map_type import MapType
import typing
from .test_submission_update import TestSubmissionUpdate
import typing_extensions
from ...commons.types.problem_id import ProblemId
from ...core.serialization import FieldMetadata
from ...v_2.problem.types.problem_info_v_2 import ProblemInfoV2
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class TestSubmissionStatusV2(UniversalBaseModel):
    updates: typing.List[TestSubmissionUpdate]
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_version: typing_extensions.Annotated[int, FieldMetadata(alias="problemVersion")]
    problem_info: typing_extensions.Annotated[ProblemInfoV2, FieldMetadata(alias="problemInfo")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(MapValue, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(ListType, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(MapType, TestSubmissionStatusV2=TestSubmissionStatusV2)
