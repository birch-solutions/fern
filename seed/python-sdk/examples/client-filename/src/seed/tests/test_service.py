# This file was auto-generated by Fern from our API Definition.

from seed import Movie
from seed.client import AsyncSeedExhaustive, SeedExhaustive

from .utilities import validate_response


async def test_get_movie(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {
        "id": "movie-c06a4ad7",
        "prequel": "movie-cv9b914f",
        "title": "The Boy and the Heron",
        "from": "Hayao Miyazaki",
        "rating": 8,
        "type": "movie",
        "tag": "tag-wf9as23d",
    }
    response = client.service.get_movie(movie_id="movie-c06a4ad7")
    validate_response(response, expected_response)

    async_response = await async_client.service.get_movie(movie_id="movie-c06a4ad7")
    validate_response(async_response, expected_response)


async def test_create_movie(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = "movie-c06a4ad7"
    response = client.service.create_movie(
        request=Movie(
            id="movie-c06a4ad7",
            prequel="movie-cv9b914f",
            title="The Boy and the Heron",
            from_="Hayao Miyazaki",
            rating=8.0,
            type="movie",
            tag="tag-wf9as23d",
        )
    )
    validate_response(response, expected_response)

    async_response = await async_client.service.create_movie(
        request=Movie(
            id="movie-c06a4ad7",
            prequel="movie-cv9b914f",
            title="The Boy and the Heron",
            from_="Hayao Miyazaki",
            rating=8.0,
            type="movie",
            tag="tag-wf9as23d",
        )
    )
    validate_response(async_response, expected_response)


async def test_get_metadata(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {
        "type": "html",
        "extra": {"version": "0.0.1", "tenancy": "test"},
        "tags": ["development", "public"],
        "value": "<head>...</head>",
    }
    response = client.service.get_metadata(x_api_version="0.0.1", shallow=False, tag="development")
    validate_response(response, expected_response)

    async_response = await async_client.service.get_metadata(x_api_version="0.0.1", shallow=False, tag="development")
    validate_response(async_response, expected_response)
