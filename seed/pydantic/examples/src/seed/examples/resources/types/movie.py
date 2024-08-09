# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .movie_id import MovieId
import typing
import pydantic
from ..commons.resources.types.tag import Tag
from ...core.pydantic_utilities import IS_PYDANTIC_V2


class Movie(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources import Movie

    Movie(
        id="movie-c06a4ad7",
        prequel="movie-cv9b914f",
        title="The Boy and the Heron",
        from_="Hayao Miyazaki",
        rating=8.0,
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
    from_: str = pydantic.Field(alias="from")
    rating: float = pydantic.Field()
    """
    The rating scale is one to five stars
    """

    type: typing.Literal["movie"] = "movie"
    tag: Tag
    book: typing.Optional[str] = None
    metadata: typing.Dict[str, typing.Optional[typing.Any]]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
