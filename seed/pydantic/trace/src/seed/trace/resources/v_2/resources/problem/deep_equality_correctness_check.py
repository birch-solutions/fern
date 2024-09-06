# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .parameter_id import ParameterId
from .....core.serialization import FieldMetadata
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class DeepEqualityCorrectnessCheck(UniversalBaseModel):
    expected_value_parameter_id: typing_extensions.Annotated[
        ParameterId, FieldMetadata(alias="expectedValueParameterId")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
