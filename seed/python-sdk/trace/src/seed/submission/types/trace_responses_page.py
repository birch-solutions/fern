# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.debug_key_value_pairs import DebugKeyValuePairs
from ...commons.types.debug_map_value import DebugMapValue
import typing
import pydantic
import typing_extensions
from .trace_response import TraceResponse
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import update_forward_refs


class TraceResponsesPage(UniversalBaseModel):
    offset: typing.Optional[int] = pydantic.Field(default=None)
    """
    If present, use this to load subseqent pages.
    The offset is the id of the next trace response to load.
    """

    trace_responses: typing_extensions.Annotated[typing.List[TraceResponse], FieldMetadata(alias="traceResponses")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(DebugKeyValuePairs, TraceResponsesPage=TraceResponsesPage)
update_forward_refs(DebugMapValue, TraceResponsesPage=TraceResponsesPage)
