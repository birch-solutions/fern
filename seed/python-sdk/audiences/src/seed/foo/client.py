# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from .types.importing_type import ImportingType
from .types.optional_string import OptionalString

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class FooClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def find(
        self,
        *,
        optional_string: OptionalString,
        public_property: typing.Optional[str] = OMIT,
        private_property: typing.Optional[int] = OMIT,
        request_options: typing.Optional[RequestOptions] = None
    ) -> ImportingType:
        """
        Parameters
        ----------
        optional_string : OptionalString

        public_property : typing.Optional[str]

        private_property : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ImportingType

        Examples
        --------
        from seed.client import SeedAudiences

        client = SeedAudiences(
            base_url="https://yourhost.com/path/to/api",
        )
        client.foo.find(
            optional_string="string",
            public_property="string",
            private_property=1,
        )
        """
        _request: typing.Dict[str, typing.Any] = {}
        if public_property is not OMIT:
            _request["publicProperty"] = public_property
        if private_property is not OMIT:
            _request["privateProperty"] = private_property
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            url=self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "optionalString": optional_string,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            json=jsonable_encoder(_request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(_request),
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
            return pydantic_v1.parse_obj_as(ImportingType, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncFooClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def find(
        self,
        *,
        optional_string: OptionalString,
        public_property: typing.Optional[str] = OMIT,
        private_property: typing.Optional[int] = OMIT,
        request_options: typing.Optional[RequestOptions] = None
    ) -> ImportingType:
        """
        Parameters
        ----------
        optional_string : OptionalString

        public_property : typing.Optional[str]

        private_property : typing.Optional[int]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ImportingType

        Examples
        --------
        from seed.client import AsyncSeedAudiences

        client = AsyncSeedAudiences(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.foo.find(
            optional_string="string",
            public_property="string",
            private_property=1,
        )
        """
        _request: typing.Dict[str, typing.Any] = {}
        if public_property is not OMIT:
            _request["publicProperty"] = public_property
        if private_property is not OMIT:
            _request["privateProperty"] = private_property
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "optionalString": optional_string,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            json=jsonable_encoder(_request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(_request),
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
            return pydantic_v1.parse_obj_as(ImportingType, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
