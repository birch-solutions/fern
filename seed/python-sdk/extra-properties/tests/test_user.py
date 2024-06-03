# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedExtraProperties, SeedExtraProperties

from .utilities import validate_response


async def test_create_user(client: SeedExtraProperties, async_client: AsyncSeedExtraProperties) -> None:
    expected_response = {"name": "string"}
    expected_types: typing.Any = {"name": None}
    response = client.user.create_user(name="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.create_user(name="string")
    validate_response(async_response, expected_response, expected_types)
