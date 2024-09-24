# This file was auto-generated by Fern from our API Definition.

from .movie import Movie
import typing
import pydantic


class ExtendedMovie(Movie):
    """
    Examples
    --------
    from seed.examples.resources.types import ExtendedMovie

    ExtendedMovie(
        id="movie-sda231x",
        title="Pulp Fiction",
        from_="Quentin Tarantino",
        rating=8.5,
        tag="tag-12efs9dv",
        cast=["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
        metadata={
            "academyAward": True,
            "releaseDate": "2023-12-08",
            "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
        },
        revenue=1000000,
    )
    """

    cast: typing.List[str]

    class Config:
        extra = pydantic.Extra.forbid
