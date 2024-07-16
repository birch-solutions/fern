# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from .....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ....commons.language import Language
from ....commons.problem_id import ProblemId
from ....problem.problem_description import ProblemDescription
from .custom_files import CustomFiles
from .generated_files import GeneratedFiles
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2


class ProblemInfoV2(UniversalBaseModel):
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    problem_description: ProblemDescription = pydantic.Field(alias="problemDescription")
    problem_name: str = pydantic.Field(alias="problemName")
    problem_version: int = pydantic.Field(alias="problemVersion")
    supported_languages: typing.Set[Language] = pydantic.Field(alias="supportedLanguages")
    custom_files: CustomFiles = pydantic.Field(alias="customFiles")
    generated_files: GeneratedFiles = pydantic.Field(alias="generatedFiles")
    custom_test_case_templates: typing.List[TestCaseTemplate] = pydantic.Field(alias="customTestCaseTemplates")
    testcases: typing.List[TestCaseV2]
    is_public: bool = pydantic.Field(alias="isPublic")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow
