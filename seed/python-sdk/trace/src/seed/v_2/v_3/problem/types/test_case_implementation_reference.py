# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from .test_case_template_id import TestCaseTemplateId
import typing
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....commons.types.list_type import ListType
from .....commons.types.map_type import MapType
from .test_case_implementation_description import TestCaseImplementationDescription
from .test_case_function import TestCaseFunction
from .....core.pydantic_utilities import update_forward_refs


class TestCaseImplementationReference_TemplateId(UniversalBaseModel):
    value: TestCaseTemplateId
    type: typing.Literal["templateId"] = "templateId"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class TestCaseImplementationReference_Implementation(UniversalBaseModel):
    type: typing.Literal["implementation"] = "implementation"
    description: TestCaseImplementationDescription
    function: TestCaseFunction

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


TestCaseImplementationReference = typing.Union[
    TestCaseImplementationReference_TemplateId, TestCaseImplementationReference_Implementation
]
update_forward_refs(
    ListType, TestCaseImplementationReference_Implementation=TestCaseImplementationReference_Implementation
)
update_forward_refs(
    MapType, TestCaseImplementationReference_Implementation=TestCaseImplementationReference_Implementation
)
