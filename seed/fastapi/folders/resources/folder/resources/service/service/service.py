# This file was auto-generated by Fern from our API Definition.

import abc
import functools
import inspect
import logging
import typing

import fastapi
import starlette

from ......core.abstract_fern_service import AbstractFernService
from ......core.exceptions.fern_http_exception import FernHTTPException
from ......core.route_args import get_route_args
from ..errors.not_found_error import NotFoundError


class AbstractFolderServiceService(AbstractFernService):
    """
    AbstractFolderServiceService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def endpoint(self) -> None:
        ...

    @abc.abstractmethod
    def unknown_request(self, *, body: typing.Optional[typing.Any] = None) -> None:
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_endpoint(router=router)
        cls.__init_unknown_request(router=router)

    @classmethod
    def __init_endpoint(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.endpoint)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            else:
                new_parameters.append(parameter)
        setattr(cls.endpoint, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.endpoint)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.endpoint(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'endpoint' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.endpoint.__globals__)

        router.get(
            path="/service",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractFolderServiceService.endpoint.__doc__,
            **get_route_args(cls.endpoint, default_tag="folder.service"),
        )(wrapper)

    @classmethod
    def __init_unknown_request(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.unknown_request)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.unknown_request, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.unknown_request)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.unknown_request(*args, **kwargs)
            except NotFoundError as e:
                raise e
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'unknown_request' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.unknown_request.__globals__)

        router.post(
            path="/service",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractFolderServiceService.unknown_request.__doc__,
            **get_route_args(cls.unknown_request, default_tag="folder.service"),
        )(wrapper)
