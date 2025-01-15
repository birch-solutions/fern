# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
import typing
from .types.alias_to_prompt import AliasToPrompt
from .types.alias_to_stream import AliasToStream
from ..core.request_options import RequestOptions
from ..types.send_response import SendResponse
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper


class QueryClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(
        self,
        *,
        query: str,
        optional_prompt: typing.Optional[typing.Literal["You are a helpful assistant"]] = None,
        alias_optional_prompt: typing.Optional[AliasToPrompt] = None,
        optional_stream: typing.Optional[typing.Literal[False]] = None,
        alias_optional_stream: typing.Optional[AliasToStream] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        optional_prompt : typing.Optional[typing.Literal["You are a helpful assistant"]]

        alias_optional_prompt : typing.Optional[AliasToPrompt]

        optional_stream : typing.Optional[typing.Literal[False]]

        alias_optional_stream : typing.Optional[AliasToStream]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        from seed import SeedLiteral

        client = SeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )
        client.query.send(
            query="What is the weather today",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "query",
            method="POST",
            params={
                "prompt": "You are a helpful assistant",
                "optional_prompt": optional_prompt,
                "alias_prompt": "You are a helpful assistant",
                "alias_optional_prompt": alias_optional_prompt,
                "query": query,
                "stream": False,
                "optional_stream": optional_stream,
                "alias_stream": False,
                "alias_optional_stream": alias_optional_stream,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    SendResponse,
                    parse_obj_as(
                        type_=SendResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncQueryClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(
        self,
        *,
        query: str,
        optional_prompt: typing.Optional[typing.Literal["You are a helpful assistant"]] = None,
        alias_optional_prompt: typing.Optional[AliasToPrompt] = None,
        optional_stream: typing.Optional[typing.Literal[False]] = None,
        alias_optional_stream: typing.Optional[AliasToStream] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        optional_prompt : typing.Optional[typing.Literal["You are a helpful assistant"]]

        alias_optional_prompt : typing.Optional[AliasToPrompt]

        optional_stream : typing.Optional[typing.Literal[False]]

        alias_optional_stream : typing.Optional[AliasToStream]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedLiteral

        client = AsyncSeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.query.send(
                query="What is the weather today",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "query",
            method="POST",
            params={
                "prompt": "You are a helpful assistant",
                "optional_prompt": optional_prompt,
                "alias_prompt": "You are a helpful assistant",
                "alias_optional_prompt": alias_optional_prompt,
                "query": query,
                "stream": False,
                "optional_stream": optional_stream,
                "alias_stream": False,
                "alias_optional_stream": alias_optional_stream,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    SendResponse,
                    parse_obj_as(
                        type_=SendResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
