# This file was auto-generated by Fern from our API Definition.

import abc
import functools
import inspect
import logging
import typing

import fastapi

from ....core.abstract_fern_service import AbstractFernService
from ....core.exceptions.fern_http_exception import FernHTTPException
from ....core.route_args import get_route_args
from ..types.create_options_response import CreateOptionsResponse
from ..types.options import Options
from ..types.undiscriminated_options import UndiscriminatedOptions
from .create_options_request import CreateOptionsRequest
from .get_options_request import GetOptionsRequest
from .get_undiscriminated_options_request import GetUndiscriminatedOptionsRequest


class AbstractLiteralService(AbstractFernService):
    """
    AbstractLiteralService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def create_options(self, *, body: CreateOptionsRequest) -> CreateOptionsResponse:
        ...

    @abc.abstractmethod
    def get_options(self, *, body: GetOptionsRequest) -> Options:
        ...

    @abc.abstractmethod
    def get_undiscriminated_options(self, *, body: GetUndiscriminatedOptionsRequest) -> UndiscriminatedOptions:
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_create_options(router=router)
        cls.__init_get_options(router=router)
        cls.__init_get_undiscriminated_options(router=router)

    @classmethod
    def __init_create_options(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.create_options)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.create_options, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.create_options)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> CreateOptionsResponse:
            try:
                return cls.create_options(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'create_options' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.create_options.__globals__)

        router.post(
            path="/options",
            response_model=CreateOptionsResponse,
            description=AbstractLiteralService.create_options.__doc__,
            **get_route_args(cls.create_options, default_tag="literal"),
        )(wrapper)

    @classmethod
    def __init_get_options(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_options)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.get_options, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.get_options)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> Options:
            try:
                return cls.get_options(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_options' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_options.__globals__)

        router.post(
            path="/options",
            response_model=Options,
            description=AbstractLiteralService.get_options.__doc__,
            **get_route_args(cls.get_options, default_tag="literal"),
        )(wrapper)

    @classmethod
    def __init_get_undiscriminated_options(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_undiscriminated_options)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.get_undiscriminated_options, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.get_undiscriminated_options)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> UndiscriminatedOptions:
            try:
                return cls.get_undiscriminated_options(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_undiscriminated_options' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_undiscriminated_options.__globals__)

        router.post(
            path="/options",
            response_model=UndiscriminatedOptions,
            description=AbstractLiteralService.get_undiscriminated_options.__doc__,
            **get_route_args(cls.get_undiscriminated_options, default_tag="literal"),
        )(wrapper)
