# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedPackageYml, SeedPackageYml

from .utilities import validate_response


async def test_echo(client: SeedPackageYml, async_client: AsyncSeedPackageYml) -> None:
    expected_response: typing.Any = "Hello world!"
    expected_types: typing.Any = None
    response = client.echo(id="id-ksfd9c1", request="Hello world!")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.echo(id="id-ksfd9c1", request="Hello world!")
    validate_response(async_response, expected_response, expected_types)
