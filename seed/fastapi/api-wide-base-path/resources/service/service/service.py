# This file was auto-generated by Fern from our API Definition.

import abc
import functools
import inspect
import logging
import typing

import fastapi
import starlette

from ....core.abstract_fern_service import AbstractFernService
from ....core.exceptions.fern_http_exception import FernHTTPException
from ....core.route_args import get_route_args


class AbstractServiceService(AbstractFernService):
    """
    AbstractServiceService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def post(self, *, service_param: str, endpoint_param: int) -> None:
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_post(router=router)

    @classmethod
    def __init_post(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.post)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "service_param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "endpoint_param":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.post, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.post)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.post(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'post' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.post.__globals__)

        router.post(
            path="//test/{path_param}/{service_param}/{endpoint_param}",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.post.__doc__,
            **get_route_args(cls.post, default_tag="service"),
        )(wrapper)
