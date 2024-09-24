# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .initialize_problem_request import (
    InitializeProblemRequest as resources_submission_types_initialize_problem_request_InitializeProblemRequest,
)
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .submit_request_v_2 import SubmitRequestV2
from .workspace_submit_request import WorkspaceSubmitRequest
from .stop_request import StopRequest
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def initialize_problem_request(
        self,
        value: resources_submission_types_initialize_problem_request_InitializeProblemRequest,
    ) -> SubmissionRequest:
        if IS_PYDANTIC_V2:
            return SubmissionRequest(
                root=_SubmissionRequest.InitializeProblemRequest(
                    **value.dict(exclude_unset=True), type="initializeProblemRequest"
                )
            )  # type: ignore
        else:
            return SubmissionRequest(
                __root__=_SubmissionRequest.InitializeProblemRequest(
                    **value.dict(exclude_unset=True), type="initializeProblemRequest"
                )
            )  # type: ignore

    def initialize_workspace_request(self) -> SubmissionRequest:
        if IS_PYDANTIC_V2:
            return SubmissionRequest(
                root=_SubmissionRequest.InitializeWorkspaceRequest(
                    type="initializeWorkspaceRequest"
                )
            )  # type: ignore
        else:
            return SubmissionRequest(
                __root__=_SubmissionRequest.InitializeWorkspaceRequest(
                    type="initializeWorkspaceRequest"
                )
            )  # type: ignore

    def submit_v_2(self, value: SubmitRequestV2) -> SubmissionRequest:
        if IS_PYDANTIC_V2:
            return SubmissionRequest(
                root=_SubmissionRequest.SubmitV2(
                    **value.dict(exclude_unset=True), type="submitV2"
                )
            )  # type: ignore
        else:
            return SubmissionRequest(
                __root__=_SubmissionRequest.SubmitV2(
                    **value.dict(exclude_unset=True), type="submitV2"
                )
            )  # type: ignore

    def workspace_submit(self, value: WorkspaceSubmitRequest) -> SubmissionRequest:
        if IS_PYDANTIC_V2:
            return SubmissionRequest(
                root=_SubmissionRequest.WorkspaceSubmit(
                    **value.dict(exclude_unset=True), type="workspaceSubmit"
                )
            )  # type: ignore
        else:
            return SubmissionRequest(
                __root__=_SubmissionRequest.WorkspaceSubmit(
                    **value.dict(exclude_unset=True), type="workspaceSubmit"
                )
            )  # type: ignore

    def stop(self, value: StopRequest) -> SubmissionRequest:
        if IS_PYDANTIC_V2:
            return SubmissionRequest(
                root=_SubmissionRequest.Stop(
                    **value.dict(exclude_unset=True), type="stop"
                )
            )  # type: ignore
        else:
            return SubmissionRequest(
                __root__=_SubmissionRequest.Stop(
                    **value.dict(exclude_unset=True), type="stop"
                )
            )  # type: ignore


class SubmissionRequest(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _SubmissionRequest.InitializeProblemRequest,
                _SubmissionRequest.InitializeWorkspaceRequest,
                _SubmissionRequest.SubmitV2,
                _SubmissionRequest.WorkspaceSubmit,
                _SubmissionRequest.Stop,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _SubmissionRequest.InitializeProblemRequest,
            _SubmissionRequest.InitializeWorkspaceRequest,
            _SubmissionRequest.SubmitV2,
            _SubmissionRequest.WorkspaceSubmit,
            _SubmissionRequest.Stop,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _SubmissionRequest.InitializeProblemRequest,
                _SubmissionRequest.InitializeWorkspaceRequest,
                _SubmissionRequest.SubmitV2,
                _SubmissionRequest.WorkspaceSubmit,
                _SubmissionRequest.Stop,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _SubmissionRequest.InitializeProblemRequest,
            _SubmissionRequest.InitializeWorkspaceRequest,
            _SubmissionRequest.SubmitV2,
            _SubmissionRequest.WorkspaceSubmit,
            _SubmissionRequest.Stop,
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        initialize_problem_request: typing.Callable[
            [
                resources_submission_types_initialize_problem_request_InitializeProblemRequest
            ],
            T_Result,
        ],
        initialize_workspace_request: typing.Callable[[], T_Result],
        submit_v_2: typing.Callable[[SubmitRequestV2], T_Result],
        workspace_submit: typing.Callable[[WorkspaceSubmitRequest], T_Result],
        stop: typing.Callable[[StopRequest], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "initializeProblemRequest":
            return initialize_problem_request(
                resources_submission_types_initialize_problem_request_InitializeProblemRequest(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "initializeWorkspaceRequest":
            return initialize_workspace_request()
        if unioned_value.type == "submitV2":
            return submit_v_2(
                SubmitRequestV2(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "workspaceSubmit":
            return workspace_submit(
                WorkspaceSubmitRequest(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "stop":
            return stop(
                StopRequest(**unioned_value.dict(exclude_unset=True, exclude={"type"}))
            )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


class _SubmissionRequest:
    class InitializeProblemRequest(
        resources_submission_types_initialize_problem_request_InitializeProblemRequest
    ):
        type: typing.Literal["initializeProblemRequest"] = "initializeProblemRequest"

    class InitializeWorkspaceRequest(UniversalBaseModel):
        type: typing.Literal["initializeWorkspaceRequest"] = (
            "initializeWorkspaceRequest"
        )

    class SubmitV2(SubmitRequestV2):
        type: typing.Literal["submitV2"] = "submitV2"

    class WorkspaceSubmit(WorkspaceSubmitRequest):
        type: typing.Literal["workspaceSubmit"] = "workspaceSubmit"

    class Stop(StopRequest):
        type: typing.Literal["stop"] = "stop"


update_forward_refs(SubmissionRequest)
