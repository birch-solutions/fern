# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedBearerTokenEnvironmentVariable, SeedBearerTokenEnvironmentVariable

from .utilities import validate_response


async def test_get_with_bearer_token(
    client: SeedBearerTokenEnvironmentVariable, async_client: AsyncSeedBearerTokenEnvironmentVariable
) -> None:
    expected_response = "string"
    expected_types: typing.Any = None
    response = client.service.get_with_bearer_token()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.get_with_bearer_token()
    validate_response(async_response, expected_response, expected_types)
