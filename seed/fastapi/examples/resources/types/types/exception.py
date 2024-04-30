# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import pydantic_v1
from .exception_info import ExceptionInfo

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def generic(self, value: ExceptionInfo) -> Exception:
        return Exception(__root__=_Exception.Generic(**value.dict(exclude_unset=True), type="generic"))

    def timeout(self) -> Exception:
        return Exception(__root__=_Exception.Timeout(type="timeout"))


class Exception(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed.examples import Exception_Generic

    Exception_Generic(
        exception_type="Unavailable",
        exception_message="This component is unavailable!",
        exception_stacktrace="<logs>",
    )
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_Exception.Generic, _Exception.Timeout]:
        return self.__root__

    def visit(
        self, generic: typing.Callable[[ExceptionInfo], T_Result], timeout: typing.Callable[[], T_Result]
    ) -> T_Result:
        if self.__root__.type == "generic":
            return generic(ExceptionInfo(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "timeout":
            return timeout()

    __root__: typing_extensions.Annotated[
        typing.Union[_Exception.Generic, _Exception.Timeout], pydantic_v1.Field(discriminator="type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _Exception:
    class Generic(ExceptionInfo):
        type: typing.Literal["generic"] = "generic"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Timeout(pydantic_v1.BaseModel):
        type: typing.Literal["timeout"] = "timeout"


Exception.update_forward_refs()
