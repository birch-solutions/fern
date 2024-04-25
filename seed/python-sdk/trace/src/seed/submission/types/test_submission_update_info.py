# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .error_info import ErrorInfo
from .graded_test_case_update import GradedTestCaseUpdate
from .recorded_test_case_update import RecordedTestCaseUpdate
from .running_submission_state import RunningSubmissionState


class TestSubmissionUpdateInfo_Running(pydantic_v1.BaseModel):
    type: typing.Literal["running"] = "running"
    value: RunningSubmissionState

    class Config:
        frozen = True
        smart_union = True


class TestSubmissionUpdateInfo_Stopped(pydantic_v1.BaseModel):
    type: typing.Literal["stopped"] = "stopped"

    class Config:
        frozen = True
        smart_union = True


class TestSubmissionUpdateInfo_Errored(pydantic_v1.BaseModel):
    type: typing.Literal["errored"] = "errored"
    value: ErrorInfo

    class Config:
        frozen = True
        smart_union = True


class TestSubmissionUpdateInfo_GradedTestCase(GradedTestCaseUpdate):
    type: typing.Literal["gradedTestCase"] = "gradedTestCase"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class TestSubmissionUpdateInfo_RecordedTestCase(RecordedTestCaseUpdate):
    type: typing.Literal["recordedTestCase"] = "recordedTestCase"

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class TestSubmissionUpdateInfo_Finished(pydantic_v1.BaseModel):
    type: typing.Literal["finished"] = "finished"

    class Config:
        frozen = True
        smart_union = True


TestSubmissionUpdateInfo = typing.Union[
    TestSubmissionUpdateInfo_Running,
    TestSubmissionUpdateInfo_Stopped,
    TestSubmissionUpdateInfo_Errored,
    TestSubmissionUpdateInfo_GradedTestCase,
    TestSubmissionUpdateInfo_RecordedTestCase,
    TestSubmissionUpdateInfo_Finished,
]
