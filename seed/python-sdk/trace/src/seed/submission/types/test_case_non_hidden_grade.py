# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
import typing_extensions
import typing
from ...commons.types.variable_value import VariableValue
from ...core.serialization import FieldMetadata
from .exception_v_2 import ExceptionV2
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class TestCaseNonHiddenGrade(UniversalBaseModel):
    passed: bool
    actual_result: typing_extensions.Annotated[typing.Optional[VariableValue], FieldMetadata(alias="actualResult")] = (
        None
    )
    exception: typing.Optional[ExceptionV2] = None
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(KeyValuePair, TestCaseNonHiddenGrade=TestCaseNonHiddenGrade)
update_forward_refs(MapValue, TestCaseNonHiddenGrade=TestCaseNonHiddenGrade)
