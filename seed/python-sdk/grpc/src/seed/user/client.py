# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from .types.create_user_response import CreateUserResponse
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from .types.user import User
from ..core.jsonable_encoder import jsonable_encoder
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def create_user(
        self,
        *,
        username: str,
        email: typing.Optional[str] = OMIT,
        age: typing.Optional[int] = OMIT,
        weight: typing.Optional[float] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateUserResponse:
        """
        Parameters
        ----------
        username : str

        email : typing.Optional[str]

        age : typing.Optional[int]

        weight : typing.Optional[float]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateUserResponse

        Examples
        --------
        from seed import SeedApi

        client = SeedApi(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.create_user(
            username="string",
            email="string",
            age=1,
            weight=1.1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "users",
            method="POST",
            json={
                "username": username,
                "email": email,
                "age": age,
                "weight": weight,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    CreateUserResponse,
                    parse_obj_as(type_=CreateUserResponse, object_=_response.json()),
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_user(
        self,
        *,
        username: typing.Optional[str] = None,
        age: typing.Optional[int] = None,
        weight: typing.Optional[float] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters
        ----------
        username : typing.Optional[str]

        age : typing.Optional[int]

        weight : typing.Optional[float]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        from seed import SeedApi

        client = SeedApi(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_user(
            username="string",
            age=1,
            weight=1.1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "users",
            method="GET",
            params={
                "username": username,
                "age": jsonable_encoder(age),
                "weight": jsonable_encoder(weight),
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    User, parse_obj_as(type_=User, object_=_response.json())
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def create_user(
        self,
        *,
        username: str,
        email: typing.Optional[str] = OMIT,
        age: typing.Optional[int] = OMIT,
        weight: typing.Optional[float] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> CreateUserResponse:
        """
        Parameters
        ----------
        username : str

        email : typing.Optional[str]

        age : typing.Optional[int]

        weight : typing.Optional[float]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        CreateUserResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedApi

        client = AsyncSeedApi(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.create_user(
                username="string",
                email="string",
                age=1,
                weight=1.1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "users",
            method="POST",
            json={
                "username": username,
                "email": email,
                "age": age,
                "weight": weight,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    CreateUserResponse,
                    parse_obj_as(type_=CreateUserResponse, object_=_response.json()),
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_user(
        self,
        *,
        username: typing.Optional[str] = None,
        age: typing.Optional[int] = None,
        weight: typing.Optional[float] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters
        ----------
        username : typing.Optional[str]

        age : typing.Optional[int]

        weight : typing.Optional[float]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio

        from seed import AsyncSeedApi

        client = AsyncSeedApi(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.get_user(
                username="string",
                age=1,
                weight=1.1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "users",
            method="GET",
            params={
                "username": username,
                "age": jsonable_encoder(age),
                "weight": jsonable_encoder(weight),
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    User, parse_obj_as(type_=User, object_=_response.json())
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
