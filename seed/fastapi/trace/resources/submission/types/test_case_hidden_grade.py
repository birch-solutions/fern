# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic


class TestCaseHiddenGrade(UniversalBaseModel):
    passed: bool

    class Config:
        extra = pydantic.Extra.forbid
