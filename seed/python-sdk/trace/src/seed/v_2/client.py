# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
from .problem.client import ProblemClient
from .v_3.client import V3Client
import typing
from ..core.request_options import RequestOptions
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper
from .problem.client import AsyncProblemClient
from .v_3.client import AsyncV3Client


class V2Client:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.problem = ProblemClient(client_wrapper=self._client_wrapper)
        self.v_3 = V3Client(client_wrapper=self._client_wrapper)

    def test(self, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.test()
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncV2Client:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.problem = AsyncProblemClient(client_wrapper=self._client_wrapper)
        self.v_3 = AsyncV3Client(client_wrapper=self._client_wrapper)

    async def test(self, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.v_2.test()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
