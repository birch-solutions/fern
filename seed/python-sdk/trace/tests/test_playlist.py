# This file was auto-generated by Fern from our API Definition.

import datetime

from seed import PlaylistCreateRequest, UpdatePlaylistRequest
from seed.client import AsyncSeedTrace, SeedTrace

from .utilities import validate_response


async def test_create_playlist(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {
        "playlist_id": "string",
        "owner-id": "string",
        "name": "string",
        "problems": ["string"],
    }
    expected_types = {
        "playlist_id": None,
        "owner-id": None,
        "name": None,
        "problems": ("list", {0: None}),
    }
    response = client.playlist.create_playlist(
        service_param=1,
        datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        optional_datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        request=PlaylistCreateRequest(name="string", problems=["string"]),
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.playlist.create_playlist(
        service_param=1,
        datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        optional_datetime=datetime.datetime.fromisoformat("2024-01-15 09:30:00+00:00"),
        request=PlaylistCreateRequest(name="string", problems=["string"]),
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_playlists(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = [
        {
            "playlist_id": "string",
            "owner-id": "string",
            "name": "string",
            "problems": ["string"],
        }
    ]
    expected_types = (
        "list",
        {
            0: {
                "playlist_id": None,
                "owner-id": None,
                "name": None,
                "problems": ("list", {0: None}),
            }
        },
    )
    response = client.playlist.get_playlists(
        service_param=1,
        limit=1,
        other_field="string",
        multi_line_docs="string",
        optional_multiple_field="string",
        multiple_field="string",
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.playlist.get_playlists(
        service_param=1,
        limit=1,
        other_field="string",
        multi_line_docs="string",
        optional_multiple_field="string",
        multiple_field="string",
    )
    validate_response(async_response, expected_response, expected_types)


async def test_get_playlist(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {
        "playlist_id": "string",
        "owner-id": "string",
        "name": "string",
        "problems": ["string"],
    }
    expected_types = {
        "playlist_id": None,
        "owner-id": None,
        "name": None,
        "problems": ("list", {0: None}),
    }
    response = client.playlist.get_playlist(service_param=1, playlist_id="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.playlist.get_playlist(
        service_param=1, playlist_id="string"
    )
    validate_response(async_response, expected_response, expected_types)


async def test_update_playlist(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {
        "playlist_id": "string",
        "owner-id": "string",
        "name": "string",
        "problems": ["string"],
    }
    expected_types = {
        "playlist_id": None,
        "owner-id": None,
        "name": None,
        "problems": ("list", {0: None}),
    }
    response = client.playlist.update_playlist(
        service_param=1,
        playlist_id="string",
        request=UpdatePlaylistRequest(name="string", problems=["string"]),
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.playlist.update_playlist(
        service_param=1,
        playlist_id="string",
        request=UpdatePlaylistRequest(name="string", problems=["string"]),
    )
    validate_response(async_response, expected_response, expected_types)


async def test_delete_playlist(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.playlist.delete_playlist(service_param=1, playlist_id="string") is None
    )  # type: ignore[func-returns-value]

    assert (
        await async_client.playlist.delete_playlist(
            service_param=1, playlist_id="string"
        )
        is None
    )  # type: ignore[func-returns-value]
