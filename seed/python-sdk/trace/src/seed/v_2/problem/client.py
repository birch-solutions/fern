# This file was auto-generated by Fern from our API Definition.

from ...core.client_wrapper import SyncClientWrapper
import typing
from ...core.request_options import RequestOptions
from .types.lightweight_problem_info_v_2 import LightweightProblemInfoV2
from json.decoder import JSONDecodeError
from ...core.api_error import ApiError
from ...core.pydantic_utilities import parse_obj_as
from .types.problem_info_v_2 import ProblemInfoV2
from ...commons.types.problem_id import ProblemId
from ...core.client_wrapper import AsyncClientWrapper


class ProblemClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_lightweight_problems(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[LightweightProblemInfoV2]:
        """
        Returns lightweight versions of all problems

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[LightweightProblemInfoV2]

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.problem.get_lightweight_problems()
        """
        _response = self._client_wrapper.httpx_client.request(
            "problems-v2/lightweight-problem-info",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                typing.List[LightweightProblemInfoV2],
                parse_obj_as(
                    type_=typing.List[LightweightProblemInfoV2],  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_problems(self, *, request_options: typing.Optional[RequestOptions] = None) -> typing.List[ProblemInfoV2]:
        """
        Returns latest versions of all problems

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[ProblemInfoV2]

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.problem.get_problems()
        """
        _response = self._client_wrapper.httpx_client.request(
            "problems-v2/problem-info",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                typing.List[ProblemInfoV2],
                parse_obj_as(
                    type_=typing.List[ProblemInfoV2],  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_latest_problem(
        self, problem_id: ProblemId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ProblemInfoV2:
        """
        Returns latest version of a problem

        Parameters
        ----------
        problem_id : ProblemId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ProblemInfoV2

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.problem.get_latest_problem(
            problem_id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"problems-v2/problem-info/{problem_id}",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                ProblemInfoV2,
                parse_obj_as(
                    type_=ProblemInfoV2,  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_problem_version(
        self, problem_id: ProblemId, problem_version: int, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ProblemInfoV2:
        """
        Returns requested version of a problem

        Parameters
        ----------
        problem_id : ProblemId

        problem_version : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ProblemInfoV2

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.v_2.problem.get_problem_version(
            problem_id="string",
            problem_version=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"problems-v2/problem-info/{problem_id}/version/{problem_version}",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                ProblemInfoV2,
                parse_obj_as(
                    type_=ProblemInfoV2,  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncProblemClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_lightweight_problems(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[LightweightProblemInfoV2]:
        """
        Returns lightweight versions of all problems

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[LightweightProblemInfoV2]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.v_2.problem.get_lightweight_problems()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "problems-v2/lightweight-problem-info",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                typing.List[LightweightProblemInfoV2],
                parse_obj_as(
                    type_=typing.List[LightweightProblemInfoV2],  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_problems(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[ProblemInfoV2]:
        """
        Returns latest versions of all problems

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[ProblemInfoV2]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.v_2.problem.get_problems()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "problems-v2/problem-info",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                typing.List[ProblemInfoV2],
                parse_obj_as(
                    type_=typing.List[ProblemInfoV2],  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_latest_problem(
        self, problem_id: ProblemId, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ProblemInfoV2:
        """
        Returns latest version of a problem

        Parameters
        ----------
        problem_id : ProblemId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ProblemInfoV2

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.v_2.problem.get_latest_problem(
                problem_id="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"problems-v2/problem-info/{problem_id}",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                ProblemInfoV2,
                parse_obj_as(
                    type_=ProblemInfoV2,  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_problem_version(
        self, problem_id: ProblemId, problem_version: int, *, request_options: typing.Optional[RequestOptions] = None
    ) -> ProblemInfoV2:
        """
        Returns requested version of a problem

        Parameters
        ----------
        problem_id : ProblemId

        problem_version : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ProblemInfoV2

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.v_2.problem.get_problem_version(
                problem_id="string",
                problem_version=1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"problems-v2/problem-info/{problem_id}/version/{problem_version}",
            method="GET",
            request_options=request_options,
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return typing.cast(
                ProblemInfoV2,
                parse_obj_as(
                    type_=ProblemInfoV2,  # type: ignore
                    object_=_response_json,
                ),
            )
        raise ApiError(status_code=_response.status_code, body=_response_json)
