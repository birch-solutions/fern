# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
from .test_case_template_id import TestCaseTemplateId
import pydantic
from .test_case_implementation import TestCaseImplementation


class TestCaseTemplate(UniversalBaseModel):
    template_id: TestCaseTemplateId = pydantic.Field(alias="templateId")
    name: str
    implementation: TestCaseImplementation

    class Config:
        extra = pydantic.Extra.forbid
