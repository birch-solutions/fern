# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...commons.types.problem_id import ProblemId
from .create_problem_error import CreateProblemError

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class CreateProblemResponse_Success(pydantic.BaseModel):
    type: typing.Literal["success"]
    value: ProblemId

    class Config:
        frozen = True
        smart_union = True


class CreateProblemResponse_Error(pydantic.BaseModel):
    type: typing.Literal["error"]
    value: CreateProblemError

    class Config:
        frozen = True
        smart_union = True


CreateProblemResponse = typing.Union[CreateProblemResponse_Success, CreateProblemResponse_Error]
