# This file was auto-generated by Fern from our API Definition.

import typing

from seed import AsyncSeedApi, SeedApi

from .utilities import validate_response


async def test_create_user(client: SeedApi, async_client: AsyncSeedApi) -> None:
    expected_response: typing.Any = {
        "user": {
            "id": "string",
            "username": "string",
            "email": "string",
            "age": 1,
            "weight": 1.1,
            "metadata": {"string": {"key": "value"}},
        }
    }
    expected_types: typing.Any = {
        "user": {
            "id": None,
            "username": None,
            "email": None,
            "age": None,
            "weight": None,
            "metadata": ("dict", {0: (None, None)}),
        }
    }
    response = client.user.create_user(username="string", email="string", age=1, weight=1.1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.create_user(username="string", email="string", age=1, weight=1.1)
    validate_response(async_response, expected_response, expected_types)


async def test_get_user(client: SeedApi, async_client: AsyncSeedApi) -> None:
    expected_response: typing.Any = {
        "id": "string",
        "username": "string",
        "email": "string",
        "age": 1,
        "weight": 1.1,
        "metadata": {"string": {"key": "value"}},
    }
    expected_types: typing.Any = {
        "id": None,
        "username": None,
        "email": None,
        "age": None,
        "weight": None,
        "metadata": ("dict", {0: (None, None)}),
    }
    response = client.user.get_user(username="string", age=1, weight=1.1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.get_user(username="string", age=1, weight=1.1)
    validate_response(async_response, expected_response, expected_types)
