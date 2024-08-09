# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2
import pydantic
from .....core.pydantic_utilities import IS_PYDANTIC_V2


class GetGeneratedTestCaseFileRequest(UniversalBaseModel):
    template: typing.Optional[TestCaseTemplate] = None
    test_case: TestCaseV2 = pydantic.Field(alias="testCase")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
