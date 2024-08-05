# This file was auto-generated by Fern from our API Definition.

import typing

from seed import AsyncSeedObjectsWithImports, SeedObjectsWithImports

from .utilities import validate_response


async def test_send_optional_body(client: SeedObjectsWithImports, async_client: AsyncSeedObjectsWithImports) -> None:
    expected_response: typing.Any = "string"
    expected_types: typing.Any = None
    response = client.optional.send_optional_body(request={"string": {"key": "value"}})
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.optional.send_optional_body(request={"string": {"key": "value"}})
    validate_response(async_response, expected_response, expected_types)
