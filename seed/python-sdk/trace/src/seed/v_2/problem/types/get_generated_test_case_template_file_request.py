# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType
from .test_case_template import TestCaseTemplate
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ....core.pydantic_utilities import update_forward_refs


class GetGeneratedTestCaseTemplateFileRequest(UniversalBaseModel):
    template: TestCaseTemplate

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


update_forward_refs(ListType, GetGeneratedTestCaseTemplateFileRequest=GetGeneratedTestCaseTemplateFileRequest)
update_forward_refs(MapType, GetGeneratedTestCaseTemplateFileRequest=GetGeneratedTestCaseTemplateFileRequest)
