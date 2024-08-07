# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .types.currency import Currency
from ..core.request_options import RequestOptions
import uuid
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.jsonable_encoder import jsonable_encoder
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class PaymentClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def create(
        self,
        *,
        amount: int,
        currency: Currency,
        idempotency_key: str,
        idempotency_expiration: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> uuid.UUID:
        """
        Parameters
        ----------
        amount : int

        currency : Currency

        idempotency_key : str

        idempotency_expiration : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        uuid.UUID

        Examples
        --------
        from seed import SeedIdempotencyHeaders

        client = SeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.payment.create(
            amount=1,
            currency="USD",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "payment",
            method="POST",
            json={
                "amount": amount,
                "currency": currency,
            },
            headers={
                "Idempotency-Key": str(idempotency_key)
                if idempotency_key is not None
                else None,
                "Idempotency-Expiration": str(idempotency_expiration)
                if idempotency_expiration is not None
                else None,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    uuid.UUID,
                    parse_obj_as(
                        type_=uuid.UUID,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def delete(
        self,
        payment_id: str,
        *,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        payment_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedIdempotencyHeaders

        client = SeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.payment.delete(
            payment_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"payment/{jsonable_encoder(payment_id)}",
            method="DELETE",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncPaymentClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def create(
        self,
        *,
        amount: int,
        currency: Currency,
        idempotency_key: str,
        idempotency_expiration: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> uuid.UUID:
        """
        Parameters
        ----------
        amount : int

        currency : Currency

        idempotency_key : str

        idempotency_expiration : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        uuid.UUID

        Examples
        --------
        import asyncio

        from seed import AsyncSeedIdempotencyHeaders

        client = AsyncSeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.payment.create(
                amount=1,
                currency="USD",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "payment",
            method="POST",
            json={
                "amount": amount,
                "currency": currency,
            },
            headers={
                "Idempotency-Key": str(idempotency_key)
                if idempotency_key is not None
                else None,
                "Idempotency-Expiration": str(idempotency_expiration)
                if idempotency_expiration is not None
                else None,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    uuid.UUID,
                    parse_obj_as(
                        type_=uuid.UUID,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def delete(
        self,
        payment_id: str,
        *,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        payment_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedIdempotencyHeaders

        client = AsyncSeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.payment.delete(
                payment_id="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"payment/{jsonable_encoder(payment_id)}",
            method="DELETE",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
