# This file was auto-generated by Fern from our API Definition.

from .......core.pydantic_utilities import UniversalBaseModel
from ......commons.list_type import ListType
from ......commons.map_type import MapType
from .non_void_function_definition import NonVoidFunctionDefinition
import pydantic
from .assert_correctness_check import AssertCorrectnessCheck
from .......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from .......core.pydantic_utilities import update_forward_refs


class TestCaseWithActualResultImplementation(UniversalBaseModel):
    get_actual_result: NonVoidFunctionDefinition = pydantic.Field(alias="getActualResult")
    assert_correctness_check: AssertCorrectnessCheck = pydantic.Field(alias="assertCorrectnessCheck")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
