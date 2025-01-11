# This file was auto-generated by Fern from our API Definition.

from ..core.abstract_fern_service import AbstractFernService
from .post_root_request import PostRootRequest
from ..types.root_type_1 import RootType1
import abc
from .get_discriminated_union_request import GetDiscriminatedUnionRequest
from .get_undiscriminated_union_request import GetUndiscriminatedUnionRequest
import fastapi
import inspect
import typing
from ..core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
from ..core.route_args import get_route_args
import starlette


class AbstractRootService(AbstractFernService):
    """
    AbstractRootService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def get_root(self, *, body: PostRootRequest) -> RootType1: ...

    @abc.abstractmethod
    def get_discriminated_union(
        self, *, body: GetDiscriminatedUnionRequest
    ) -> None: ...

    @abc.abstractmethod
    def get_undiscriminated_union(
        self, *, body: GetUndiscriminatedUnionRequest
    ) -> None: ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_get_root(router=router)
        cls.__init_get_discriminated_union(router=router)
        cls.__init_get_undiscriminated_union(router=router)

    @classmethod
    def __init_get_root(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_root)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_root,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_root)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> RootType1:
            try:
                return cls.get_root(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_root' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_root.__globals__)

        router.post(
            path="/root/root",
            response_model=RootType1,
            description=AbstractRootService.get_root.__doc__,
            **get_route_args(cls.get_root, default_tag=""),
        )(wrapper)

    @classmethod
    def __init_get_discriminated_union(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_discriminated_union)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_discriminated_union,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_discriminated_union)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_discriminated_union(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_discriminated_union' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_discriminated_union.__globals__)

        router.post(
            path="/root/discriminated-union",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractRootService.get_discriminated_union.__doc__,
            **get_route_args(cls.get_discriminated_union, default_tag=""),
        )(wrapper)

    @classmethod
    def __init_get_undiscriminated_union(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_undiscriminated_union)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_undiscriminated_union,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_undiscriminated_union)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.get_undiscriminated_union(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_undiscriminated_union' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_undiscriminated_union.__globals__)

        router.post(
            path="/root/undiscriminated-union",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractRootService.get_undiscriminated_union.__doc__,
            **get_route_args(cls.get_undiscriminated_union, default_tag=""),
        )(wrapper)
