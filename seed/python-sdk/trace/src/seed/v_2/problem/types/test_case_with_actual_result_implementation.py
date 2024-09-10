# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType
from ....commons.types.variable_type import VariableType
import typing_extensions
from .non_void_function_definition import NonVoidFunctionDefinition
from ....core.serialization import FieldMetadata
from .assert_correctness_check import AssertCorrectnessCheck
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class TestCaseWithActualResultImplementation(UniversalBaseModel):
    get_actual_result: typing_extensions.Annotated[NonVoidFunctionDefinition, FieldMetadata(alias="getActualResult")]
    assert_correctness_check: typing_extensions.Annotated[
        AssertCorrectnessCheck, FieldMetadata(alias="assertCorrectnessCheck")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
