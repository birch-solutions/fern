# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .exception_info import ExceptionInfo
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def generic(self, value: ExceptionInfo) -> ExceptionV2:
        if IS_PYDANTIC_V2:
            return ExceptionV2(
                root=_ExceptionV2.Generic(
                    **value.dict(exclude_unset=True), type="generic"
                )
            )  # type: ignore
        else:
            return ExceptionV2(
                __root__=_ExceptionV2.Generic(
                    **value.dict(exclude_unset=True), type="generic"
                )
            )  # type: ignore

    def timeout(self) -> ExceptionV2:
        if IS_PYDANTIC_V2:
            return ExceptionV2(root=_ExceptionV2.Timeout(type="timeout"))  # type: ignore
        else:
            return ExceptionV2(__root__=_ExceptionV2.Timeout(type="timeout"))  # type: ignore


class ExceptionV2(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        generic: typing.Callable[[ExceptionInfo], T_Result],
        timeout: typing.Callable[[], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "generic":
            return generic(
                ExceptionInfo(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "timeout":
            return timeout()

    class Config:
        extra = pydantic.Extra.forbid


class _ExceptionV2:
    class Generic(ExceptionInfo):
        type: typing.Literal["generic"] = "generic"

    class Timeout(UniversalBaseModel):
        type: typing.Literal["timeout"] = "timeout"


update_forward_refs(ExceptionV2)
