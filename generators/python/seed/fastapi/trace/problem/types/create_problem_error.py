# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ...core.datetime_utils import serialize_datetime
from .generic_create_problem_error import GenericCreateProblemError

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def generic(self, value: GenericCreateProblemError) -> CreateProblemError:
        return CreateProblemError(
            __root__=_CreateProblemError.Generic(**value.dict(exclude_unset=True), error_type="generic")
        )


class CreateProblemError(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_CreateProblemError.Generic]:
        return self.__root__

    def visit(self, generic: typing.Callable[[GenericCreateProblemError], T_Result]) -> T_Result:
        if self.__root__.error_type == "generic":
            return generic(GenericCreateProblemError(**self.__root__.dict(exclude_unset=True, exclude={"_type"})))

    __root__: typing.Union[_CreateProblemError.Generic]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _CreateProblemError:
    class Generic(GenericCreateProblemError):
        error_type: typing_extensions.Literal["generic"] = pydantic.Field(alias="_type")

        class Config:
            allow_population_by_field_name = True


CreateProblemError.update_forward_refs()
