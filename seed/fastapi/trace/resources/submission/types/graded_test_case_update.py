# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
from ...v_2.resources.problem.types.test_case_id import TestCaseId
import pydantic
from .test_case_grade import TestCaseGrade
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from ....core.pydantic_utilities import update_forward_refs


class GradedTestCaseUpdate(UniversalBaseModel):
    test_case_id: TestCaseId = pydantic.Field(alias="testCaseId")
    grade: TestCaseGrade

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
