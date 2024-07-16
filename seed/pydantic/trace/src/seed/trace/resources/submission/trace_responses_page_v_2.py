# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .trace_response_v_2 import TraceResponseV2


class TraceResponsesPageV2(UniversalBaseModel):
    offset: typing.Optional[int] = pydantic.Field(default=None)
    """
    If present, use this to load subseqent pages.
    The offset is the id of the next trace response to load.
    """

    trace_responses: typing.List[TraceResponseV2] = pydantic.Field(alias="traceResponses")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow
