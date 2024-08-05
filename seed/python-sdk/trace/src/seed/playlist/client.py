# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.datetime_utils import serialize_datetime
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from .errors.playlist_id_not_found_error import PlaylistIdNotFoundError
from .errors.unauthorized_error import UnauthorizedError
from .types.playlist import Playlist
from .types.playlist_create_request import PlaylistCreateRequest
from .types.playlist_id import PlaylistId
from .types.playlist_id_not_found_error_body import PlaylistIdNotFoundErrorBody
from .types.update_playlist_request import UpdatePlaylistRequest

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class PlaylistClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def create_playlist(
        self,
        service_param: int,
        *,
        datetime: dt.datetime,
        optional_datetime: typing.Optional[dt.datetime] = None,
        request: PlaylistCreateRequest,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Playlist:
        """
        Create a new playlist

        Parameters:
            - service_param: int.

            - datetime: dt.datetime.

            - optional_datetime: typing.Optional[dt.datetime].

            - request: PlaylistCreateRequest.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        import datetime

        from seed import PlaylistCreateRequest
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.playlist.create_playlist(
            service_param=1,
            datetime=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            optional_datetime=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            request=PlaylistCreateRequest(
                name="string",
                problems=["string"],
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"v2/playlist/{jsonable_encoder(service_param)}/create"
            ),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "datetime": serialize_datetime(datetime),
                        "optionalDatetime": serialize_datetime(optional_datetime)
                        if optional_datetime is not None
                        else None,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Playlist, _response_json)  # type: ignore
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_playlists(
        self,
        service_param: int,
        *,
        limit: typing.Optional[int] = None,
        other_field: str,
        multi_line_docs: str,
        optional_multiple_field: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        multiple_field: typing.Union[str, typing.Sequence[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.List[Playlist]:
        """
        Returns the user's playlists

        Parameters:
            - service_param: int.

            - limit: typing.Optional[int].

            - other_field: str. i'm another field

            - multi_line_docs: str. I'm a multiline
                                    description
            - optional_multiple_field: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - multiple_field: typing.Union[str, typing.Sequence[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.playlist.get_playlists(
            service_param=1,
            limit=1,
            other_field="string",
            multi_line_docs="string",
            optional_multiple_field="string",
            multiple_field="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"v2/playlist/{jsonable_encoder(service_param)}/all"
            ),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "otherField": other_field,
                        "multiLineDocs": multi_line_docs,
                        "optionalMultipleField": optional_multiple_field,
                        "multipleField": multiple_field,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.List[Playlist], _response_json)  # type: ignore
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_playlist(
        self, service_param: int, playlist_id: PlaylistId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> Playlist:
        """
        Returns a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.playlist.get_playlist(
            service_param=1,
            playlist_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Playlist, _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PlaylistIdNotFoundError":
                raise PlaylistIdNotFoundError(
                    pydantic_v1.parse_obj_as(PlaylistIdNotFoundErrorBody, _response_json["content"])  # type: ignore
                )
            if _response_json["errorName"] == "UnauthorizedError":
                raise UnauthorizedError()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def update_playlist(
        self,
        service_param: int,
        playlist_id: PlaylistId,
        *,
        request: typing.Optional[UpdatePlaylistRequest] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Optional[Playlist]:
        """
        Updates a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request: typing.Optional[UpdatePlaylistRequest].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed import UpdatePlaylistRequest
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.playlist.update_playlist(
            service_param=1,
            playlist_id="string",
            request=UpdatePlaylistRequest(
                name="string",
                problems=["string"],
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "PUT",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.Optional[Playlist], _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PlaylistIdNotFoundError":
                raise PlaylistIdNotFoundError(
                    pydantic_v1.parse_obj_as(PlaylistIdNotFoundErrorBody, _response_json["content"])  # type: ignore
                )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def delete_playlist(
        self, service_param: int, playlist_id: PlaylistId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Deletes a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.playlist.delete_playlist(
            service_param=1,
            playlist_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "DELETE",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncPlaylistClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def create_playlist(
        self,
        service_param: int,
        *,
        datetime: dt.datetime,
        optional_datetime: typing.Optional[dt.datetime] = None,
        request: PlaylistCreateRequest,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Playlist:
        """
        Create a new playlist

        Parameters:
            - service_param: int.

            - datetime: dt.datetime.

            - optional_datetime: typing.Optional[dt.datetime].

            - request: PlaylistCreateRequest.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        import datetime

        from seed import PlaylistCreateRequest
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.playlist.create_playlist(
            service_param=1,
            datetime=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            optional_datetime=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            request=PlaylistCreateRequest(
                name="string",
                problems=["string"],
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"v2/playlist/{jsonable_encoder(service_param)}/create"
            ),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "datetime": serialize_datetime(datetime),
                        "optionalDatetime": serialize_datetime(optional_datetime)
                        if optional_datetime is not None
                        else None,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Playlist, _response_json)  # type: ignore
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_playlists(
        self,
        service_param: int,
        *,
        limit: typing.Optional[int] = None,
        other_field: str,
        multi_line_docs: str,
        optional_multiple_field: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        multiple_field: typing.Union[str, typing.Sequence[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.List[Playlist]:
        """
        Returns the user's playlists

        Parameters:
            - service_param: int.

            - limit: typing.Optional[int].

            - other_field: str. i'm another field

            - multi_line_docs: str. I'm a multiline
                                    description
            - optional_multiple_field: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - multiple_field: typing.Union[str, typing.Sequence[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.playlist.get_playlists(
            service_param=1,
            limit=1,
            other_field="string",
            multi_line_docs="string",
            optional_multiple_field="string",
            multiple_field="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"v2/playlist/{jsonable_encoder(service_param)}/all"
            ),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "otherField": other_field,
                        "multiLineDocs": multi_line_docs,
                        "optionalMultipleField": optional_multiple_field,
                        "multipleField": multiple_field,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.List[Playlist], _response_json)  # type: ignore
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_playlist(
        self, service_param: int, playlist_id: PlaylistId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> Playlist:
        """
        Returns a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.playlist.get_playlist(
            service_param=1,
            playlist_id="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Playlist, _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PlaylistIdNotFoundError":
                raise PlaylistIdNotFoundError(
                    pydantic_v1.parse_obj_as(PlaylistIdNotFoundErrorBody, _response_json["content"])  # type: ignore
                )
            if _response_json["errorName"] == "UnauthorizedError":
                raise UnauthorizedError()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def update_playlist(
        self,
        service_param: int,
        playlist_id: PlaylistId,
        *,
        request: typing.Optional[UpdatePlaylistRequest] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Optional[Playlist]:
        """
        Updates a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request: typing.Optional[UpdatePlaylistRequest].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed import UpdatePlaylistRequest
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.playlist.update_playlist(
            service_param=1,
            playlist_id="string",
            request=UpdatePlaylistRequest(
                name="string",
                problems=["string"],
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "PUT",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.Optional[Playlist], _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PlaylistIdNotFoundError":
                raise PlaylistIdNotFoundError(
                    pydantic_v1.parse_obj_as(PlaylistIdNotFoundErrorBody, _response_json["content"])  # type: ignore
                )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def delete_playlist(
        self, service_param: int, playlist_id: PlaylistId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Deletes a playlist

        Parameters:
            - service_param: int.

            - playlist_id: PlaylistId.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.playlist.delete_playlist(
            service_param=1,
            playlist_id="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "DELETE",
            urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/",
                f"v2/playlist/{jsonable_encoder(service_param)}/{jsonable_encoder(playlist_id)}",
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
