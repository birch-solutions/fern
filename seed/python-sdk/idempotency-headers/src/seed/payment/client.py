# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
import uuid
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from .types.currency import Currency

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
        from seed.client import SeedIdempotencyHeaders

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
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "payment"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder({"amount": amount, "currency": currency})
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder({"amount": amount, "currency": currency}),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "Idempotency-Key": str(idempotency_key) if idempotency_key is not None else None,
                        "Idempotency-Expiration": str(idempotency_expiration)
                        if idempotency_expiration is not None
                        else None,
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(uuid.UUID, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def delete(self, payment_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
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
        from seed.client import SeedIdempotencyHeaders

        client = SeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.payment.delete(
            payment_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="DELETE",
            url=urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"payment/{jsonable_encoder(payment_id)}"
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
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
        from seed.client import AsyncSeedIdempotencyHeaders

        client = AsyncSeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.payment.create(
            amount=1,
            currency="USD",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "payment"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder({"amount": amount, "currency": currency})
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder({"amount": amount, "currency": currency}),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "Idempotency-Key": str(idempotency_key) if idempotency_key is not None else None,
                        "Idempotency-Expiration": str(idempotency_expiration)
                        if idempotency_expiration is not None
                        else None,
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(uuid.UUID, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def delete(self, payment_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
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
        from seed.client import AsyncSeedIdempotencyHeaders

        client = AsyncSeedIdempotencyHeaders(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.payment.delete(
            payment_id="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="DELETE",
            url=urllib.parse.urljoin(
                f"{self._client_wrapper.get_base_url()}/", f"payment/{jsonable_encoder(payment_id)}"
            ),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
