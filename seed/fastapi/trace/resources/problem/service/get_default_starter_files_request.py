# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ..types.variable_type_and_name import VariableTypeAndName
import pydantic
from ...commons.types.variable_type import VariableType


class GetDefaultStarterFilesRequest(UniversalBaseModel):
    input_params: typing.List[VariableTypeAndName] = pydantic.Field(alias="inputParams")
    output_type: VariableType = pydantic.Field(alias="outputType")
    method_name: str = pydantic.Field(alias="methodName")
    """
    The name of the `method` that the student has to complete.
    The method name cannot include the following characters:
      - Greater Than `>`
      - Less Than `<``
      - Equals `=`
      - Period `.`
    """

    class Config:
        extra = pydantic.Extra.forbid
