# This file was auto-generated by Fern from our API Definition.

from seed import SeedMixedFileDirectory
from seed import AsyncSeedMixedFileDirectory
import typing
from ..utilities import validate_response


async def test_list_events(client: SeedMixedFileDirectory, async_client: AsyncSeedMixedFileDirectory) -> None:
    expected_response: typing.Any = [{"id": "string", "name": "string"}]
    expected_types: typing.Tuple[typing.Any, typing.Any] = ("list", {0: {"id": None, "name": None}})
    response = client.user.events.list_events(limit=1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.events.list_events(limit=1)
    validate_response(async_response, expected_response, expected_types)
