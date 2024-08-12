# This file was auto-generated by Fern from our API Definition.

from seed import SeedOauthClientCredentialsDefault
from seed import AsyncSeedOauthClientCredentialsDefault
import typing
from .utilities import validate_response


async def test_get_token(
    client: SeedOauthClientCredentialsDefault, async_client: AsyncSeedOauthClientCredentialsDefault
) -> None:
    expected_response: typing.Any = {"access_token": "string", "expires_in": 1}
    expected_types: typing.Any = {"access_token": None, "expires_in": "integer"}
    response = client.auth.get_token(client_id="string", client_secret="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.auth.get_token(client_id="string", client_secret="string")
    validate_response(async_response, expected_response, expected_types)
