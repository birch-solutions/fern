# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.map_value import MapValue
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.list_type import ListType
from ...commons.types.map_type import MapType
import typing_extensions
from ...commons.types.problem_id import ProblemId
from ...core.serialization import FieldMetadata
from .problem_description import ProblemDescription
import typing
from ...commons.types.language import Language
from .problem_files import ProblemFiles
from .variable_type_and_name import VariableTypeAndName
from ...commons.types.variable_type import VariableType
from ...commons.types.test_case_with_expected_result import TestCaseWithExpectedResult
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class ProblemInfo(UniversalBaseModel):
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_description: typing_extensions.Annotated[ProblemDescription, FieldMetadata(alias="problemDescription")]
    problem_name: typing_extensions.Annotated[str, FieldMetadata(alias="problemName")]
    problem_version: typing_extensions.Annotated[int, FieldMetadata(alias="problemVersion")]
    files: typing.Dict[Language, ProblemFiles]
    input_params: typing_extensions.Annotated[typing.List[VariableTypeAndName], FieldMetadata(alias="inputParams")]
    output_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="outputType")]
    testcases: typing.List[TestCaseWithExpectedResult]
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    supports_custom_test_cases: typing_extensions.Annotated[bool, FieldMetadata(alias="supportsCustomTestCases")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(ListType)
update_forward_refs(MapType)
