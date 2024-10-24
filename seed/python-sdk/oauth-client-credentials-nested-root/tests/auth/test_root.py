# This file was auto-generated by Fern from our API Definition.

from seed import SeedOauthClientCredentials
from seed import AsyncSeedOauthClientCredentials
import typing
from ..utilities import validate_response


async def test_get_token(client: SeedOauthClientCredentials, async_client: AsyncSeedOauthClientCredentials) -> None:
    expected_response: typing.Any = {"access_token": "access_token", "expires_in": 1, "refresh_token": "refresh_token"}
    expected_types: typing.Any = {"access_token": None, "expires_in": "integer", "refresh_token": None}
    response = client.auth.get_token(client_id="client_id", client_secret="client_secret")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.auth.get_token(client_id="client_id", client_secret="client_secret")
    validate_response(async_response, expected_response, expected_types)
