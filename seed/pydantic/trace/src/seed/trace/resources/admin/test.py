# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import UniversalBaseModel


class Test_And(UniversalBaseModel):
    value: bool
    type: typing.Literal["and"] = "and"


class Test_Or(UniversalBaseModel):
    value: bool
    type: typing.Literal["or"] = "or"


Test = typing.Union[Test_And, Test_Or]
