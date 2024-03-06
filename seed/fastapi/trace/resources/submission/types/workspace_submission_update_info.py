# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from .error_info import ErrorInfo
from .running_submission_state import RunningSubmissionState
from .workspace_run_details import WorkspaceRunDetails
from .workspace_traced_update import WorkspaceTracedUpdate

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def running(self, value: RunningSubmissionState) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(
            __root__=_WorkspaceSubmissionUpdateInfo.Running(type="running", value=value)
        )

    def ran(self, value: WorkspaceRunDetails) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(
            __root__=_WorkspaceSubmissionUpdateInfo.Ran(**value.dict(exclude_unset=True), type="ran")
        )

    def stopped(self) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(__root__=_WorkspaceSubmissionUpdateInfo.Stopped(type="stopped"))

    def traced(self) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(__root__=_WorkspaceSubmissionUpdateInfo.Traced(type="traced"))

    def traced_v_2(self, value: WorkspaceTracedUpdate) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(
            __root__=_WorkspaceSubmissionUpdateInfo.TracedV2(**value.dict(exclude_unset=True), type="tracedV2")
        )

    def errored(self, value: ErrorInfo) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(
            __root__=_WorkspaceSubmissionUpdateInfo.Errored(type="errored", value=value)
        )

    def finished(self) -> WorkspaceSubmissionUpdateInfo:
        return WorkspaceSubmissionUpdateInfo(__root__=_WorkspaceSubmissionUpdateInfo.Finished(type="finished"))


class WorkspaceSubmissionUpdateInfo(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(
        self,
    ) -> typing.Union[
        _WorkspaceSubmissionUpdateInfo.Running,
        _WorkspaceSubmissionUpdateInfo.Ran,
        _WorkspaceSubmissionUpdateInfo.Stopped,
        _WorkspaceSubmissionUpdateInfo.Traced,
        _WorkspaceSubmissionUpdateInfo.TracedV2,
        _WorkspaceSubmissionUpdateInfo.Errored,
        _WorkspaceSubmissionUpdateInfo.Finished,
    ]:
        return self.__root__

    def visit(
        self,
        running: typing.Callable[[RunningSubmissionState], T_Result],
        ran: typing.Callable[[WorkspaceRunDetails], T_Result],
        stopped: typing.Callable[[], T_Result],
        traced: typing.Callable[[], T_Result],
        traced_v_2: typing.Callable[[WorkspaceTracedUpdate], T_Result],
        errored: typing.Callable[[ErrorInfo], T_Result],
        finished: typing.Callable[[], T_Result],
    ) -> T_Result:
        if self.__root__.type == "running":
            return running(self.__root__.value)
        if self.__root__.type == "ran":
            return ran(WorkspaceRunDetails(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "stopped":
            return stopped()
        if self.__root__.type == "traced":
            return traced()
        if self.__root__.type == "tracedV2":
            return traced_v_2(WorkspaceTracedUpdate(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "errored":
            return errored(self.__root__.value)
        if self.__root__.type == "finished":
            return finished()

    __root__: typing.Annotated[
        typing.Union[
            _WorkspaceSubmissionUpdateInfo.Running,
            _WorkspaceSubmissionUpdateInfo.Ran,
            _WorkspaceSubmissionUpdateInfo.Stopped,
            _WorkspaceSubmissionUpdateInfo.Traced,
            _WorkspaceSubmissionUpdateInfo.TracedV2,
            _WorkspaceSubmissionUpdateInfo.Errored,
            _WorkspaceSubmissionUpdateInfo.Finished,
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


class _WorkspaceSubmissionUpdateInfo:
    class Running(pydantic.BaseModel):
        type: typing.Literal["running"]
        value: RunningSubmissionState

    class Ran(WorkspaceRunDetails):
        type: typing.Literal["ran"]

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Stopped(pydantic.BaseModel):
        type: typing.Literal["stopped"]

    class Traced(pydantic.BaseModel):
        type: typing.Literal["traced"]

    class TracedV2(WorkspaceTracedUpdate):
        type: typing.Literal["tracedV2"]

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Errored(pydantic.BaseModel):
        type: typing.Literal["errored"]
        value: ErrorInfo

    class Finished(pydantic.BaseModel):
        type: typing.Literal["finished"]


WorkspaceSubmissionUpdateInfo.update_forward_refs()
