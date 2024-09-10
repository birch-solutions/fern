# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .....core.serialization import FieldMetadata
from .assert_correctness_check import AssertCorrectnessCheck
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class TestCaseWithActualResultImplementation(UniversalBaseModel):
    get_actual_result: typing_extensions.Annotated["NonVoidFunctionDefinition", FieldMetadata(alias="getActualResult")]
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


from .non_void_function_definition import NonVoidFunctionDefinition  # noqa: E402

update_forward_refs(TestCaseWithActualResultImplementation)
