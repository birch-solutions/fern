# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .query_result import QueryResult
from .scored_column import ScoredColumn
from .usage import Usage
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class QueryResponse(UniversalBaseModel):
    results: typing.Optional[typing.List[QueryResult]] = None
    matches: typing.Optional[typing.List[ScoredColumn]] = None
    namespace: typing.Optional[str] = None
    usage: typing.Optional[Usage] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
