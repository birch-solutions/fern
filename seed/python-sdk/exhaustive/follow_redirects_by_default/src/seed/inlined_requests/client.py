# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from ..general_errors.errors.bad_request_body import BadRequestBody
from ..general_errors.types.bad_object_request_info import BadObjectRequestInfo
from ..types.object.types.object_with_optional_field import ObjectWithOptionalField

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class InlinedRequestsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post_with_object_bodyand_response(
        self,
        *,
        string: str,
        integer: int,
        nested_object: ObjectWithOptionalField,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ObjectWithOptionalField:
        """
        POST with custom object in request body, response is an object

        Parameters:
            - string: str.

            - integer: int.

            - nested_object: ObjectWithOptionalField.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        import datetime
        import uuid

        from seed.client import SeedExhaustive
        from seed.types import ObjectWithOptionalField

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.inlined_requests.post_with_object_bodyand_response(
            string="string",
            integer=1,
            nested_object=ObjectWithOptionalField(
                string="string",
                integer=1,
                long_=1000000,
                double=1.1,
                bool_=True,
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                uuid_=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                base_64="SGVsbG8gd29ybGQh",
                list_=["string"],
                set_={"string"},
                map_={1: "string"},
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "req-bodies/object"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder({"string": string, "integer": integer, "NestedObject": nested_object})
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder({"string": string, "integer": integer, "NestedObject": nested_object}),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
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
            return pydantic_v1.parse_obj_as(ObjectWithOptionalField, _response.json())  # type: ignore
        if _response.status_code == 400:
            raise BadRequestBody(pydantic_v1.parse_obj_as(BadObjectRequestInfo, _response.json()))  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncInlinedRequestsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def post_with_object_bodyand_response(
        self,
        *,
        string: str,
        integer: int,
        nested_object: ObjectWithOptionalField,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ObjectWithOptionalField:
        """
        POST with custom object in request body, response is an object

        Parameters:
            - string: str.

            - integer: int.

            - nested_object: ObjectWithOptionalField.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        import datetime
        import uuid

        from seed.client import AsyncSeedExhaustive
        from seed.types import ObjectWithOptionalField

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.inlined_requests.post_with_object_bodyand_response(
            string="string",
            integer=1,
            nested_object=ObjectWithOptionalField(
                string="string",
                integer=1,
                long_=1000000,
                double=1.1,
                bool_=True,
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                uuid_=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                base_64="SGVsbG8gd29ybGQh",
                list_=["string"],
                set_={"string"},
                map_={1: "string"},
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "req-bodies/object"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder({"string": string, "integer": integer, "NestedObject": nested_object})
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder({"string": string, "integer": integer, "NestedObject": nested_object}),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
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
            return pydantic_v1.parse_obj_as(ObjectWithOptionalField, _response.json())  # type: ignore
        if _response.status_code == 400:
            raise BadRequestBody(pydantic_v1.parse_obj_as(BadObjectRequestInfo, _response.json()))  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
