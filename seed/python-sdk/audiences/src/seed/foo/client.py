# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .types.optional_string import OptionalString
from ..core.request_options import RequestOptions
from .types.importing_type import ImportingType
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

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
        request_options: typing.Optional[RequestOptions] = None,
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
        from seed import SeedAudiences
        from seed.environment import SeedAudiencesEnvironment

        client = SeedAudiences(
            environment=SeedAudiencesEnvironment.ENVIRONMENT_A,
        )
        client.foo.find(
            optional_string="optionalString",
            public_property="publicProperty",
            private_property=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            params={
                "optionalString": optional_string,
            },
            json={
                "publicProperty": public_property,
                "privateProperty": private_property,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ImportingType,
                    parse_obj_as(
                        type_=ImportingType,  # type: ignore
                        object_=_response.json(),
                    ),
                )
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
        request_options: typing.Optional[RequestOptions] = None,
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
        import asyncio

        from seed import AsyncSeedAudiences
        from seed.environment import SeedAudiencesEnvironment

        client = AsyncSeedAudiences(
            environment=SeedAudiencesEnvironment.ENVIRONMENT_A,
        )


        async def main() -> None:
            await client.foo.find(
                optional_string="optionalString",
                public_property="publicProperty",
                private_property=1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            params={
                "optionalString": optional_string,
            },
            json={
                "publicProperty": public_property,
                "privateProperty": private_property,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ImportingType,
                    parse_obj_as(
                        type_=ImportingType,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
