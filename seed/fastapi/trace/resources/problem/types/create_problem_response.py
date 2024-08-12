# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...commons.types.problem_id import ProblemId
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .create_problem_error import CreateProblemError
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def success(self, value: ProblemId) -> CreateProblemResponse:
        if IS_PYDANTIC_V2:
            return CreateProblemResponse(
                root=_CreateProblemResponse.Success(type="success", value=value)
            )
        else:
            return CreateProblemResponse(
                __root__=_CreateProblemResponse.Success(type="success", value=value)
            )

    def error(self, value: CreateProblemError) -> CreateProblemResponse:
        if IS_PYDANTIC_V2:
            return CreateProblemResponse(
                root=_CreateProblemResponse.Error(type="error", value=value)
            )
        else:
            return CreateProblemResponse(
                __root__=_CreateProblemResponse.Error(type="error", value=value)
            )


class CreateProblemResponse(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_CreateProblemResponse.Success, _CreateProblemResponse.Error]:
            return self.__root__

    def visit(
        self,
        success: typing.Callable[[ProblemId], T_Result],
        error: typing.Callable[[CreateProblemError], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "success":
            return success(unioned_value.value)
        if unioned_value.type == "error":
            return error(unioned_value.value)


class _CreateProblemResponse:
    class Success(UniversalBaseModel):
        type: typing.Literal["success"] = "success"
        value: ProblemId

    class Error(UniversalBaseModel):
        type: typing.Literal["error"] = "error"
        value: CreateProblemError
