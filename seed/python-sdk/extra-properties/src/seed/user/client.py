# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from .types.user import User
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def create_user(
        self, *, name: str, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        name : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        from seed import SeedExtraProperties

        client = SeedExtraProperties(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.create_user(
            name="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "user",
            method="POST",
            json={
                "name": name,
                "_type": "CreateUserRequest",
                "_version": "v1",
            },
            request_options=request_options,
            omit=OMIT,
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


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def create_user(
        self, *, name: str, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        name : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExtraProperties

        client = AsyncSeedExtraProperties(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.create_user(
                name="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "user",
            method="POST",
            json={
                "name": name,
                "_type": "CreateUserRequest",
                "_version": "v1",
            },
            request_options=request_options,
            omit=OMIT,
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
