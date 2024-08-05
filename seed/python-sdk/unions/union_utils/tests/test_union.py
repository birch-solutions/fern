# This file was auto-generated by Fern from our API Definition.

import typing

from seed import Shape_Circle
from seed.client import AsyncSeedUnions, SeedUnions

from .utilities import validate_response


async def test_get(client: SeedUnions, async_client: AsyncSeedUnions) -> None:
    expected_response: typing.Any = {"type": "circle", "id": "string", "radius": 1.1}
    expected_types: typing.Any = "no_validate"
    response = client.union.get(id="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.union.get(id="string")
    validate_response(async_response, expected_response, expected_types)


async def test_update(client: SeedUnions, async_client: AsyncSeedUnions) -> None:
    expected_response: typing.Any = True
    expected_types: typing.Any = None
    response = client.union.update(request=Shape_Circle(id="string", radius=1.1))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.union.update(
        request=Shape_Circle(id="string", radius=1.1)
    )
    validate_response(async_response, expected_response, expected_types)
