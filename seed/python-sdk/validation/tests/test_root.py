# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedValidation, SeedValidation

from .utilities import validate_response


async def test_create(client: SeedValidation, async_client: AsyncSeedValidation) -> None:
    expected_response = {"decimal": 1.1, "even": 2, "name": "rules"}
    expected_types: typing.Any = {"decimal": None, "even": "integer", "name": None}
    response = client.create(decimal=1.1, even=1, name="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.create(decimal=1.1, even=1, name="string")
    validate_response(async_response, expected_response, expected_types)


async def test_get(client: SeedValidation, async_client: AsyncSeedValidation) -> None:
    expected_response = {"decimal": 1.1, "even": 2, "name": "rules"}
    expected_types: typing.Any = {"decimal": None, "even": "integer", "name": None}
    response = client.get(decimal=1.1, even=1, name="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.get(decimal=1.1, even=1, name="string")
    validate_response(async_response, expected_response, expected_types)
