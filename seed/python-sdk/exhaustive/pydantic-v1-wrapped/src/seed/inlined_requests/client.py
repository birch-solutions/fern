# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..types.object.types.object_with_optional_field import ObjectWithOptionalField
from ..core.request_options import RequestOptions
from ..core.serialization import convert_and_respect_annotation_metadata
from ..core.pydantic_utilities import parse_obj_as
from ..general_errors.errors.bad_request_body import BadRequestBody
from ..general_errors.types.bad_object_request_info import BadObjectRequestInfo
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

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

        Parameters
        ----------
        string : str

        integer : int

        nested_object : ObjectWithOptionalField

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithOptionalField

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExhaustive
        from seed.types.object import ObjectWithOptionalField

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
                bigint="123456789123456789",
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "req-bodies/object",
            method="POST",
            json={
                "string": string,
                "integer": integer,
                "NestedObject": convert_and_respect_annotation_metadata(
                    object_=nested_object, annotation=ObjectWithOptionalField
                ),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithOptionalField,
                    parse_obj_as(
                        type_=ObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            if _response.status_code == 400:
                raise BadRequestBody(
                    typing.cast(
                        BadObjectRequestInfo,
                        parse_obj_as(
                            type_=BadObjectRequestInfo,  # type: ignore
                            object_=_response.json(),
                        ),
                    )
                )
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

        Parameters
        ----------
        string : str

        integer : int

        nested_object : ObjectWithOptionalField

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithOptionalField

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExhaustive
        from seed.types.object import ObjectWithOptionalField

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
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
                    bigint="123456789123456789",
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "req-bodies/object",
            method="POST",
            json={
                "string": string,
                "integer": integer,
                "NestedObject": convert_and_respect_annotation_metadata(
                    object_=nested_object, annotation=ObjectWithOptionalField
                ),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithOptionalField,
                    parse_obj_as(
                        type_=ObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            if _response.status_code == 400:
                raise BadRequestBody(
                    typing.cast(
                        BadObjectRequestInfo,
                        parse_obj_as(
                            type_=BadObjectRequestInfo,  # type: ignore
                            object_=_response.json(),
                        ),
                    )
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
