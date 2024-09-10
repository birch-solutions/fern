# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
import typing
import typing_extensions
from .....commons.types.variable_type import VariableType
from .....core.serialization import FieldMetadata
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class NonVoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List["Parameter"]
    return_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="returnType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .parameter import Parameter  # noqa: E402

update_forward_refs(NonVoidFunctionSignature)
