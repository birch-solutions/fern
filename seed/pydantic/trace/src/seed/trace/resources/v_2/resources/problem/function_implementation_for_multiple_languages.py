# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from ....commons.language import Language
from .function_implementation import FunctionImplementation
import pydantic


class FunctionImplementationForMultipleLanguages(UniversalBaseModel):
    code_by_language: typing.Dict[Language, FunctionImplementation] = pydantic.Field(alias="codeByLanguage")

    class Config:
        extra = pydantic.Extra.allow
