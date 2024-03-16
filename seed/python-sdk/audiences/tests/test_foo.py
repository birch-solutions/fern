# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedAudiences, SeedAudiences

from .utilities import validate_response


async def test_find(client: SeedAudiences, async_client: AsyncSeedAudiences) -> None:
    expected_response = {"imported": "string"}
    response = client.foo.find(optional_string="string", public_property="string", private_property=1)
    validate_response(response, expected_response)

    async_response = await async_client.foo.find(optional_string="string", public_property="string", private_property=1)
    validate_response(async_response, expected_response)
