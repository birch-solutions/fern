# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .requests.a_top_level_literal import ATopLevelLiteralParams
from .types.some_aliased_literal import SomeAliasedLiteral
from ..core.request_options import RequestOptions
from ..types.send_response import SendResponse
from ..core.serialization import convert_and_respect_annotation_metadata
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class InlinedClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(
        self,
        *,
        query: str,
        object_with_literal: ATopLevelLiteralParams,
        context: typing.Optional[typing.Literal["You're super wise"]] = OMIT,
        temperature: typing.Optional[float] = OMIT,
        maybe_context: typing.Optional[SomeAliasedLiteral] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        object_with_literal : ATopLevelLiteralParams

        context : typing.Optional[typing.Literal["You're super wise"]]

        temperature : typing.Optional[float]

        maybe_context : typing.Optional[SomeAliasedLiteral]

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
        client.inlined.send(
            temperature=10.1,
            context="You're super wise",
            maybe_context="You're super wise",
            object_with_literal={"nested_literal": {"my_literal": "How super cool"}},
            query="What is the weather today",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "inlined",
            method="POST",
            json={
                "context": context,
                "query": query,
                "temperature": temperature,
                "maybeContext": maybe_context,
                "objectWithLiteral": convert_and_respect_annotation_metadata(
                    object_=object_with_literal, annotation=ATopLevelLiteralParams, direction="write"
                ),
                "prompt": "You are a helpful assistant",
                "stream": False,
                "aliasedContext": "You're super wise",
            },
            request_options=request_options,
            omit=OMIT,
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


class AsyncInlinedClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(
        self,
        *,
        query: str,
        object_with_literal: ATopLevelLiteralParams,
        context: typing.Optional[typing.Literal["You're super wise"]] = OMIT,
        temperature: typing.Optional[float] = OMIT,
        maybe_context: typing.Optional[SomeAliasedLiteral] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        object_with_literal : ATopLevelLiteralParams

        context : typing.Optional[typing.Literal["You're super wise"]]

        temperature : typing.Optional[float]

        maybe_context : typing.Optional[SomeAliasedLiteral]

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
            await client.inlined.send(
                temperature=10.1,
                context="You're super wise",
                maybe_context="You're super wise",
                object_with_literal={
                    "nested_literal": {"my_literal": "How super cool"}
                },
                query="What is the weather today",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "inlined",
            method="POST",
            json={
                "context": context,
                "query": query,
                "temperature": temperature,
                "maybeContext": maybe_context,
                "objectWithLiteral": convert_and_respect_annotation_metadata(
                    object_=object_with_literal, annotation=ATopLevelLiteralParams, direction="write"
                ),
                "prompt": "You are a helpful assistant",
                "stream": False,
                "aliasedContext": "You're super wise",
            },
            request_options=request_options,
            omit=OMIT,
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
