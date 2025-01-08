# This file was auto-generated by Fern from our API Definition.

import typing
import httpx
from .core.client_wrapper import SyncClientWrapper
from .types.request_type_inline_type_1 import RequestTypeInlineType1
from .core.request_options import RequestOptions
from .types.root_type_1 import RootType1
from .core.serialization import convert_and_respect_annotation_metadata
from .core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from .core.api_error import ApiError
from .types.discriminated_union_1 import DiscriminatedUnion1
from .types.undiscriminated_union_1 import UndiscriminatedUnion1
from .core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class SeedObject:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import SeedObject

    client = SeedObject(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )

    def get_root(
        self, *, bar: RequestTypeInlineType1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> RootType1:
        """
        Parameters
        ----------
        bar : RequestTypeInlineType1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        RootType1

        Examples
        --------
        from seed import RequestTypeInlineType1, SeedObject

        client = SeedObject(
            base_url="https://yourhost.com/path/to/api",
        )
        client.get_root(
            bar=RequestTypeInlineType1(
                foo="foo",
            ),
            foo="foo",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "root/root",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=RequestTypeInlineType1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    RootType1,
                    parse_obj_as(
                        type_=RootType1,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_discriminated_union(
        self, *, bar: DiscriminatedUnion1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        bar : DiscriminatedUnion1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import (
            DiscriminatedUnion1_Type1,
            DiscriminatedUnion1InlineType1InlineType1,
            ReferenceType,
            SeedObject,
        )

        client = SeedObject(
            base_url="https://yourhost.com/path/to/api",
        )
        client.get_discriminated_union(
            bar=DiscriminatedUnion1_Type1(
                foo="foo",
                bar=DiscriminatedUnion1InlineType1InlineType1(
                    foo="foo",
                    ref=ReferenceType(
                        foo="foo",
                    ),
                ),
                ref=ReferenceType(
                    foo="foo",
                ),
            ),
            foo="foo",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "root/discriminated-union",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=DiscriminatedUnion1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
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

    def get_undiscriminated_union(
        self, *, bar: UndiscriminatedUnion1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        bar : UndiscriminatedUnion1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import (
            ReferenceType,
            SeedObject,
            UndiscriminatedUnion1InlineType1,
            UndiscriminatedUnion1InlineType1InlineType1,
        )

        client = SeedObject(
            base_url="https://yourhost.com/path/to/api",
        )
        client.get_undiscriminated_union(
            bar=UndiscriminatedUnion1InlineType1(
                foo="foo",
                bar=UndiscriminatedUnion1InlineType1InlineType1(
                    foo="foo",
                    ref=ReferenceType(
                        foo="foo",
                    ),
                ),
                ref=ReferenceType(
                    foo="foo",
                ),
            ),
            foo="foo",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "root/undiscriminated-union",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=UndiscriminatedUnion1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
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


class AsyncSeedObject:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import AsyncSeedObject

    client = AsyncSeedObject(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )

    async def get_root(
        self, *, bar: RequestTypeInlineType1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> RootType1:
        """
        Parameters
        ----------
        bar : RequestTypeInlineType1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        RootType1

        Examples
        --------
        import asyncio

        from seed import AsyncSeedObject, RequestTypeInlineType1

        client = AsyncSeedObject(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.get_root(
                bar=RequestTypeInlineType1(
                    foo="foo",
                ),
                foo="foo",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "root/root",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=RequestTypeInlineType1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    RootType1,
                    parse_obj_as(
                        type_=RootType1,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_discriminated_union(
        self, *, bar: DiscriminatedUnion1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        bar : DiscriminatedUnion1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import (
            AsyncSeedObject,
            DiscriminatedUnion1_Type1,
            DiscriminatedUnion1InlineType1InlineType1,
            ReferenceType,
        )

        client = AsyncSeedObject(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.get_discriminated_union(
                bar=DiscriminatedUnion1_Type1(
                    foo="foo",
                    bar=DiscriminatedUnion1InlineType1InlineType1(
                        foo="foo",
                        ref=ReferenceType(
                            foo="foo",
                        ),
                    ),
                    ref=ReferenceType(
                        foo="foo",
                    ),
                ),
                foo="foo",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "root/discriminated-union",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=DiscriminatedUnion1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
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

    async def get_undiscriminated_union(
        self, *, bar: UndiscriminatedUnion1, foo: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        bar : UndiscriminatedUnion1

        foo : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import (
            AsyncSeedObject,
            ReferenceType,
            UndiscriminatedUnion1InlineType1,
            UndiscriminatedUnion1InlineType1InlineType1,
        )

        client = AsyncSeedObject(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.get_undiscriminated_union(
                bar=UndiscriminatedUnion1InlineType1(
                    foo="foo",
                    bar=UndiscriminatedUnion1InlineType1InlineType1(
                        foo="foo",
                        ref=ReferenceType(
                            foo="foo",
                        ),
                    ),
                    ref=ReferenceType(
                        foo="foo",
                    ),
                ),
                foo="foo",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "root/undiscriminated-union",
            method="POST",
            json={
                "bar": convert_and_respect_annotation_metadata(
                    object_=bar, annotation=UndiscriminatedUnion1, direction="write"
                ),
                "foo": foo,
            },
            headers={
                "content-type": "application/json",
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
