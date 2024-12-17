# This file was auto-generated by Fern from our API Definition.

from ......core.abstract_fern_service import AbstractFernService
from ......security import ApiAuth
import abc
import typing
import fastapi
import inspect
from ......security import FernAuth
from ......core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
from ......core.route_args import get_route_args
import starlette


class AbstractEndpointsParamsService(AbstractFernService):
    """
    AbstractEndpointsParamsService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def get_with_path(self, *, param: str, auth: ApiAuth) -> str:
        """
        GET with path param
        """
        ...

    @abc.abstractmethod
    def get_with_inline_path(self, *, param: str, auth: ApiAuth) -> str:
        """
        GET with path param
        """
        ...

    @abc.abstractmethod
    def get_with_query(self, *, query: str, number: int, auth: ApiAuth) -> None:
        """
        GET with query param
        """
        ...

    @abc.abstractmethod
    def get_with_allow_multiple_query(
        self, *, query: typing.List[str], numer: typing.List[int], auth: ApiAuth
    ) -> None:
        """
        GET with multiple of same query param
        """
        ...

    @abc.abstractmethod
    def get_with_path_and_query(self, *, param: str, query: str, auth: ApiAuth) -> None:
        """
        GET with path and query params
        """
        ...

    @abc.abstractmethod
    def get_with_inline_path_and_query(
        self, *, param: str, query: str, auth: ApiAuth
    ) -> None:
        """
        GET with path and query params
        """
        ...

    @abc.abstractmethod
    def modify_with_path(self, *, body: str, param: str, auth: ApiAuth) -> str:
        """
        PUT to update with path param
        """
        ...

    @abc.abstractmethod
    def modify_with_inline_path(self, *, body: str, param: str, auth: ApiAuth) -> str:
        """
        PUT to update with path param
        """
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_get_with_path(router=router)
        cls.__init_get_with_inline_path(router=router)
        cls.__init_get_with_query(router=router)
        cls.__init_get_with_allow_multiple_query(router=router)
        cls.__init_get_with_path_and_query(router=router)
        cls.__init_get_with_inline_path_and_query(router=router)
        cls.__init_modify_with_path(router=router)
        cls.__init_modify_with_inline_path(router=router)

    @classmethod
    def __init_get_with_path(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_path)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_path,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_path)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.get_with_path(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_path' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_path.__globals__)

        router.get(
            path="/params/path/{param}",
            response_model=str,
            description=AbstractEndpointsParamsService.get_with_path.__doc__,
            **get_route_args(cls.get_with_path, default_tag="endpoints.params"),
        )(wrapper)

    @classmethod
    def __init_get_with_inline_path(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_inline_path)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_inline_path,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_inline_path)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.get_with_inline_path(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_inline_path' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_inline_path.__globals__)

        router.get(
            path="/params/path/{param}",
            response_model=str,
            description=AbstractEndpointsParamsService.get_with_inline_path.__doc__,
            **get_route_args(cls.get_with_inline_path, default_tag="endpoints.params"),
        )(wrapper)

    @classmethod
    def __init_get_with_query(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_query)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "query":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=...))
                )
            elif parameter_name == "number":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=...))
                )
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_query,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_query)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_with_query(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_query' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_query.__globals__)

        router.get(
            path="/params",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractEndpointsParamsService.get_with_query.__doc__,
            **get_route_args(cls.get_with_query, default_tag="endpoints.params"),
        )(wrapper)

    @classmethod
    def __init_get_with_allow_multiple_query(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_allow_multiple_query)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "query":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=[]))
                )
            elif parameter_name == "numer":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=[]))
                )
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_allow_multiple_query,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_allow_multiple_query)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_with_allow_multiple_query(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_allow_multiple_query' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_allow_multiple_query.__globals__)

        router.get(
            path="/params",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractEndpointsParamsService.get_with_allow_multiple_query.__doc__,
            **get_route_args(
                cls.get_with_allow_multiple_query, default_tag="endpoints.params"
            ),
        )(wrapper)

    @classmethod
    def __init_get_with_path_and_query(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_path_and_query)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "query":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=...))
                )
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_path_and_query,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_path_and_query)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_with_path_and_query(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_path_and_query' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_path_and_query.__globals__)

        router.get(
            path="/params/path-query/{param}",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractEndpointsParamsService.get_with_path_and_query.__doc__,
            **get_route_args(
                cls.get_with_path_and_query, default_tag="endpoints.params"
            ),
        )(wrapper)

    @classmethod
    def __init_get_with_inline_path_and_query(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_with_inline_path_and_query)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "query":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=...))
                )
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_with_inline_path_and_query,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_with_inline_path_and_query)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_with_inline_path_and_query(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_with_inline_path_and_query' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_with_inline_path_and_query.__globals__)

        router.get(
            path="/params/path-query/{param}",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractEndpointsParamsService.get_with_inline_path_and_query.__doc__,
            **get_route_args(
                cls.get_with_inline_path_and_query, default_tag="endpoints.params"
            ),
        )(wrapper)

    @classmethod
    def __init_modify_with_path(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.modify_with_path)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.modify_with_path,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.modify_with_path)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.modify_with_path(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'modify_with_path' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.modify_with_path.__globals__)

        router.put(
            path="/params/path/{param}",
            response_model=str,
            description=AbstractEndpointsParamsService.modify_with_path.__doc__,
            **get_route_args(cls.modify_with_path, default_tag="endpoints.params"),
        )(wrapper)

    @classmethod
    def __init_modify_with_inline_path(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.modify_with_inline_path)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(
                    parameter.replace(default=fastapi.Depends(FernAuth))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.modify_with_inline_path,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.modify_with_inline_path)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.modify_with_inline_path(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'modify_with_inline_path' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.modify_with_inline_path.__globals__)

        router.put(
            path="/params/path/{param}",
            response_model=str,
            description=AbstractEndpointsParamsService.modify_with_inline_path.__doc__,
            **get_route_args(
                cls.modify_with_inline_path, default_tag="endpoints.params"
            ),
        )(wrapper)
