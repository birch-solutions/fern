# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
from .parameter_id import ParameterId
import pydantic


class DeepEqualityCorrectnessCheck(UniversalBaseModel):
    expected_value_parameter_id: ParameterId = pydantic.Field(
        alias="expectedValueParameterId"
    )

    class Config:
        extra = pydantic.Extra.forbid
