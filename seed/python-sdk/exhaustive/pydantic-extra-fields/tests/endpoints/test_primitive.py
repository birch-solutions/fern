# This file was auto-generated by Fern from our API Definition.

from seed import SeedExhaustive
from seed import AsyncSeedExhaustive
import typing
from ..utilities import validate_response
import datetime
import uuid


async def test_get_and_return_string(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "string"
    expected_types: typing.Any = None
    response = client.endpoints.primitive.get_and_return_string(request="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_string(request="string")
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_int(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = 1
    expected_types: typing.Any = "integer"
    response = client.endpoints.primitive.get_and_return_int(request=1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_int(request=1)
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_long(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = 1000000
    expected_types: typing.Any = None
    response = client.endpoints.primitive.get_and_return_long(request=1000000)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_long(request=1000000)
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_double(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = 1.1
    expected_types: typing.Any = None
    response = client.endpoints.primitive.get_and_return_double(request=1.1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_double(request=1.1)
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_bool(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = True
    expected_types: typing.Any = None
    response = client.endpoints.primitive.get_and_return_bool(request=True)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_bool(request=True)
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_datetime(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "SGVsbG8gd29ybGQh"
    expected_types: typing.Any = "datetime"
    response = client.endpoints.primitive.get_and_return_datetime(
        request=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00")
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_datetime(
        request=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00")
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_date(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "2023-01-15"
    expected_types: typing.Any = "date"
    response = client.endpoints.primitive.get_and_return_date(request=datetime.date.fromisoformat("2023-01-15"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_date(
        request=datetime.date.fromisoformat("2023-01-15")
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_uuid(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"
    expected_types: typing.Any = "uuid"
    response = client.endpoints.primitive.get_and_return_uuid(request=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_uuid(
        request=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_base_64(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response: typing.Any = "SGVsbG8gd29ybGQh"
    expected_types: typing.Any = None
    response = client.endpoints.primitive.get_and_return_base_64(request=SGVsbG8gd29ybGQh)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.primitive.get_and_return_base_64(request=SGVsbG8gd29ybGQh)
    validate_response(async_response, expected_response, expected_types)
