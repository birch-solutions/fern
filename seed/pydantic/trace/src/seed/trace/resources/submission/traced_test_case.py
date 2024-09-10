# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .test_case_result_with_stdout import TestCaseResultWithStdout
import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from ...core.pydantic_utilities import update_forward_refs
from ..commons.key_value_pair import KeyValuePair
from ..commons.map_value import MapValue


class TracedTestCase(UniversalBaseModel):
    result: TestCaseResultWithStdout
    trace_responses_size: int = pydantic.Field(alias="traceResponsesSize")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
