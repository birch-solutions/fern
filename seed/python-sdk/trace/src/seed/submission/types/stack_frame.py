# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...core.serialization import FieldMetadata
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class StackFrame(UniversalBaseModel):
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    line_number: typing_extensions.Annotated[int, FieldMetadata(alias="lineNumber")]
    scopes: typing.List["Scope"]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .scope import Scope  # noqa: E402

update_forward_refs(StackFrame)
