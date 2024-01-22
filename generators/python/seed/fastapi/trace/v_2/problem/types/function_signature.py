# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from .non_void_function_signature import NonVoidFunctionSignature
from .void_function_signature import VoidFunctionSignature
from .void_function_signature_that_takes_actual_result import VoidFunctionSignatureThatTakesActualResult

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def void(self, value: VoidFunctionSignature) -> FunctionSignature:
        return FunctionSignature(__root__=_FunctionSignature.Void(**value.dict(exclude_unset=True), type="void"))

    def non_void(self, value: NonVoidFunctionSignature) -> FunctionSignature:
        return FunctionSignature(__root__=_FunctionSignature.NonVoid(**value.dict(exclude_unset=True), type="nonVoid"))

    def void_that_takes_actual_result(self, value: VoidFunctionSignatureThatTakesActualResult) -> FunctionSignature:
        return FunctionSignature(
            __root__=_FunctionSignature.VoidThatTakesActualResult(
                **value.dict(exclude_unset=True), type="voidThatTakesActualResult"
            )
        )


class FunctionSignature(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(
        self,
    ) -> typing.Union[
        _FunctionSignature.Void, _FunctionSignature.NonVoid, _FunctionSignature.VoidThatTakesActualResult
    ]:
        return self.__root__

    def visit(
        self,
        void: typing.Callable[[VoidFunctionSignature], T_Result],
        non_void: typing.Callable[[NonVoidFunctionSignature], T_Result],
        void_that_takes_actual_result: typing.Callable[[VoidFunctionSignatureThatTakesActualResult], T_Result],
    ) -> T_Result:
        if self.__root__.type == "void":
            return void(VoidFunctionSignature(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "nonVoid":
            return non_void(NonVoidFunctionSignature(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "voidThatTakesActualResult":
            return void_that_takes_actual_result(
                VoidFunctionSignatureThatTakesActualResult(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )

    __root__: typing_extensions.Annotated[
        typing.Union[_FunctionSignature.Void, _FunctionSignature.NonVoid, _FunctionSignature.VoidThatTakesActualResult],
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


class _FunctionSignature:
    class Void(VoidFunctionSignature):
        type: typing_extensions.Literal["void"]

        class Config:
            allow_population_by_field_name = True

    class NonVoid(NonVoidFunctionSignature):
        type: typing_extensions.Literal["nonVoid"]

        class Config:
            allow_population_by_field_name = True

    class VoidThatTakesActualResult(VoidFunctionSignatureThatTakesActualResult):
        type: typing_extensions.Literal["voidThatTakesActualResult"]

        class Config:
            allow_population_by_field_name = True


FunctionSignature.update_forward_refs()
