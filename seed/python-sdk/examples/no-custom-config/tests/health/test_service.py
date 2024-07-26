# This file was auto-generated by Fern from our API Definition.

import typing

from seed import AsyncSeedExamples, SeedExamples

from ..utilities import validate_response


async def test_check(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert client.health.service.check(id="id-2sdx82h") is None  # type: ignore[func-returns-value]

    assert await async_client.health.service.check(id="id-2sdx82h") is None  # type: ignore[func-returns-value]


async def test_ping(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response: typing.Any = True
    expected_types: typing.Any = None
    response = client.health.service.ping()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.health.service.ping()
    validate_response(async_response, expected_response, expected_types)
