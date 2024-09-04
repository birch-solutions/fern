# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .test_case_template_id import TestCaseTemplateId
from ......core.serialization import FieldMetadata
from .test_case_implementation import TestCaseImplementation
from ......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class TestCaseTemplate(UniversalBaseModel):
    template_id: typing_extensions.Annotated[
        TestCaseTemplateId, FieldMetadata(alias="templateId")
    ]
    name: str
    implementation: TestCaseImplementation

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
