# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ........core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .......commons.types.language import Language
from .......problem.types.problem_description import ProblemDescription
from .custom_files import CustomFiles
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2


class CreateProblemRequestV2(UniversalBaseModel):
    problem_name: str = pydantic.Field(alias="problemName")
    problem_description: ProblemDescription = pydantic.Field(alias="problemDescription")
    custom_files: CustomFiles = pydantic.Field(alias="customFiles")
    custom_test_case_templates: typing.List[TestCaseTemplate] = pydantic.Field(alias="customTestCaseTemplates")
    testcases: typing.List[TestCaseV2]
    supported_languages: typing.Set[Language] = pydantic.Field(alias="supportedLanguages")
    is_public: bool = pydantic.Field(alias="isPublic")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
