# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from .metadata import Metadata
from .indexed_data import IndexedData
from ..core.pydantic_utilities import IS_PYDANTIC_V2


class QueryColumn(UniversalBaseModel):
    values: typing.List[float]
    top_k: typing.Optional[int] = pydantic.Field(alias="topK", default=None)
    namespace: typing.Optional[str] = None
    filter: typing.Optional[Metadata] = None
    indexed_data: typing.Optional[IndexedData] = pydantic.Field(
        alias="indexedData", default=None
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
