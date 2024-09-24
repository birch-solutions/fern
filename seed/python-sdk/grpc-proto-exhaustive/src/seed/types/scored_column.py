# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .metadata import Metadata
import typing_extensions
from .indexed_data import IndexedData
from ..core.serialization import FieldMetadata
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ScoredColumn(UniversalBaseModel):
    id: str
    score: typing.Optional[float] = None
    values: typing.Optional[typing.List[float]] = None
    metadata: typing.Optional[Metadata] = None
    indexed_data: typing_extensions.Annotated[typing.Optional[IndexedData], FieldMetadata(alias="indexedData")] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
