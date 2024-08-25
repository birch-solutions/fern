# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .metadata import Metadata
from .indexed_data import IndexedData
import pydantic
from ..core.pydantic_utilities import IS_PYDANTIC_V2


class Column(UniversalBaseModel):
    id: str
    values: typing.List[float]
    metadata: typing.Optional[Metadata] = None
    indexed_data: typing.Optional[IndexedData] = pydantic.Field(alias="indexedData", default=None)

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
