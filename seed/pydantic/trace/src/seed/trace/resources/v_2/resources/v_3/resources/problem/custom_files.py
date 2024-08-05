# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .......core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from .non_void_function_signature import NonVoidFunctionSignature
from ......commons.language import Language
from .files import Files
from .basic_test_case_template import BasicTestCaseTemplate
from .......core.pydantic_utilities import IS_PYDANTIC_V2
from .file_info_v_2 import FileInfoV2


class CustomFiles_Basic(UniversalBaseModel):
    type: typing.Literal["basic"] = "basic"
    method_name: str = pydantic.Field(alias="methodName")
    signature: NonVoidFunctionSignature
    additional_files: typing.Dict[Language, Files] = pydantic.Field(
        alias="additionalFiles"
    )
    basic_test_case_template: BasicTestCaseTemplate = pydantic.Field(
        alias="basicTestCaseTemplate"
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class CustomFiles_Custom(UniversalBaseModel):
    value: typing.Dict[Language, Files]
    type: typing.Literal["custom"] = "custom"


CustomFiles = typing.Union[CustomFiles_Basic, CustomFiles_Custom]
