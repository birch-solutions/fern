# This file was auto-generated by Fern from our API Definition.

import typing

from seed.client import AsyncSeedExhaustive, SeedExhaustive
from seed.types import ObjectWithRequiredField

from ..utilities import validate_response


async def test_get_and_return_list_of_primitives(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = ["string"]
    expected_types: typing.Any = ("list", {0: None})
    response = client.endpoints.container.get_and_return_list_of_primitives(request=["string"])
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_list_of_primitives(request=["string"])
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_list_of_objects(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = [{"string": "string"}]
    expected_types: typing.Any = ("list", {0: {"string": None}})
    response = client.endpoints.container.get_and_return_list_of_objects(
        request=[ObjectWithRequiredField(string="string")]
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_list_of_objects(
        request=[ObjectWithRequiredField(string="string")]
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_set_of_primitives(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = ["string"]
    expected_types: typing.Any = ("set", {0: None})
    response = client.endpoints.container.get_and_return_set_of_primitives(request={"string"})
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_set_of_primitives(request={"string"})
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_set_of_objects(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = [{"string": "string"}]
    expected_types: typing.Any = ("set", {0: {"string": None}})
    response = client.endpoints.container.get_and_return_set_of_objects(
        request={ObjectWithRequiredField(string="string")}
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_set_of_objects(
        request={ObjectWithRequiredField(string="string")}
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_map_prim_to_prim(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"string": "string"}
    expected_types: typing.Any = ("dict", {0: (None, None)})
    response = client.endpoints.container.get_and_return_map_prim_to_prim(request={"string": "string"})
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_map_prim_to_prim(
        request={"string": "string"}
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_map_of_prim_to_object(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"string": {"string": "string"}}
    expected_types: typing.Any = ("dict", {0: (None, {"string": None})})
    response = client.endpoints.container.get_and_return_map_of_prim_to_object(
        request={"string": ObjectWithRequiredField(string="string")}
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_map_of_prim_to_object(
        request={"string": ObjectWithRequiredField(string="string")}
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_and_return_optional(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"string": "string"}
    expected_types: typing.Any = {"string": None}
    response = client.endpoints.container.get_and_return_optional(request=ObjectWithRequiredField(string="string"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.endpoints.container.get_and_return_optional(
        request=ObjectWithRequiredField(string="string")
    )
    validate_response(async_response, expected_response, expected_types)
