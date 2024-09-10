# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .void_function_signature import VoidFunctionSignature
from ........core.pydantic_utilities import IS_PYDANTIC_V2
from .non_void_function_signature import NonVoidFunctionSignature
from .void_function_signature_that_takes_actual_result import (
    VoidFunctionSignatureThatTakesActualResult,
)
from ........core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ........core.pydantic_utilities import update_forward_refs
from .......commons.types.list_type import ListType
from .......commons.types.map_type import MapType

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def void(self, value: VoidFunctionSignature) -> FunctionSignature:
        if IS_PYDANTIC_V2:
            return FunctionSignature(
                root=_FunctionSignature.Void(
                    **value.dict(exclude_unset=True), type="void"
                )
            )  # type: ignore
        else:
            return FunctionSignature(
                __root__=_FunctionSignature.Void(
                    **value.dict(exclude_unset=True), type="void"
                )
            )  # type: ignore

    def non_void(self, value: NonVoidFunctionSignature) -> FunctionSignature:
        if IS_PYDANTIC_V2:
            return FunctionSignature(
                root=_FunctionSignature.NonVoid(
                    **value.dict(exclude_unset=True), type="nonVoid"
                )
            )  # type: ignore
        else:
            return FunctionSignature(
                __root__=_FunctionSignature.NonVoid(
                    **value.dict(exclude_unset=True), type="nonVoid"
                )
            )  # type: ignore

    def void_that_takes_actual_result(
        self, value: VoidFunctionSignatureThatTakesActualResult
    ) -> FunctionSignature:
        if IS_PYDANTIC_V2:
            return FunctionSignature(
                root=_FunctionSignature.VoidThatTakesActualResult(
                    **value.dict(exclude_unset=True), type="voidThatTakesActualResult"
                )
            )  # type: ignore
        else:
            return FunctionSignature(
                __root__=_FunctionSignature.VoidThatTakesActualResult(
                    **value.dict(exclude_unset=True), type="voidThatTakesActualResult"
                )
            )  # type: ignore


class FunctionSignature(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _FunctionSignature.Void,
                _FunctionSignature.NonVoid,
                _FunctionSignature.VoidThatTakesActualResult,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _FunctionSignature.Void,
            _FunctionSignature.NonVoid,
            _FunctionSignature.VoidThatTakesActualResult,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _FunctionSignature.Void,
                _FunctionSignature.NonVoid,
                _FunctionSignature.VoidThatTakesActualResult,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _FunctionSignature.Void,
            _FunctionSignature.NonVoid,
            _FunctionSignature.VoidThatTakesActualResult,
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        void: typing.Callable[[VoidFunctionSignature], T_Result],
        non_void: typing.Callable[[NonVoidFunctionSignature], T_Result],
        void_that_takes_actual_result: typing.Callable[
            [VoidFunctionSignatureThatTakesActualResult], T_Result
        ],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "void":
            return void(
                VoidFunctionSignature(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "nonVoid":
            return non_void(
                NonVoidFunctionSignature(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "voidThatTakesActualResult":
            return void_that_takes_actual_result(
                VoidFunctionSignatureThatTakesActualResult(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )


class _FunctionSignature:
    class Void(VoidFunctionSignature):
        type: typing.Literal["void"] = "void"

    class NonVoid(NonVoidFunctionSignature):
        type: typing.Literal["nonVoid"] = "nonVoid"

    class VoidThatTakesActualResult(VoidFunctionSignatureThatTakesActualResult):
        type: typing.Literal["voidThatTakesActualResult"] = "voidThatTakesActualResult"


update_forward_refs(FunctionSignature)
update_forward_refs(ListType)
update_forward_refs(MapType)
