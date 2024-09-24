# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .error_info import ErrorInfo
from .running_submission_state import RunningSubmissionState
from .workspace_run_details import WorkspaceRunDetails
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def stopped(self) -> WorkspaceSubmissionStatus:
        if IS_PYDANTIC_V2:
            return WorkspaceSubmissionStatus(
                root=_WorkspaceSubmissionStatus.Stopped(type="stopped")
            )  # type: ignore
        else:
            return WorkspaceSubmissionStatus(
                __root__=_WorkspaceSubmissionStatus.Stopped(type="stopped")
            )  # type: ignore

    def errored(self, value: ErrorInfo) -> WorkspaceSubmissionStatus:
        if IS_PYDANTIC_V2:
            return WorkspaceSubmissionStatus(
                root=_WorkspaceSubmissionStatus.Errored(type="errored", value=value)
            )  # type: ignore
        else:
            return WorkspaceSubmissionStatus(
                __root__=_WorkspaceSubmissionStatus.Errored(type="errored", value=value)
            )  # type: ignore

    def running(self, value: RunningSubmissionState) -> WorkspaceSubmissionStatus:
        if IS_PYDANTIC_V2:
            return WorkspaceSubmissionStatus(
                root=_WorkspaceSubmissionStatus.Running(type="running", value=value)
            )  # type: ignore
        else:
            return WorkspaceSubmissionStatus(
                __root__=_WorkspaceSubmissionStatus.Running(type="running", value=value)
            )  # type: ignore

    def ran(self, value: WorkspaceRunDetails) -> WorkspaceSubmissionStatus:
        if IS_PYDANTIC_V2:
            return WorkspaceSubmissionStatus(
                root=_WorkspaceSubmissionStatus.Ran(
                    **value.dict(exclude_unset=True), type="ran"
                )
            )  # type: ignore
        else:
            return WorkspaceSubmissionStatus(
                __root__=_WorkspaceSubmissionStatus.Ran(
                    **value.dict(exclude_unset=True), type="ran"
                )
            )  # type: ignore

    def traced(self, value: WorkspaceRunDetails) -> WorkspaceSubmissionStatus:
        if IS_PYDANTIC_V2:
            return WorkspaceSubmissionStatus(
                root=_WorkspaceSubmissionStatus.Traced(
                    **value.dict(exclude_unset=True), type="traced"
                )
            )  # type: ignore
        else:
            return WorkspaceSubmissionStatus(
                __root__=_WorkspaceSubmissionStatus.Traced(
                    **value.dict(exclude_unset=True), type="traced"
                )
            )  # type: ignore


class WorkspaceSubmissionStatus(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _WorkspaceSubmissionStatus.Stopped,
                _WorkspaceSubmissionStatus.Errored,
                _WorkspaceSubmissionStatus.Running,
                _WorkspaceSubmissionStatus.Ran,
                _WorkspaceSubmissionStatus.Traced,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _WorkspaceSubmissionStatus.Stopped,
            _WorkspaceSubmissionStatus.Errored,
            _WorkspaceSubmissionStatus.Running,
            _WorkspaceSubmissionStatus.Ran,
            _WorkspaceSubmissionStatus.Traced,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _WorkspaceSubmissionStatus.Stopped,
                _WorkspaceSubmissionStatus.Errored,
                _WorkspaceSubmissionStatus.Running,
                _WorkspaceSubmissionStatus.Ran,
                _WorkspaceSubmissionStatus.Traced,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _WorkspaceSubmissionStatus.Stopped,
            _WorkspaceSubmissionStatus.Errored,
            _WorkspaceSubmissionStatus.Running,
            _WorkspaceSubmissionStatus.Ran,
            _WorkspaceSubmissionStatus.Traced,
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        stopped: typing.Callable[[], T_Result],
        errored: typing.Callable[[ErrorInfo], T_Result],
        running: typing.Callable[[RunningSubmissionState], T_Result],
        ran: typing.Callable[[WorkspaceRunDetails], T_Result],
        traced: typing.Callable[[WorkspaceRunDetails], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "stopped":
            return stopped()
        if unioned_value.type == "errored":
            return errored(unioned_value.value)
        if unioned_value.type == "running":
            return running(unioned_value.value)
        if unioned_value.type == "ran":
            return ran(
                WorkspaceRunDetails(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "traced":
            return traced(
                WorkspaceRunDetails(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


class _WorkspaceSubmissionStatus:
    class Stopped(UniversalBaseModel):
        type: typing.Literal["stopped"] = "stopped"

    class Errored(UniversalBaseModel):
        type: typing.Literal["errored"] = "errored"
        value: ErrorInfo

    class Running(UniversalBaseModel):
        type: typing.Literal["running"] = "running"
        value: RunningSubmissionState

    class Ran(WorkspaceRunDetails):
        type: typing.Literal["ran"] = "ran"

    class Traced(WorkspaceRunDetails):
        type: typing.Literal["traced"] = "traced"


update_forward_refs(WorkspaceSubmissionStatus)
