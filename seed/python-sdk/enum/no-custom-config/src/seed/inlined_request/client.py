# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions
from ..types.color_or_operand import ColorOrOperand
from ..types.operand import Operand

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class InlinedRequestClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(
        self,
        *,
        operand: Operand,
        operand_or_color: ColorOrOperand,
        maybe_operand: typing.Optional[Operand] = OMIT,
        maybe_operand_or_color: typing.Optional[ColorOrOperand] = OMIT,
        request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        operand : Operand

        operand_or_color : ColorOrOperand

        maybe_operand : typing.Optional[Operand]

        maybe_operand_or_color : typing.Optional[ColorOrOperand]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedEnum

        client = SeedEnum(
            base_url="https://yourhost.com/path/to/api",
        )
        client.inlined_request.send(
            operand=">",
            operand_or_color="red",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "inlined",
            method="POST",
            json={
                "operand": operand,
                "maybeOperand": maybe_operand,
                "operandOrColor": operand_or_color,
                "maybeOperandOrColor": maybe_operand_or_color,
            },
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


class AsyncInlinedRequestClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(
        self,
        *,
        operand: Operand,
        operand_or_color: ColorOrOperand,
        maybe_operand: typing.Optional[Operand] = OMIT,
        maybe_operand_or_color: typing.Optional[ColorOrOperand] = OMIT,
        request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        operand : Operand

        operand_or_color : ColorOrOperand

        maybe_operand : typing.Optional[Operand]

        maybe_operand_or_color : typing.Optional[ColorOrOperand]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedEnum

        client = AsyncSeedEnum(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.inlined_request.send(
                operand=">",
                operand_or_color="red",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "inlined",
            method="POST",
            json={
                "operand": operand,
                "maybeOperand": maybe_operand,
                "operandOrColor": operand_or_color,
                "maybeOperandOrColor": maybe_operand_or_color,
            },
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
