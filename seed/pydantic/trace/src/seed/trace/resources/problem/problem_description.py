# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .problem_description_board import ProblemDescriptionBoard
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs
from ..commons.map_value import MapValue
from ..commons.key_value_pair import KeyValuePair


class ProblemDescription(UniversalBaseModel):
    boards: typing.List[ProblemDescriptionBoard]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
