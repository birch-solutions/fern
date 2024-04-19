# This file was auto-generated by Fern from our API Definition.

import datetime
import uuid

from seed.client import AsyncSeedExhaustive, SeedExhaustive
from seed.types import ObjectWithOptionalField, ObjectWithRequiredField

from ..utilities import validate_response


async def test_test_get(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = "string"
    response = client.endpoints.http_methods.test_get(id="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.http_methods.test_get(id="string")
    validate_response(async_response, expected_response, expected_types)


async def test_test_post(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
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
    expected_types = {
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
    response = client.endpoints.http_methods.test_post(request=ObjectWithRequiredField(string="string"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.http_methods.test_post(
        request=ObjectWithRequiredField(string="string")
    )
    validate_response(async_response, expected_response, expected_types)


async def test_test_put(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
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
    expected_types = {
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
    response = client.endpoints.http_methods.test_put(id="string", request=ObjectWithRequiredField(string="string"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.http_methods.test_put(
        id="string", request=ObjectWithRequiredField(string="string")
    )
    validate_response(async_response, expected_response, expected_types)


async def test_test_patch(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
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
    expected_types = {
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
    response = client.endpoints.http_methods.test_patch(
        id="string",
        request=ObjectWithOptionalField(
            string="string",
            integer=1,
            long_=1000000,
            double=1.1,
            bool_=True,
            datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
            date=datetime.date.fromisoformat("2023-01-15"),
            uuid_=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            base_64="SGVsbG8gd29ybGQh",
            list_=["string"],
            set_={"string"},
            map_={1: "string"},
        ),
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.http_methods.test_patch(
        id="string",
        request=ObjectWithOptionalField(
            string="string",
            integer=1,
            long_=1000000,
            double=1.1,
            bool_=True,
            datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
            date=datetime.date.fromisoformat("2023-01-15"),
            uuid_=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            base_64="SGVsbG8gd29ybGQh",
            list_=["string"],
            set_={"string"},
            map_={1: "string"},
        ),
    )
    validate_response(async_response, expected_response, expected_types)


async def test_test_delete(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = True
    response = client.endpoints.http_methods.test_delete(id="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.http_methods.test_delete(id="string")
    validate_response(async_response, expected_response, expected_types)
