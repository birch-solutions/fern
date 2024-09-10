# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.problem_id import ProblemId
import pydantic
import typing
from ..commons.test_case import TestCase
from .test_submission_status import TestSubmissionStatus
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import update_forward_refs
from ..commons.key_value_pair import KeyValuePair
from ..commons.map_value import MapValue


class TestSubmissionState(UniversalBaseModel):
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    default_test_cases: typing.List[TestCase] = pydantic.Field(alias="defaultTestCases")
    custom_test_cases: typing.List[TestCase] = pydantic.Field(alias="customTestCases")
    status: TestSubmissionStatus

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
