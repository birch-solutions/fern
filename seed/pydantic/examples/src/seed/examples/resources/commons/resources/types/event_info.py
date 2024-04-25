# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .....core.pydantic_utilities import pydantic_v1
from .metadata import Metadata
from .tag import Tag


class EventInfo_Metadata(Metadata):
    type: typing.Literal["metadata"] = "metadata"

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class EventInfo_Tag(pydantic_v1.BaseModel):
    type: typing.Literal["tag"] = "tag"
    value: Tag


"""
from seed.examples.resources.commons import EventInfo_Metadata

EventInfo_Metadata(
    id="metadata-alskjfg8",
    data={"one": "two"},
    json_string='{"one": "two"}',
)
"""
EventInfo = typing.Union[EventInfo_Metadata, EventInfo_Tag]
