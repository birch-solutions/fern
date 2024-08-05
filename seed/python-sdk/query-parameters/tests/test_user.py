# This file was auto-generated by Fern from our API Definition.

from seed import SeedQueryParameters
from seed import AsyncSeedQueryParameters
import typing
import uuid
import datetime
from seed.user import User
from seed.user import NestedUser
from .utilities import validate_response


async def test_get_username(
    client: SeedQueryParameters, async_client: AsyncSeedQueryParameters
) -> None:
    expected_response: typing.Any = {"name": "string", "tags": ["string"]}
    expected_types: typing.Any = {"name": None, "tags": ("list", {0: None})}
    response = client.user.get_username(
        limit=1,
        id=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        date=datetime.date.fromisoformat("2023-01-15"),
        deadline=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        bytes="SGVsbG8gd29ybGQh",
        user=User(name="string", tags=["string"]),
        user_list=[User(name="string", tags=["string"])],
        optional_deadline=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        key_value={"string": "string"},
        optional_string="string",
        nested_user=NestedUser(
            name="string", user=User(name="string", tags=["string"])
        ),
        optional_user=User(name="string", tags=["string"]),
        exclude_user=User(name="string", tags=["string"]),
        filter="string",
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.user.get_username(
        limit=1,
        id=uuid.UUID("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        date=datetime.date.fromisoformat("2023-01-15"),
        deadline=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        bytes="SGVsbG8gd29ybGQh",
        user=User(name="string", tags=["string"]),
        user_list=[User(name="string", tags=["string"])],
        optional_deadline=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        key_value={"string": "string"},
        optional_string="string",
        nested_user=NestedUser(
            name="string", user=User(name="string", tags=["string"])
        ),
        optional_user=User(name="string", tags=["string"]),
        exclude_user=User(name="string", tags=["string"]),
        filter="string",
    )
    validate_response(async_response, expected_response, expected_types)
