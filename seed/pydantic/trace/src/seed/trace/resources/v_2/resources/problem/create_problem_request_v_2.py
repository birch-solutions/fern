# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from .....core.datetime_utils import serialize_datetime
from .....core.pydantic_utilities import pydantic_v1
from ....commons.language import Language
from ....problem.problem_description import ProblemDescription
from .custom_files import CustomFiles
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2


class CreateProblemRequestV2(pydantic_v1.BaseModel):
    problem_name: str = pydantic_v1.Field(alias="problemName")
    problem_description: ProblemDescription = pydantic_v1.Field(alias="problemDescription")
    custom_files: CustomFiles = pydantic_v1.Field(alias="customFiles")
    custom_test_case_templates: typing.List[TestCaseTemplate] = pydantic_v1.Field(alias="customTestCaseTemplates")
    testcases: typing.List[TestCaseV2]
    supported_languages: typing.Set[Language] = pydantic_v1.Field(alias="supportedLanguages")
    is_public: bool = pydantic_v1.Field(alias="isPublic")

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}
