# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ...commons.types.types.tag import Tag
from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1
from .movie_id import MovieId


class Movie(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed import Movie

    Movie(
        id="movie-c06a4ad7",
        prequel="movie-cv9b914f",
        title="The Boy and the Heron",
        from_="Hayao Miyazaki",
        rating=8.0,
        type="movie",
        tag="tag-wf9as23d",
        metadata={
            "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
            "releaseDate": "2023-12-08",
            "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
        },
    )
    """

    id: MovieId
    prequel: typing.Optional[MovieId] = None
    title: str
    from_: str = pydantic_v1.Field(alias="from")
    rating: float = pydantic_v1.Field()
    """
    The rating scale is one to five stars
    """

    type: typing.Literal["movie"]
    tag: Tag
    book: typing.Optional[str] = None
    metadata: typing.Dict[str, typing.Any]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}
