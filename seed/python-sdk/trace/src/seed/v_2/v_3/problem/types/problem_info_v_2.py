# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .....commons.types.problem_id import ProblemId
from .....core.serialization import FieldMetadata
from .....problem.types.problem_description import ProblemDescription
import typing
from .....commons.types.language import Language
from .custom_files import CustomFiles
from .generated_files import GeneratedFiles
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs
from .....commons.types.list_type import ListType
from .....commons.types.key_value_pair import KeyValuePair
from .....commons.types.map_type import MapType
from .....commons.types.map_value import MapValue


class ProblemInfoV2(UniversalBaseModel):
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_description: typing_extensions.Annotated[ProblemDescription, FieldMetadata(alias="problemDescription")]
    problem_name: typing_extensions.Annotated[str, FieldMetadata(alias="problemName")]
    problem_version: typing_extensions.Annotated[int, FieldMetadata(alias="problemVersion")]
    supported_languages: typing_extensions.Annotated[typing.Set[Language], FieldMetadata(alias="supportedLanguages")]
    custom_files: typing_extensions.Annotated[CustomFiles, FieldMetadata(alias="customFiles")]
    generated_files: typing_extensions.Annotated[GeneratedFiles, FieldMetadata(alias="generatedFiles")]
    custom_test_case_templates: typing_extensions.Annotated[
        typing.List[TestCaseTemplate], FieldMetadata(alias="customTestCaseTemplates")
    ]
    testcases: typing.List[TestCaseV2]
    is_public: typing_extensions.Annotated[bool, FieldMetadata(alias="isPublic")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType)
update_forward_refs(KeyValuePair)
update_forward_refs(MapType)
update_forward_refs(MapValue)
