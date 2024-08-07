# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from ....commons.language import Language
from .files import Files
import pydantic
from .....core.pydantic_utilities import IS_PYDANTIC_V2


class GeneratedFiles(UniversalBaseModel):
    generated_test_case_files: typing.Dict[Language, Files] = pydantic.Field(
        alias="generatedTestCaseFiles"
    )
    generated_template_files: typing.Dict[Language, Files] = pydantic.Field(
        alias="generatedTemplateFiles"
    )
    other: typing.Dict[Language, Files]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
