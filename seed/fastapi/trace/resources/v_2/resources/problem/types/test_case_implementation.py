# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
from .test_case_implementation_description import TestCaseImplementationDescription
from .test_case_function import TestCaseFunction
import pydantic


class TestCaseImplementation(UniversalBaseModel):
    description: TestCaseImplementationDescription
    function: TestCaseFunction

    class Config:
        extra = pydantic.Extra.forbid
