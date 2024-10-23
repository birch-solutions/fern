# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from ..core.jsonable_encoder import jsonable_encoder
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from .types.user import User
from ..core.pydantic_utilities import parse_obj_as
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_user(self, user_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Retrieve a user.
        This endpoint is used to retrieve a user.

        Parameters
        ----------
        user_id : str
            The ID of the user to retrieve.
            This ID is unique to each user.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedMultiLineDocs

        client = SeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_user(
            user_id="userId",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"users/{jsonable_encoder(user_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def create_user(
        self, *, name: str, age: typing.Optional[int] = OMIT, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Create a new user.
        This endpoint is used to create a new user.

        Parameters
        ----------
        name : str
            The name of the user to create.
            This name is unique to each user.


        age : typing.Optional[int]
            The age of the user.
            This propery is not required.


        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        from seed import SeedMultiLineDocs

        client = SeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.create_user(
            name="name",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "users",
            method="POST",
            json={
                "name": name,
                "age": age,
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

    async def get_user(self, user_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Retrieve a user.
        This endpoint is used to retrieve a user.

        Parameters
        ----------
        user_id : str
            The ID of the user to retrieve.
            This ID is unique to each user.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedMultiLineDocs

        client = AsyncSeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.get_user(
                user_id="userId",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"users/{jsonable_encoder(user_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def create_user(
        self, *, name: str, age: typing.Optional[int] = OMIT, request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Create a new user.
        This endpoint is used to create a new user.

        Parameters
        ----------
        name : str
            The name of the user to create.
            This name is unique to each user.


        age : typing.Optional[int]
            The age of the user.
            This propery is not required.


        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio

        from seed import AsyncSeedMultiLineDocs

        client = AsyncSeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.create_user(
                name="name",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "users",
            method="POST",
            json={
                "name": name,
                "age": age,
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
