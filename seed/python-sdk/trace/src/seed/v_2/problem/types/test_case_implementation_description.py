# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from .test_case_implementation_description_board import TestCaseImplementationDescriptionBoard
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class TestCaseImplementationDescription(UniversalBaseModel):
    boards: typing.List[TestCaseImplementationDescriptionBoard]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
