# This file was auto-generated by Fern from our API Definition.

from seed import SeedExtraProperties
from seed import AsyncSeedExtraProperties
import typing
from .utilities import validate_response


async def test_create_user(client: SeedExtraProperties, async_client: AsyncSeedExtraProperties) -> None:
    expected_response: typing.Any = {"name": "name"}
    expected_types: typing.Any = {"name": None}
    response = client.user.create_user(name="name")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.create_user(name="name")
    validate_response(async_response, expected_response, expected_types)
