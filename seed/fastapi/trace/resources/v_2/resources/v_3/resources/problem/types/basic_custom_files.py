# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ........core.serialization import FieldMetadata
from .non_void_function_signature import NonVoidFunctionSignature
import typing
from .......commons.types.language import Language
from .files import Files
from .basic_test_case_template import BasicTestCaseTemplate
from ........core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class BasicCustomFiles(UniversalBaseModel):
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    signature: NonVoidFunctionSignature
    additional_files: typing_extensions.Annotated[
        typing.Dict[Language, Files], FieldMetadata(alias="additionalFiles")
    ]
    basic_test_case_template: typing_extensions.Annotated[
        BasicTestCaseTemplate, FieldMetadata(alias="basicTestCaseTemplate")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
