# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedExamples, SeedExamples

from .utilities import validate_response


async def test_get_movie(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response = {
        "id": "movie-c06a4ad7",
        "prequel": "movie-cv9b914f",
        "title": "The Boy and the Heron",
        "from": "Hayao Miyazaki",
        "rating": 8,
        "type": "movie",
        "tag": "tag-wf9as23d",
        "metadata": {
            "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
            "releaseDate": "2023-12-08",
            "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
        },
    }
    expected_types: typing.Any = {
        "id": None,
        "prequel": None,
        "title": None,
        "from": None,
        "rating": None,
        "type": None,
        "tag": None,
        "metadata": ("dict", {0: (None, None), 1: (None, None), 2: (None, None)}),
    }
    response = client.service.get_movie(movie_id="movie-c06a4ad7")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.get_movie(movie_id="movie-c06a4ad7")
    validate_response(async_response, expected_response, expected_types)


async def test_create_movie(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response = "movie-c06a4ad7"
    expected_types: typing.Any = None
    response = client.service.create_movie(
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
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.create_movie(
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
    validate_response(async_response, expected_response, expected_types)


async def test_get_metadata(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response = {
        "type": "html",
        "extra": {"version": "0.0.1", "tenancy": "test"},
        "tags": ["development", "public"],
        "value": "<head>...</head>",
    }
    expected_types: typing.Any = "no_validate"
    response = client.service.get_metadata(x_api_version="0.0.1", shallow=False, tag="development")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.get_metadata(x_api_version="0.0.1", shallow=False, tag="development")
    validate_response(async_response, expected_response, expected_types)


async def test_get_response(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response = {
        "response": "Initializing...",
        "identifiers": [
            {"type": "primitive", "value": "example", "label": "Primitive"},
            {"type": "unknown", "value": "{}", "label": "Unknown"},
        ],
    }
    expected_types: typing.Any = {
        "response": None,
        "identifiers": (
            "list",
            {0: {"type": None, "value": None, "label": None}, 1: {"type": None, "value": None, "label": None}},
        ),
    }
    response = client.service.get_response()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.get_response()
    validate_response(async_response, expected_response, expected_types)
