# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
from .types.user_id import UserId
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

    def get_user(self, user_id: UserId, *, request_options: typing.Optional[RequestOptions] = None) -> User:
        """
        Parameters
        ----------
        user_id : UserId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        from seed import SeedVersion

        client = SeedVersion(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_user(
            user_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"users/{jsonable_encoder(user_id)}",
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


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_user(self, user_id: UserId, *, request_options: typing.Optional[RequestOptions] = None) -> User:
        """
        Parameters
        ----------
        user_id : UserId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio

        from seed import AsyncSeedVersion

        client = AsyncSeedVersion(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.get_user(
                user_id="string",
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
