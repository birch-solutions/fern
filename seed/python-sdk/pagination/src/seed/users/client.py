# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
import uuid
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from ..types.username_cursor import UsernameCursor
from .types.list_users_extended_response import ListUsersExtendedResponse
from .types.list_users_pagination_response import ListUsersPaginationResponse
from .types.order import Order
from .types.username_container import UsernameContainer


class UsersClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def list_with_cursor_pagination(
        self,
        *,
        page: typing.Optional[int] = None,
        per_page: typing.Optional[int] = None,
        order: typing.Optional[Order] = None,
        starting_after: typing.Optional[str] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ListUsersPaginationResponse:
        """
        Parameters
        ----------
        page : typing.Optional[int]
            Defaults to first page

        per_page : typing.Optional[int]
            Defaults to per page

        order : typing.Optional[Order]

        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersPaginationResponse

        Examples
        --------
        from seed.client import SeedPagination

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.users.list_with_cursor_pagination(
            page=1,
            per_page=1,
            order="asc",
            starting_after="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "page": page,
                        "per_page": per_page,
                        "order": order,
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersPaginationResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def list_with_offset_pagination(
        self,
        *,
        page: typing.Optional[int] = None,
        per_page: typing.Optional[int] = None,
        order: typing.Optional[Order] = None,
        starting_after: typing.Optional[str] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ListUsersPaginationResponse:
        """
        Parameters
        ----------
        page : typing.Optional[int]
            Defaults to first page

        per_page : typing.Optional[int]
            Defaults to per page

        order : typing.Optional[Order]

        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersPaginationResponse

        Examples
        --------
        from seed.client import SeedPagination

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.users.list_with_offset_pagination(
            page=1,
            per_page=1,
            order="asc",
            starting_after="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "page": page,
                        "per_page": per_page,
                        "order": order,
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersPaginationResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def list_with_extended_results(
        self, *, cursor: typing.Optional[uuid.UUID] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> ListUsersExtendedResponse:
        """
        Parameters
        ----------
        cursor : typing.Optional[uuid.UUID]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersExtendedResponse

        Examples
        --------
        import uuid

        from seed.client import SeedPagination

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.users.list_with_extended_results(
            cursor=uuid.UUID(
                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "cursor": jsonable_encoder(cursor),
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersExtendedResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def list_usernames(
        self, *, starting_after: typing.Optional[str] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> UsernameCursor:
        """
        Parameters
        ----------
        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        UsernameCursor

        Examples
        --------
        from seed.client import SeedPagination

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.users.list_usernames(
            starting_after="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(UsernameCursor, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def list_with_global_config(
        self, *, offset: typing.Optional[int] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> UsernameContainer:
        """
        Parameters
        ----------
        offset : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        UsernameContainer

        Examples
        --------
        from seed.client import SeedPagination

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.users.list_with_global_config(
            offset=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "offset": offset,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(UsernameContainer, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUsersClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def list_with_cursor_pagination(
        self,
        *,
        page: typing.Optional[int] = None,
        per_page: typing.Optional[int] = None,
        order: typing.Optional[Order] = None,
        starting_after: typing.Optional[str] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ListUsersPaginationResponse:
        """
        Parameters
        ----------
        page : typing.Optional[int]
            Defaults to first page

        per_page : typing.Optional[int]
            Defaults to per page

        order : typing.Optional[Order]

        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersPaginationResponse

        Examples
        --------
        from seed.client import AsyncSeedPagination

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.users.list_with_cursor_pagination(
            page=1,
            per_page=1,
            order="asc",
            starting_after="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "page": page,
                        "per_page": per_page,
                        "order": order,
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersPaginationResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def list_with_offset_pagination(
        self,
        *,
        page: typing.Optional[int] = None,
        per_page: typing.Optional[int] = None,
        order: typing.Optional[Order] = None,
        starting_after: typing.Optional[str] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ListUsersPaginationResponse:
        """
        Parameters
        ----------
        page : typing.Optional[int]
            Defaults to first page

        per_page : typing.Optional[int]
            Defaults to per page

        order : typing.Optional[Order]

        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersPaginationResponse

        Examples
        --------
        from seed.client import AsyncSeedPagination

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.users.list_with_offset_pagination(
            page=1,
            per_page=1,
            order="asc",
            starting_after="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "page": page,
                        "per_page": per_page,
                        "order": order,
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersPaginationResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def list_with_extended_results(
        self, *, cursor: typing.Optional[uuid.UUID] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> ListUsersExtendedResponse:
        """
        Parameters
        ----------
        cursor : typing.Optional[uuid.UUID]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ListUsersExtendedResponse

        Examples
        --------
        import uuid

        from seed.client import AsyncSeedPagination

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.users.list_with_extended_results(
            cursor=uuid.UUID(
                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "cursor": jsonable_encoder(cursor),
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(ListUsersExtendedResponse, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def list_usernames(
        self, *, starting_after: typing.Optional[str] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> UsernameCursor:
        """
        Parameters
        ----------
        starting_after : typing.Optional[str]
            The cursor used for pagination in order to fetch
            the next page of results.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        UsernameCursor

        Examples
        --------
        from seed.client import AsyncSeedPagination

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.users.list_usernames(
            starting_after="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "starting_after": starting_after,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(UsernameCursor, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def list_with_global_config(
        self, *, offset: typing.Optional[int] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> UsernameContainer:
        """
        Parameters
        ----------
        offset : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        UsernameContainer

        Examples
        --------
        from seed.client import AsyncSeedPagination

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.users.list_with_global_config(
            offset=1,
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "users"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "offset": offset,
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
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(UsernameContainer, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
