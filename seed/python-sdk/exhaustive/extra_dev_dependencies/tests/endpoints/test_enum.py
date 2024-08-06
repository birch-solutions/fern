# This file was auto-generated by Fern from our API Definition.

from seed import SeedExhaustive
from seed import AsyncSeedExhaustive
import typing
from ..utilities import validate_response


async def test_get_and_return_enum(
    client: SeedExhaustive, async_client: AsyncSeedExhaustive
) -> None:
    expected_response: typing.Any = "SUNNY"
    expected_types: typing.Any = None
    response = client.endpoints.enum.get_and_return_enum(request="SUNNY")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.enum.get_and_return_enum(
        request="SUNNY"
    )
    validate_response(async_response, expected_response, expected_types)
