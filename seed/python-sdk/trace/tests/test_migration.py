# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedTrace, SeedTrace

from .utilities import validate_response


async def test_get_attempted_migrations(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = [{"name": "string", "status": "RUNNING"}]
    response = client.migration.get_attempted_migrations(admin_key_header="string")
    validate_response(response, expected_response)

    async_response = await async_client.migration.get_attempted_migrations(admin_key_header="string")
    validate_response(async_response, expected_response)
