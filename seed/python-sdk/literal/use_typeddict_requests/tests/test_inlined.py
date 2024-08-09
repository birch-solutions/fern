# This file was auto-generated by Fern from our API Definition.

from seed import SeedLiteral
from seed import AsyncSeedLiteral
import typing
from .utilities import validate_response


async def test_send(client: SeedLiteral, async_client: AsyncSeedLiteral) -> None:
    expected_response: typing.Any = {"message": "The weather is sunny", "status": 200, "success": True}
    expected_types: typing.Any = {"message": None, "status": "integer", "success": None}
    response = client.inlined.send(
        temperature=10.1,
        context="You're super wise",
        maybe_context="You're super wise",
        query="What is the weather today",
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.inlined.send(
        temperature=10.1,
        context="You're super wise",
        maybe_context="You're super wise",
        query="What is the weather today",
    )
    validate_response(async_response, expected_response, expected_types)
