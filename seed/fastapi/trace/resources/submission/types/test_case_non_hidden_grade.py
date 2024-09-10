# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...commons.types.map_value import MapValue
from ...commons.types.key_value_pair import KeyValuePair
import typing
from ...commons.types.variable_value import VariableValue
import pydantic
from .exception_v_2 import ExceptionV2
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import update_forward_refs


class TestCaseNonHiddenGrade(UniversalBaseModel):
    passed: bool
    actual_result: typing.Optional[VariableValue] = pydantic.Field(
        alias="actualResult", default=None
    )
    exception: typing.Optional[ExceptionV2] = None
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
