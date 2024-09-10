# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic
from .problem_description import ProblemDescription
import typing
from ...commons.types.language import Language
from .problem_files import ProblemFiles
from .variable_type_and_name import VariableTypeAndName
from ...commons.types.variable_type import VariableType
from ...commons.types.test_case_with_expected_result import TestCaseWithExpectedResult
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import update_forward_refs
from ...commons.types.map_value import MapValue
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_type import MapType
from ...commons.types.list_type import ListType


class CreateProblemRequest(UniversalBaseModel):
    problem_name: str = pydantic.Field(alias="problemName")
    problem_description: ProblemDescription = pydantic.Field(alias="problemDescription")
    files: typing.Dict[Language, ProblemFiles]
    input_params: typing.List[VariableTypeAndName] = pydantic.Field(alias="inputParams")
    output_type: VariableType = pydantic.Field(alias="outputType")
    testcases: typing.List[TestCaseWithExpectedResult]
    method_name: str = pydantic.Field(alias="methodName")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
