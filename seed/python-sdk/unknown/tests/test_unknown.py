# This file was auto-generated by Fern from our API Definition.

from seed import SeedUnknownAsAny
from seed import AsyncSeedUnknownAsAny
import typing
from .utilities import validate_response


async def test_post(
    client: SeedUnknownAsAny, async_client: AsyncSeedUnknownAsAny
) -> None:
    expected_response: typing.Any = [{"key": "value"}]
    expected_types: typing.Tuple[typing.Any, typing.Any] = ("list", {0: None})
    response = client.unknown.post(request={"key": "value"})
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.unknown.post(request={"key": "value"})
    validate_response(async_response, expected_response, expected_types)


async def test_post_object(
    client: SeedUnknownAsAny, async_client: AsyncSeedUnknownAsAny
) -> None:
    expected_response: typing.Any = [{"key": "value"}]
    expected_types: typing.Tuple[typing.Any, typing.Any] = ("list", {0: None})
    response = client.unknown.post_object()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.unknown.post_object()
    validate_response(async_response, expected_response, expected_types)
