# This file was auto-generated by Fern from our API Definition.

from seed import SeedVersion
from seed import AsyncSeedVersion
import typing
from .utilities import validate_response


async def test_get_user(client: SeedVersion, async_client: AsyncSeedVersion) -> None:
    expected_response: typing.Any = {"id": "id", "name": "name"}
    expected_types: typing.Any = {"id": None, "name": None}
    response = client.user.get_user(user_id="userId")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.get_user(user_id="userId")
    validate_response(async_response, expected_response, expected_types)
