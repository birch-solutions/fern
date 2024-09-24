# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from .metadata import Metadata
from .indexed_data import IndexedData


class QueryColumn(UniversalBaseModel):
    values: typing.List[float]
    top_k: typing.Optional[int] = pydantic.Field(alias="topK", default=None)
    namespace: typing.Optional[str] = None
    filter: typing.Optional[Metadata] = None
    indexed_data: typing.Optional[IndexedData] = pydantic.Field(
        alias="indexedData", default=None
    )

    class Config:
        extra = pydantic.Extra.forbid
