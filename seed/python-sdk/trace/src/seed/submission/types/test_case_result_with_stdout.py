# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
from .test_case_result import TestCaseResult
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class TestCaseResultWithStdout(UniversalBaseModel):
    result: TestCaseResult
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


update_forward_refs(KeyValuePair, TestCaseResultWithStdout=TestCaseResultWithStdout)
update_forward_refs(MapValue, TestCaseResultWithStdout=TestCaseResultWithStdout)
