# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, UniversalRootModel
from ...commons.types.problem_id import ProblemId
from .create_problem_error import CreateProblemError

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def success(self, value: ProblemId) -> CreateProblemResponse:
        return CreateProblemResponse(_CreateProblemResponse.Success(type="success", value=value))

    def error(self, value: CreateProblemError) -> CreateProblemResponse:
        return CreateProblemResponse(_CreateProblemResponse.Error(type="error", value=value))


class CreateProblemResponse(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error]:
            return self.root

    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error]:
            return self.__root__

    def visit(
        self, success: typing.Callable[[ProblemId], T_Result], error: typing.Callable[[CreateProblemError], T_Result]
    ) -> T_Result:
        if self.get_as_union().type == "success":
            return success(self.get_as_union().value)
        if self.get_as_union().type == "error":
            return error(self.get_as_union().value)


class _CreateProblemResponse:
    class Success(UniversalBaseModel):
        type: typing.Literal["success"] = "success"
        value: ProblemId

    class Error(UniversalBaseModel):
        type: typing.Literal["error"] = "error"
        value: CreateProblemError
