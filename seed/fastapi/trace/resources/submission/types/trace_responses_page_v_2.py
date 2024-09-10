# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...commons.types.debug_map_value import DebugMapValue
from ...commons.types.debug_key_value_pairs import DebugKeyValuePairs
import typing
import pydantic
from .trace_response_v_2 import TraceResponseV2
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import update_forward_refs


class TraceResponsesPageV2(UniversalBaseModel):
    offset: typing.Optional[int] = pydantic.Field(default=None)
    """
    If present, use this to load subseqent pages.
    The offset is the id of the next trace response to load.
    """

    trace_responses: typing.List[TraceResponseV2] = pydantic.Field(
        alias="traceResponses"
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(DebugMapValue)
update_forward_refs(DebugKeyValuePairs)
