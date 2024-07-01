# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_text(self, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed.client import SeedPlainText

        client = SeedPlainText(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.get_text()
        """
        _response = self._client_wrapper.httpx_client.request("text", method="POST", request_options=request_options)
        try:
            if 200 <= _response.status_code < 300:
                return _response.text  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_text(self, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedPlainText

        client = AsyncSeedPlainText(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.get_text()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "text", method="POST", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return _response.text  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
