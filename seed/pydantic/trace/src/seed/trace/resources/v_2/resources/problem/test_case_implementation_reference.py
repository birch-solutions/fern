# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from .test_case_template_id import TestCaseTemplateId
import typing
from .test_case_implementation_description import TestCaseImplementationDescription
from .test_case_function import TestCaseFunction
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs
from ....commons.list_type import ListType
from ....commons.map_type import MapType


class TestCaseImplementationReference_TemplateId(UniversalBaseModel):
    value: TestCaseTemplateId
    type: typing.Literal["templateId"] = "templateId"


class TestCaseImplementationReference_Implementation(UniversalBaseModel):
    type: typing.Literal["implementation"] = "implementation"
    description: TestCaseImplementationDescription
    function: TestCaseFunction

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


TestCaseImplementationReference = typing.Union[
    TestCaseImplementationReference_TemplateId, TestCaseImplementationReference_Implementation
]
update_forward_refs(ListType)
update_forward_refs(MapType)
