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


class AbstractOptionalService(AbstractFernService):
    """
    AbstractOptionalService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def send_optional_body(self, *, body: typing.Optional[typing.Dict[str, typing.Any]] = None) -> str:
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_send_optional_body(router=router)

    @classmethod
    def __init_send_optional_body(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.send_optional_body)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.send_optional_body, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.send_optional_body)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.send_optional_body(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'send_optional_body' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.send_optional_body.__globals__)

        router.post(
            path="//send-optional-body",
            response_model=str,
            description=AbstractOptionalService.send_optional_body.__doc__,
            **get_route_args(cls.send_optional_body, default_tag="optional"),
        )(wrapper)
