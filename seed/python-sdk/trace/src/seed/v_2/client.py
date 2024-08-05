# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from .problem.client import AsyncProblemClient, ProblemClient
from .v_3.client import AsyncV3Client, V3Client


class V2Client:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.problem = ProblemClient(client_wrapper=self._client_wrapper)
        self.v_3 = V3Client(client_wrapper=self._client_wrapper)

    def test(self, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters:
            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.test()
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters")
                if request_options is not None
                else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(
                            request_options.get("additional_headers", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None
            and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries")
            if request_options is not None
            else 0,  # type: ignore
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

    async def test(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters:
            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        await client.v_2.test()
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters")
                if request_options is not None
                else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(
                            request_options.get("additional_headers", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None
            and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries")
            if request_options is not None
            else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
