# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedLiteral, SeedLiteral

from .utilities import validate_response


async def test_send(client: SeedLiteral, async_client: AsyncSeedLiteral) -> None:
    expected_response: typing.Any = {"message": "The weather is sunny", "status": 200, "success": True}
    expected_types: typing.Any = {"message": None, "status": "integer", "success": None}
    response = client.headers.send(query="What is the weather today")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.headers.send(query="What is the weather today")
    validate_response(async_response, expected_response, expected_types)


async def test_send_generated(client: SeedLiteral, async_client: AsyncSeedLiteral) -> None:
    expected_response: typing.Any = {"message": "The weather is sunny", "status": 200, "success": True}
    expected_types: typing.Any = {"message": None, "status": "integer", "success": None}
    response = client.headers.send(query="What is the weather today")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.headers.send(query="What is the weather today")
    validate_response(async_response, expected_response, expected_types)
