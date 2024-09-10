# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import pydantic
from .....problem.types.problem_description import ProblemDescription
from .custom_files import CustomFiles
import typing
from .test_case_template import TestCaseTemplate
from .test_case_v_2 import TestCaseV2
from .....commons.types.language import Language
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from ......core.pydantic_utilities import update_forward_refs
from .....commons.types.map_value import MapValue
from .....commons.types.key_value_pair import KeyValuePair
from .....commons.types.map_type import MapType
from .....commons.types.list_type import ListType


class CreateProblemRequestV2(UniversalBaseModel):
    problem_name: str = pydantic.Field(alias="problemName")
    problem_description: ProblemDescription = pydantic.Field(alias="problemDescription")
    custom_files: CustomFiles = pydantic.Field(alias="customFiles")
    custom_test_case_templates: typing.List[TestCaseTemplate] = pydantic.Field(
        alias="customTestCaseTemplates"
    )
    testcases: typing.List[TestCaseV2]
    supported_languages: typing.Set[Language] = pydantic.Field(
        alias="supportedLanguages"
    )
    is_public: bool = pydantic.Field(alias="isPublic")

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
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(KeyValuePair)
