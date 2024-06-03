# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.request_options import RequestOptions
from ..types.color_or_operand import ColorOrOperand
from ..types.operand import Operand


class PathParamClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(
        self,
        operand: Operand,
        maybe_operand: typing.Optional[Operand],
        operand_or_color: ColorOrOperand,
        maybe_operand_or_color: typing.Optional[ColorOrOperand],
        *,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        operand : Operand

        maybe_operand : typing.Optional[Operand]

        operand_or_color : ColorOrOperand

        maybe_operand_or_color : typing.Optional[ColorOrOperand]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed.client import SeedEnum

        client = SeedEnum(
            base_url="https://yourhost.com/path/to/api",
        )
        client.path_param.send(
            operand=">",
            maybe_operand="less_than",
            operand_or_color="red",
            maybe_operand_or_color="red",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"path/{jsonable_encoder(operand)}/{jsonable_encoder(maybe_operand)}/{jsonable_encoder(operand_or_color)}/{jsonable_encoder(maybe_operand_or_color)}",
            method="POST",
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncPathParamClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(
        self,
        operand: Operand,
        maybe_operand: typing.Optional[Operand],
        operand_or_color: ColorOrOperand,
        maybe_operand_or_color: typing.Optional[ColorOrOperand],
        *,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        operand : Operand

        maybe_operand : typing.Optional[Operand]

        operand_or_color : ColorOrOperand

        maybe_operand_or_color : typing.Optional[ColorOrOperand]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed.client import AsyncSeedEnum

        client = AsyncSeedEnum(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.path_param.send(
            operand=">",
            maybe_operand="less_than",
            operand_or_color="red",
            maybe_operand_or_color="red",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"path/{jsonable_encoder(operand)}/{jsonable_encoder(maybe_operand)}/{jsonable_encoder(operand_or_color)}/{jsonable_encoder(maybe_operand_or_color)}",
            method="POST",
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
