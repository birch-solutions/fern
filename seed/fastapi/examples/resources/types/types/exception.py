# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from .exception_info import ExceptionInfo

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def generic(self, value: ExceptionInfo) -> Exception:
        return Exception(__root__=_Exception.Generic(**value.dict(exclude_unset=True), type="generic"))

    def timeout(self) -> Exception:
        return Exception(__root__=_Exception.Timeout(type="timeout"))


class Exception(pydantic.BaseModel):
    """
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

    __root__: typing.Annotated[
        typing.Union[_Exception.Generic, _Exception.Timeout], pydantic.Field(discriminator="type")
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


class _Exception:
    class Generic(ExceptionInfo):
        type: typing.Literal["generic"] = "generic"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Timeout(pydantic.BaseModel):
        type: typing.Literal["timeout"] = "timeout"


Exception.update_forward_refs()
