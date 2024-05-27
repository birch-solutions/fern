# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import deep_union_pydantic_dicts, pydantic_v1
from .test_submission_state import TestSubmissionState
from .workspace_submission_state import WorkspaceSubmissionState

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def test(self, value: TestSubmissionState) -> SubmissionTypeState:
        return SubmissionTypeState(__root__=_SubmissionTypeState.Test(**value.dict(exclude_unset=True), type="test"))

    def workspace(self, value: WorkspaceSubmissionState) -> SubmissionTypeState:
        return SubmissionTypeState(
            __root__=_SubmissionTypeState.Workspace(**value.dict(exclude_unset=True), type="workspace")
        )


class SubmissionTypeState(pydantic_v1.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_SubmissionTypeState.Test, _SubmissionTypeState.Workspace]:
        return self.__root__

    def visit(
        self,
        test: typing.Callable[[TestSubmissionState], T_Result],
        workspace: typing.Callable[[WorkspaceSubmissionState], T_Result],
    ) -> T_Result:
        if self.__root__.type == "test":
            return test(TestSubmissionState(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "workspace":
            return workspace(WorkspaceSubmissionState(**self.__root__.dict(exclude_unset=True, exclude={"type"})))

    __root__: typing_extensions.Annotated[
        typing.Union[_SubmissionTypeState.Test, _SubmissionTypeState.Workspace], pydantic_v1.Field(discriminator="type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _SubmissionTypeState:
    class Test(TestSubmissionState):
        type: typing.Literal["test"] = "test"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Workspace(WorkspaceSubmissionState):
        type: typing.Literal["workspace"] = "workspace"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


SubmissionTypeState.update_forward_refs()
