# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ....core.serialization import FieldMetadata
from ....problem.types.problem_description import ProblemDescription
from .custom_files import CustomFiles
import typing
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2
from ....commons.types.language import Language
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class CreateProblemRequestV2(UniversalBaseModel):
    problem_name: typing_extensions.Annotated[str, FieldMetadata(alias="problemName")]
    problem_description: typing_extensions.Annotated[ProblemDescription, FieldMetadata(alias="problemDescription")]
    custom_files: typing_extensions.Annotated[CustomFiles, FieldMetadata(alias="customFiles")]
    custom_test_case_templates: typing_extensions.Annotated[
        typing.List[TestCaseTemplate], FieldMetadata(alias="customTestCaseTemplates")
    ]
    testcases: typing.List[TestCaseV2]
    supported_languages: typing_extensions.Annotated[typing.Set[Language], FieldMetadata(alias="supportedLanguages")]
    is_public: typing_extensions.Annotated[bool, FieldMetadata(alias="isPublic")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
