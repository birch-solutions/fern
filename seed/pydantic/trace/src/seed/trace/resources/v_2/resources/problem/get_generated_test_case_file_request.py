# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from .....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2


class GetGeneratedTestCaseFileRequest(UniversalBaseModel):
    template: typing.Optional[TestCaseTemplate] = None
    test_case: TestCaseV2 = pydantic.Field(alias="testCase")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
