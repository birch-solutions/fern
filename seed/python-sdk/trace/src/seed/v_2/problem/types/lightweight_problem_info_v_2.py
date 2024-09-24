# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType
import typing_extensions
from ....commons.types.problem_id import ProblemId
from ....core.serialization import FieldMetadata
import typing
from ....commons.types.variable_type import VariableType
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ....core.pydantic_utilities import update_forward_refs


class LightweightProblemInfoV2(UniversalBaseModel):
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_name: typing_extensions.Annotated[str, FieldMetadata(alias="problemName")]
    problem_version: typing_extensions.Annotated[int, FieldMetadata(alias="problemVersion")]
    variable_types: typing_extensions.Annotated[typing.List[VariableType], FieldMetadata(alias="variableTypes")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType, LightweightProblemInfoV2=LightweightProblemInfoV2)
update_forward_refs(MapType, LightweightProblemInfoV2=LightweightProblemInfoV2)
