# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedOauthClientCredentialsDefault, SeedOauthClientCredentialsDefault

from .utilities import validate_response


async def test_get_token(
    client: SeedOauthClientCredentialsDefault, async_client: AsyncSeedOauthClientCredentialsDefault
) -> None:
    expected_response = {"access_token": "string", "expires_in": 1}
    expected_types = {"access_token": None, "expires_in": "integer"}
    response = client.auth.get_token(client_id="string", client_secret="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.auth.get_token(client_id="string", client_secret="string")
    validate_response(async_response, expected_response, expected_types)
