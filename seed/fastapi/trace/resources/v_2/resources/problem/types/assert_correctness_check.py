# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ......core.datetime_utils import serialize_datetime
from .deep_equality_correctness_check import DeepEqualityCorrectnessCheck
from .void_function_definition_that_takes_actual_result import VoidFunctionDefinitionThatTakesActualResult

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def deep_equality(self, value: DeepEqualityCorrectnessCheck) -> AssertCorrectnessCheck:
        return AssertCorrectnessCheck(
            __root__=_AssertCorrectnessCheck.DeepEquality(**value.dict(exclude_unset=True), type="deepEquality")
        )

    def custom(self, value: VoidFunctionDefinitionThatTakesActualResult) -> AssertCorrectnessCheck:
        return AssertCorrectnessCheck(
            __root__=_AssertCorrectnessCheck.Custom(**value.dict(exclude_unset=True), type="custom")
        )


class AssertCorrectnessCheck(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_AssertCorrectnessCheck.DeepEquality, _AssertCorrectnessCheck.Custom]:
        return self.__root__

    def visit(
        self,
        deep_equality: typing.Callable[[DeepEqualityCorrectnessCheck], T_Result],
        custom: typing.Callable[[VoidFunctionDefinitionThatTakesActualResult], T_Result],
    ) -> T_Result:
        if self.__root__.type == "deepEquality":
            return deep_equality(
                DeepEqualityCorrectnessCheck(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "custom":
            return custom(
                VoidFunctionDefinitionThatTakesActualResult(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )

    __root__: typing.Annotated[
        typing.Union[_AssertCorrectnessCheck.DeepEquality, _AssertCorrectnessCheck.Custom],
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


class _AssertCorrectnessCheck:
    class DeepEquality(DeepEqualityCorrectnessCheck):
        type: typing.Literal["deepEquality"]

        class Config:
            allow_population_by_field_name = True

    class Custom(VoidFunctionDefinitionThatTakesActualResult):
        type: typing.Literal["custom"]

        class Config:
            allow_population_by_field_name = True


AssertCorrectnessCheck.update_forward_refs()
