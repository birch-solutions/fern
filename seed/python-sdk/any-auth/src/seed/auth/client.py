# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from .types.token_response import TokenResponse
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class AuthClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_token(
        self,
        *,
        client_id: str,
        client_secret: str,
        scope: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> TokenResponse:
        """
        Parameters
        ----------
        client_id : str

        client_secret : str

        scope : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        TokenResponse

        Examples
        --------
        from seed import SeedAnyAuth

        client = SeedAnyAuth(
            base_url="https://yourhost.com/path/to/api",
            client_id="YOUR_CLIENT_ID",
            client_secret="YOUR_CLIENT_SECRET",
        )
        client.auth.get_token(
            client_id="client_id",
            client_secret="client_secret",
            scope="scope",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "token",
            method="POST",
            json={
                "client_id": client_id,
                "client_secret": client_secret,
                "scope": scope,
                "audience": "https://api.example.com",
                "grant_type": "client_credentials",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    TokenResponse,
                    parse_obj_as(
                        type_=TokenResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncAuthClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_token(
        self,
        *,
        client_id: str,
        client_secret: str,
        scope: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> TokenResponse:
        """
        Parameters
        ----------
        client_id : str

        client_secret : str

        scope : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        TokenResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedAnyAuth

        client = AsyncSeedAnyAuth(
            base_url="https://yourhost.com/path/to/api",
            client_id="YOUR_CLIENT_ID",
            client_secret="YOUR_CLIENT_SECRET",
        )


        async def main() -> None:
            await client.auth.get_token(
                client_id="client_id",
                client_secret="client_secret",
                scope="scope",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "token",
            method="POST",
            json={
                "client_id": client_id,
                "client_secret": client_secret,
                "scope": scope,
                "audience": "https://api.example.com",
                "grant_type": "client_credentials",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    TokenResponse,
                    parse_obj_as(
                        type_=TokenResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
