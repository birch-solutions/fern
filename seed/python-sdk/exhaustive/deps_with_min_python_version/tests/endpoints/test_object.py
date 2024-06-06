# This file was auto-generated by Fern from our API Definition.

import datetime
import typing
import uuid

from seed.client import AsyncSeedExhaustive, SeedExhaustive
from seed.types import NestedObjectWithRequiredField, ObjectWithOptionalField

from ..utilities import validate_response


async def test_get_and_return_with_optional_field(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
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
    response = client.endpoints.object.get_and_return_with_optional_field(
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
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.object.get_and_return_with_optional_field(
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
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_with_required_field(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"string": "string"}
    expected_types: typing.Any = {"string": None}
    response = client.endpoints.object.get_and_return_with_required_field(string="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.object.get_and_return_with_required_field(string="string")
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_with_map_of_map(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"map": {"string": {"string": "string"}}}
    expected_types: typing.Any = {"map": ("dict", {0: (None, ("dict", {0: (None, None)}))})}
    response = client.endpoints.object.get_and_return_with_map_of_map(map_={"string": {"string": "string"}})
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.object.get_and_return_with_map_of_map(
        map_={"string": {"string": "string"}}
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_nested_with_optional_field(
    client: SeedExhaustive, async_client: AsyncSeedExhaustive
) -> None:
    expected_response = {
        "string": "string",
        "NestedObject": {
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
        },
    }
    expected_types: typing.Any = {
        "string": None,
        "NestedObject": {
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
        },
    }
    response = client.endpoints.object.get_and_return_nested_with_optional_field(
        string="string",
        nested_object=ObjectWithOptionalField(
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

    async_response = await async_client.endpoints.object.get_and_return_nested_with_optional_field(
        string="string",
        nested_object=ObjectWithOptionalField(
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


async def test_get_and_return_nested_with_required_field(
    client: SeedExhaustive, async_client: AsyncSeedExhaustive
) -> None:
    expected_response = {
        "string": "string",
        "NestedObject": {
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
        },
    }
    expected_types: typing.Any = {
        "string": None,
        "NestedObject": {
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
        },
    }
    response = client.endpoints.object.get_and_return_nested_with_required_field(
        string_="string",
        string="string",
        nested_object=ObjectWithOptionalField(
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

    async_response = await async_client.endpoints.object.get_and_return_nested_with_required_field(
        string_="string",
        string="string",
        nested_object=ObjectWithOptionalField(
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


async def test_get_and_return_nested_with_required_field_as_list(
    client: SeedExhaustive, async_client: AsyncSeedExhaustive
) -> None:
    expected_response = {
        "string": "string",
        "NestedObject": {
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
        },
    }
    expected_types: typing.Any = {
        "string": None,
        "NestedObject": {
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
        },
    }
    response = client.endpoints.object.get_and_return_nested_with_required_field_as_list(
        request=[
            NestedObjectWithRequiredField(
                string="string",
                nested_object=ObjectWithOptionalField(
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
        ]
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.object.get_and_return_nested_with_required_field_as_list(
        request=[
            NestedObjectWithRequiredField(
                string="string",
                nested_object=ObjectWithOptionalField(
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
        ]
    )
    validate_response(async_response, expected_response, expected_types)
