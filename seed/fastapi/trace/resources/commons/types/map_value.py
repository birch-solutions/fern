# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from ....core.pydantic_utilities import update_forward_refs


class MapValue(UniversalBaseModel):
    key_value_pairs: typing.List["KeyValuePair"] = pydantic.Field(alias="keyValuePairs")

    class Config:
        extra = pydantic.Extra.forbid


from .key_value_pair import KeyValuePair  # noqa: E402

update_forward_refs(MapValue)
