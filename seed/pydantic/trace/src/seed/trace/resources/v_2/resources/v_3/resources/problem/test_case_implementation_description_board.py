# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .......core.pydantic_utilities import pydantic_v1
from .parameter_id import ParameterId


class TestCaseImplementationDescriptionBoard_Html(pydantic_v1.BaseModel):
    value: str
    type: typing.Literal["html"] = "html"


class TestCaseImplementationDescriptionBoard_ParamId(pydantic_v1.BaseModel):
    value: ParameterId
    type: typing.Literal["paramId"] = "paramId"


TestCaseImplementationDescriptionBoard = typing.Union[
    TestCaseImplementationDescriptionBoard_Html, TestCaseImplementationDescriptionBoard_ParamId
]
