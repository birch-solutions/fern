# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...types.operand import Operand

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class InlinedRequestClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(self, *, value: typing.Optional[Operand] = OMIT) -> None:
        """
        Parameters:
            - value: typing.Optional[Operand].
        ---
        from seed import Operand
        from seed.client import SeedEnum

        client = SeedEnum(base_url="https://yourhost.com/path/to/api", )
        client.inlined_request.send(value=Operand., )
        """
        _request: typing.Dict[str, typing.Any] = {}
        if value is not OMIT:
            _request["value"] = value.value if value is not None else None
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "inlined-request"),
            json=jsonable_encoder(_request),
            headers=self._client_wrapper.get_headers(),
            timeout=60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncInlinedRequestClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(self, *, value: typing.Optional[Operand] = OMIT) -> None:
        """
        Parameters:
            - value: typing.Optional[Operand].
        ---
        from seed import Operand
        from seed.client import AsyncSeedEnum

        client = AsyncSeedEnum(base_url="https://yourhost.com/path/to/api", )
        await client.inlined_request.send(value=Operand., )
        """
        _request: typing.Dict[str, typing.Any] = {}
        if value is not OMIT:
            _request["value"] = value.value if value is not None else None
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "inlined-request"),
            json=jsonable_encoder(_request),
            headers=self._client_wrapper.get_headers(),
            timeout=60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
