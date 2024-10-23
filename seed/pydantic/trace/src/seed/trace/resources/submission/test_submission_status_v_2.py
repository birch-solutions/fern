# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.key_value_pair import KeyValuePair
from ..commons.map_value import MapValue
from ..commons.list_type import ListType
from ..commons.map_type import MapType
import typing
from .test_submission_update import TestSubmissionUpdate
from ..commons.problem_id import ProblemId
import pydantic
from ..v_2.resources.problem.problem_info_v_2 import ProblemInfoV2
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import update_forward_refs


class TestSubmissionStatusV2(UniversalBaseModel):
    updates: typing.List[TestSubmissionUpdate]
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    problem_version: int = pydantic.Field(alias="problemVersion")
    problem_info: ProblemInfoV2 = pydantic.Field(alias="problemInfo")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(MapValue, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(ListType, TestSubmissionStatusV2=TestSubmissionStatusV2)
update_forward_refs(MapType, TestSubmissionStatusV2=TestSubmissionStatusV2)
