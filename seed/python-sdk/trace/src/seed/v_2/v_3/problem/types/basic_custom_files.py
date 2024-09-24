# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from .....commons.types.list_type import ListType
from .....commons.types.map_type import MapType
import typing_extensions
from .....core.serialization import FieldMetadata
from .non_void_function_signature import NonVoidFunctionSignature
import typing
from .....commons.types.language import Language
from .files import Files
from .basic_test_case_template import BasicTestCaseTemplate
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class BasicCustomFiles(UniversalBaseModel):
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    signature: NonVoidFunctionSignature
    additional_files: typing_extensions.Annotated[typing.Dict[Language, Files], FieldMetadata(alias="additionalFiles")]
    basic_test_case_template: typing_extensions.Annotated[
        BasicTestCaseTemplate, FieldMetadata(alias="basicTestCaseTemplate")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType, BasicCustomFiles=BasicCustomFiles)
update_forward_refs(MapType, BasicCustomFiles=BasicCustomFiles)
