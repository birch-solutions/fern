# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from .building_executor_response import BuildingExecutorResponse
from .errored_response import ErroredResponse
from .finished_response import FinishedResponse
from .graded_response import GradedResponse
from .graded_response_v_2 import GradedResponseV2
from .invalid_request_response import InvalidRequestResponse
from .recorded_response_notification import RecordedResponseNotification
from .recording_response_notification import RecordingResponseNotification
from .running_response import RunningResponse
from .stopped_response import StoppedResponse
from .workspace_ran_response import WorkspaceRanResponse

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def building_executor(self, value: BuildingExecutorResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.BuildingExecutor(**value.dict(exclude_unset=True), type="buildingExecutor")
        )

    def running(self, value: RunningResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Running(**value.dict(exclude_unset=True), type="running")
        )

    def errored(self, value: ErroredResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Errored(**value.dict(exclude_unset=True), type="errored")
        )

    def stopped(self, value: StoppedResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Stopped(**value.dict(exclude_unset=True), type="stopped")
        )

    def graded(self, value: GradedResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Graded(**value.dict(exclude_unset=True), type="graded")
        )

    def graded_v_2(self, value: GradedResponseV2) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.GradedV2(**value.dict(exclude_unset=True), type="gradedV2")
        )

    def workspace_ran(self, value: WorkspaceRanResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.WorkspaceRan(**value.dict(exclude_unset=True), type="workspaceRan")
        )

    def recording(self, value: RecordingResponseNotification) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Recording(**value.dict(exclude_unset=True), type="recording")
        )

    def recorded(self, value: RecordedResponseNotification) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Recorded(**value.dict(exclude_unset=True), type="recorded")
        )

    def invalid_request(self, value: InvalidRequestResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.InvalidRequest(**value.dict(exclude_unset=True), type="invalidRequest")
        )

    def finished(self, value: FinishedResponse) -> CodeExecutionUpdate:
        return CodeExecutionUpdate(
            __root__=_CodeExecutionUpdate.Finished(**value.dict(exclude_unset=True), type="finished")
        )


class CodeExecutionUpdate(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(
        self,
    ) -> typing.Union[
        _CodeExecutionUpdate.BuildingExecutor,
        _CodeExecutionUpdate.Running,
        _CodeExecutionUpdate.Errored,
        _CodeExecutionUpdate.Stopped,
        _CodeExecutionUpdate.Graded,
        _CodeExecutionUpdate.GradedV2,
        _CodeExecutionUpdate.WorkspaceRan,
        _CodeExecutionUpdate.Recording,
        _CodeExecutionUpdate.Recorded,
        _CodeExecutionUpdate.InvalidRequest,
        _CodeExecutionUpdate.Finished,
    ]:
        return self.__root__

    def visit(
        self,
        building_executor: typing.Callable[[BuildingExecutorResponse], T_Result],
        running: typing.Callable[[RunningResponse], T_Result],
        errored: typing.Callable[[ErroredResponse], T_Result],
        stopped: typing.Callable[[StoppedResponse], T_Result],
        graded: typing.Callable[[GradedResponse], T_Result],
        graded_v_2: typing.Callable[[GradedResponseV2], T_Result],
        workspace_ran: typing.Callable[[WorkspaceRanResponse], T_Result],
        recording: typing.Callable[[RecordingResponseNotification], T_Result],
        recorded: typing.Callable[[RecordedResponseNotification], T_Result],
        invalid_request: typing.Callable[[InvalidRequestResponse], T_Result],
        finished: typing.Callable[[FinishedResponse], T_Result],
    ) -> T_Result:
        if self.__root__.type == "buildingExecutor":
            return building_executor(
                BuildingExecutorResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "running":
            return running(RunningResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "errored":
            return errored(ErroredResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "stopped":
            return stopped(StoppedResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "graded":
            return graded(GradedResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "gradedV2":
            return graded_v_2(GradedResponseV2(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "workspaceRan":
            return workspace_ran(WorkspaceRanResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "recording":
            return recording(RecordingResponseNotification(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "recorded":
            return recorded(RecordedResponseNotification(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "invalidRequest":
            return invalid_request(InvalidRequestResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "finished":
            return finished(FinishedResponse(**self.__root__.dict(exclude_unset=True, exclude={"type"})))

    __root__: typing_extensions.Annotated[
        typing.Union[
            _CodeExecutionUpdate.BuildingExecutor,
            _CodeExecutionUpdate.Running,
            _CodeExecutionUpdate.Errored,
            _CodeExecutionUpdate.Stopped,
            _CodeExecutionUpdate.Graded,
            _CodeExecutionUpdate.GradedV2,
            _CodeExecutionUpdate.WorkspaceRan,
            _CodeExecutionUpdate.Recording,
            _CodeExecutionUpdate.Recorded,
            _CodeExecutionUpdate.InvalidRequest,
            _CodeExecutionUpdate.Finished,
        ],
        pydantic.Field(discriminator="type"),
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _CodeExecutionUpdate:
    class BuildingExecutor(BuildingExecutorResponse):
        type: typing.Literal["buildingExecutor"] = "buildingExecutor"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Running(RunningResponse):
        type: typing.Literal["running"] = "running"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Errored(ErroredResponse):
        type: typing.Literal["errored"] = "errored"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Stopped(StoppedResponse):
        type: typing.Literal["stopped"] = "stopped"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Graded(GradedResponse):
        type: typing.Literal["graded"] = "graded"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class GradedV2(GradedResponseV2):
        type: typing.Literal["gradedV2"] = "gradedV2"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class WorkspaceRan(WorkspaceRanResponse):
        type: typing.Literal["workspaceRan"] = "workspaceRan"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Recording(RecordingResponseNotification):
        type: typing.Literal["recording"] = "recording"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Recorded(RecordedResponseNotification):
        type: typing.Literal["recorded"] = "recorded"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class InvalidRequest(InvalidRequestResponse):
        type: typing.Literal["invalidRequest"] = "invalidRequest"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Finished(FinishedResponse):
        type: typing.Literal["finished"] = "finished"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


CodeExecutionUpdate.update_forward_refs()
