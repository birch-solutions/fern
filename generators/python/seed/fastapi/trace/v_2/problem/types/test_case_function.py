# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from .test_case_with_actual_result_implementation import TestCaseWithActualResultImplementation
from .void_function_definition import VoidFunctionDefinition

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def with_actual_result(self, value: TestCaseWithActualResultImplementation) -> TestCaseFunction:
        return TestCaseFunction(
            __root__=_TestCaseFunction.WithActualResult(**value.dict(exclude_unset=True), type="withActualResult")
        )

    def custom(self, value: VoidFunctionDefinition) -> TestCaseFunction:
        return TestCaseFunction(__root__=_TestCaseFunction.Custom(**value.dict(exclude_unset=True), type="custom"))


class TestCaseFunction(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_TestCaseFunction.WithActualResult, _TestCaseFunction.Custom]:
        return self.__root__

    def visit(
        self,
        with_actual_result: typing.Callable[[TestCaseWithActualResultImplementation], T_Result],
        custom: typing.Callable[[VoidFunctionDefinition], T_Result],
    ) -> T_Result:
        if self.__root__.type == "withActualResult":
            return with_actual_result(
                TestCaseWithActualResultImplementation(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "custom":
            return custom(VoidFunctionDefinition(**self.__root__.dict(exclude_unset=True, exclude={"type"})))

    __root__: typing_extensions.Annotated[
        typing.Union[_TestCaseFunction.WithActualResult, _TestCaseFunction.Custom], pydantic.Field(discriminator="type")
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


class _TestCaseFunction:
    class WithActualResult(TestCaseWithActualResultImplementation):
        type: typing_extensions.Literal["withActualResult"]

        class Config:
            allow_population_by_field_name = True

    class Custom(VoidFunctionDefinition):
        type: typing_extensions.Literal["custom"]

        class Config:
            allow_population_by_field_name = True


TestCaseFunction.update_forward_refs()
