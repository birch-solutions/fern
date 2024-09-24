# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
import typing
from ....commons.types.language import Language
from .function_implementation import FunctionImplementation
from ....core.serialization import FieldMetadata
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class FunctionImplementationForMultipleLanguages(UniversalBaseModel):
    code_by_language: typing_extensions.Annotated[
        typing.Dict[Language, FunctionImplementation], FieldMetadata(alias="codeByLanguage")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
