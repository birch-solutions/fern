# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .a_nested_literal import ANestedLiteral
import pydantic


class ATopLevelLiteral(UniversalBaseModel):
    nested_literal: ANestedLiteral = pydantic.Field(alias="nestedLiteral")
