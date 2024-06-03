# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedExhaustive, SeedExhaustive

from .utilities import validate_response


async def test_get_with_no_request_body(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {
        "string": "string",
        "integer": 1,
        "long": 1000000,
        "double": 1.1,
        "bool": True,
        "datetime": "2024-01-15T09:30:00Z",
        "date": "2023-01-15",
        "uuid": "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
        "base64": "SGVsbG8gd29ybGQh",
        "list": ["string"],
        "set": ["string"],
        "map": {"1": "string"},
    }
    expected_types: typing.Any = {
        "string": None,
        "integer": "integer",
        "long": None,
        "double": None,
        "bool": None,
        "datetime": "datetime",
        "date": "date",
        "uuid": "uuid",
        "base64": None,
        "list": ("list", {0: None}),
        "set": ("set", {0: None}),
        "map": ("dict", {0: ("integer", None)}),
    }
    response = client.no_req_body.get_with_no_request_body()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.no_req_body.get_with_no_request_body()
    validate_response(async_response, expected_response, expected_types)


async def test_post_with_no_request_body(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = "string"
    expected_types: typing.Any = None
    response = client.no_req_body.post_with_no_request_body()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.no_req_body.post_with_no_request_body()
    validate_response(async_response, expected_response, expected_types)
