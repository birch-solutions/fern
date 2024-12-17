# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
import typing
from ..core.request_options import RequestOptions
from .types.user import User
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_user(
        self, tenant_id: str, user_id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        tenant_id : str

        user_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        from seed import SeedPathParameters

        client = SeedPathParameters(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_user(
            tenant_id="tenant_id",
            user_id="user_id",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(tenant_id)}/user/{jsonable_encoder(user_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    User,
                    parse_obj_as(
                        type_=User,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def search_users(
        self,
        tenant_id: str,
        user_id: str,
        *,
        limit: typing.Optional[int] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.List[User]:
        """
        Parameters
        ----------
        tenant_id : str

        user_id : str

        limit : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[User]

        Examples
        --------
        from seed import SeedPathParameters

        client = SeedPathParameters(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.search_users(
            tenant_id="tenant_id",
            user_id="user_id",
            limit=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(tenant_id)}/user/{jsonable_encoder(user_id)}/search",
            method="GET",
            params={
                "limit": limit,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[User],
                    parse_obj_as(
                        type_=typing.List[User],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_user(
        self, tenant_id: str, user_id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        tenant_id : str

        user_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio

        from seed import AsyncSeedPathParameters

        client = AsyncSeedPathParameters(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.get_user(
                tenant_id="tenant_id",
                user_id="user_id",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(tenant_id)}/user/{jsonable_encoder(user_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    User,
                    parse_obj_as(
                        type_=User,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def search_users(
        self,
        tenant_id: str,
        user_id: str,
        *,
        limit: typing.Optional[int] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.List[User]:
        """
        Parameters
        ----------
        tenant_id : str

        user_id : str

        limit : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[User]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedPathParameters

        client = AsyncSeedPathParameters(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.search_users(
                tenant_id="tenant_id",
                user_id="user_id",
                limit=1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(tenant_id)}/user/{jsonable_encoder(user_id)}/search",
            method="GET",
            params={
                "limit": limit,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[User],
                    parse_obj_as(
                        type_=typing.List[User],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
