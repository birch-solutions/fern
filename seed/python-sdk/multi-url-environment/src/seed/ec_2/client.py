# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class Ec2Client:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def boot_instance(self, *, size: str, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        size : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed.client import SeedMultiUrlEnvironment

        client = SeedMultiUrlEnvironment(
            token="YOUR_TOKEN",
        )
        client.ec_2.boot_instance(
            size="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "ec2/boot",
            base_url=self._client_wrapper.get_environment().ec_2,
            method="POST",
            json={"size": size},
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncEc2Client:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def boot_instance(self, *, size: str, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        size : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed.client import AsyncSeedMultiUrlEnvironment

        client = AsyncSeedMultiUrlEnvironment(
            token="YOUR_TOKEN",
        )
        await client.ec_2.boot_instance(
            size="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "ec2/boot",
            base_url=self._client_wrapper.get_environment().ec_2,
            method="POST",
            json={"size": size},
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
