# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedExhaustive, SeedExhaustive

from .utilities import validate_response


async def test_echo(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "Hello world!\\n\\nwith\\n\\tnewlines"
    expected_types: typing.Any = None
    response = client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(async_response, expected_response, expected_types)


async def test_echo_generated(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "Hello world!\\n\\nwith\\n\\tnewlines"
    expected_types: typing.Any = None
    response = client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(async_response, expected_response, expected_types)
