# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .variable_value import VariableValue
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs
from .map_value import MapValue
from .key_value_pair import KeyValuePair


class TestCase(UniversalBaseModel):
    id: str
    params: typing.List[VariableValue]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
