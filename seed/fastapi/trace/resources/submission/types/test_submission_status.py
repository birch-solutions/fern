# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .error_info import ErrorInfo
from .running_submission_state import RunningSubmissionState
import typing
from .submission_status_for_test_case import SubmissionStatusForTestCase
from ....core.pydantic_utilities import UniversalRootModel
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def stopped(self) -> TestSubmissionStatus:
        if IS_PYDANTIC_V2:
            return TestSubmissionStatus(
                root=_TestSubmissionStatus.Stopped(type="stopped")
            )
        else:
            return TestSubmissionStatus(
                __root__=_TestSubmissionStatus.Stopped(type="stopped")
            )

    def errored(self, value: ErrorInfo) -> TestSubmissionStatus:
        if IS_PYDANTIC_V2:
            return TestSubmissionStatus(
                root=_TestSubmissionStatus.Errored(type="errored", value=value)
            )
        else:
            return TestSubmissionStatus(
                __root__=_TestSubmissionStatus.Errored(type="errored", value=value)
            )

    def running(self, value: RunningSubmissionState) -> TestSubmissionStatus:
        if IS_PYDANTIC_V2:
            return TestSubmissionStatus(
                root=_TestSubmissionStatus.Running(type="running", value=value)
            )
        else:
            return TestSubmissionStatus(
                __root__=_TestSubmissionStatus.Running(type="running", value=value)
            )

    def test_case_id_to_state(
        self, value: typing.Dict[str, SubmissionStatusForTestCase]
    ) -> TestSubmissionStatus:
        if IS_PYDANTIC_V2:
            return TestSubmissionStatus(
                root=_TestSubmissionStatus.TestCaseIdToState(
                    type="testCaseIdToState", value=value
                )
            )
        else:
            return TestSubmissionStatus(
                __root__=_TestSubmissionStatus.TestCaseIdToState(
                    type="testCaseIdToState", value=value
                )
            )


class TestSubmissionStatus(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _TestSubmissionStatus.Stopped,
                _TestSubmissionStatus.Errored,
                _TestSubmissionStatus.Running,
                _TestSubmissionStatus.TestCaseIdToState,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestSubmissionStatus.Stopped,
            _TestSubmissionStatus.Errored,
            _TestSubmissionStatus.Running,
            _TestSubmissionStatus.TestCaseIdToState,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _TestSubmissionStatus.Stopped,
                _TestSubmissionStatus.Errored,
                _TestSubmissionStatus.Running,
                _TestSubmissionStatus.TestCaseIdToState,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestSubmissionStatus.Stopped,
            _TestSubmissionStatus.Errored,
            _TestSubmissionStatus.Running,
            _TestSubmissionStatus.TestCaseIdToState,
        ]:
            return self.__root__

    def visit(
        self,
        stopped: typing.Callable[[], T_Result],
        errored: typing.Callable[[ErrorInfo], T_Result],
        running: typing.Callable[[RunningSubmissionState], T_Result],
        test_case_id_to_state: typing.Callable[
            [typing.Dict[str, SubmissionStatusForTestCase]], T_Result
        ],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "stopped":
            return stopped()
        if unioned_value.type == "errored":
            return errored(unioned_value.value)
        if unioned_value.type == "running":
            return running(unioned_value.value)
        if unioned_value.type == "testCaseIdToState":
            return test_case_id_to_state(unioned_value.value)


class _TestSubmissionStatus:
    class Stopped(UniversalBaseModel):
        type: typing.Literal["stopped"] = "stopped"

    class Errored(UniversalBaseModel):
        type: typing.Literal["errored"] = "errored"
        value: ErrorInfo

    class Running(UniversalBaseModel):
        type: typing.Literal["running"] = "running"
        value: RunningSubmissionState

    class TestCaseIdToState(UniversalBaseModel):
        type: typing.Literal["testCaseIdToState"] = "testCaseIdToState"
        value: typing.Dict[str, SubmissionStatusForTestCase]


update_forward_refs(TestSubmissionStatus)
