# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import urllib.parse
import uuid
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.datetime_utils import serialize_datetime
from ...core.jsonable_encoder import jsonable_encoder
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions
from .types.user import User

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_username(
        self,
        *,
        limit: int,
        id: uuid.UUID,
        date: dt.date,
        deadline: dt.datetime,
        bytes: str,
        optional_string: typing.Optional[str] = None,
        filter: typing.Union[str, typing.List[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters:
            - limit: int.

            - id: uuid.UUID.

            - date: dt.date.

            - deadline: dt.datetime.

            - bytes: str.

            - optional_string: typing.Optional[str].

            - filter: typing.Union[str, typing.List[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "user"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "id": jsonable_encoder(id),
                        "date": str(date),
                        "deadline": serialize_datetime(deadline),
                        "bytes": jsonable_encoder(bytes),
                        "optionalString": optional_string,
                        "filter": filter,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(User, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_username(
        self,
        *,
        limit: int,
        id: uuid.UUID,
        date: dt.date,
        deadline: dt.datetime,
        bytes: str,
        optional_string: typing.Optional[str] = None,
        filter: typing.Union[str, typing.List[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters:
            - limit: int.

            - id: uuid.UUID.

            - date: dt.date.

            - deadline: dt.datetime.

            - bytes: str.

            - optional_string: typing.Optional[str].

            - filter: typing.Union[str, typing.List[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "user"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "id": jsonable_encoder(id),
                        "date": str(date),
                        "deadline": serialize_datetime(deadline),
                        "bytes": jsonable_encoder(bytes),
                        "optionalString": optional_string,
                        "filter": filter,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(User, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
