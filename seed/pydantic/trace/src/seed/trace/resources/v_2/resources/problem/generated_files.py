# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
import typing
from ....commons.language import Language
from .files import Files
from .....core.serialization import FieldMetadata
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class GeneratedFiles(UniversalBaseModel):
    generated_test_case_files: typing_extensions.Annotated[
        typing.Dict[Language, Files], FieldMetadata(alias="generatedTestCaseFiles")
    ]
    generated_template_files: typing_extensions.Annotated[
        typing.Dict[Language, Files], FieldMetadata(alias="generatedTemplateFiles")
    ]
    other: typing.Dict[Language, Files]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
