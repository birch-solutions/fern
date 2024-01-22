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
from ....security import ApiAuth, FernAuth
from ....types.object.types.nested_object_with_optional_field import NestedObjectWithOptionalField
from ....types.object.types.nested_object_with_required_field import NestedObjectWithRequiredField
from ....types.object.types.object_with_map_of_map import ObjectWithMapOfMap
from ....types.object.types.object_with_optional_field import ObjectWithOptionalField
from ....types.object.types.object_with_required_field import ObjectWithRequiredField


class AbstractEndpointsObjectService(AbstractFernService):
    """
    AbstractEndpointsObjectService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def get_and_return_with_optional_field(
        self, *, body: ObjectWithOptionalField, auth: ApiAuth
    ) -> ObjectWithOptionalField:
        ...

    @abc.abstractmethod
    def get_and_return_with_required_field(
        self, *, body: ObjectWithRequiredField, auth: ApiAuth
    ) -> ObjectWithRequiredField:
        ...

    @abc.abstractmethod
    def get_and_return_with_map_of_map(self, *, body: ObjectWithMapOfMap, auth: ApiAuth) -> ObjectWithMapOfMap:
        ...

    @abc.abstractmethod
    def get_and_return_nested_with_optional_field(
        self, *, body: NestedObjectWithOptionalField, auth: ApiAuth
    ) -> NestedObjectWithOptionalField:
        ...

    @abc.abstractmethod
    def get_and_return_nested_with_required_field(
        self, *, body: NestedObjectWithRequiredField, auth: ApiAuth
    ) -> NestedObjectWithRequiredField:
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_get_and_return_with_optional_field(router=router)
        cls.__init_get_and_return_with_required_field(router=router)
        cls.__init_get_and_return_with_map_of_map(router=router)
        cls.__init_get_and_return_nested_with_optional_field(router=router)
        cls.__init_get_and_return_nested_with_required_field(router=router)

    @classmethod
    def __init_get_and_return_with_optional_field(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_and_return_with_optional_field)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_and_return_with_optional_field,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_and_return_with_optional_field)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithOptionalField:
            try:
                return cls.get_and_return_with_optional_field(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_and_return_with_optional_field' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_and_return_with_optional_field.__globals__)

        router.post(
            path="/object/get-and-return-with-optional-field",
            response_model=ObjectWithOptionalField,
            description=AbstractEndpointsObjectService.get_and_return_with_optional_field.__doc__,
            **get_route_args(cls.get_and_return_with_optional_field, default_tag="endpoints.object"),
        )(wrapper)

    @classmethod
    def __init_get_and_return_with_required_field(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_and_return_with_required_field)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_and_return_with_required_field,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_and_return_with_required_field)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithRequiredField:
            try:
                return cls.get_and_return_with_required_field(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_and_return_with_required_field' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_and_return_with_required_field.__globals__)

        router.post(
            path="/object/get-and-return-with-required-field",
            response_model=ObjectWithRequiredField,
            description=AbstractEndpointsObjectService.get_and_return_with_required_field.__doc__,
            **get_route_args(cls.get_and_return_with_required_field, default_tag="endpoints.object"),
        )(wrapper)

    @classmethod
    def __init_get_and_return_with_map_of_map(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_and_return_with_map_of_map)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_and_return_with_map_of_map, "__signature__", endpoint_function.replace(parameters=new_parameters)
        )

        @functools.wraps(cls.get_and_return_with_map_of_map)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithMapOfMap:
            try:
                return cls.get_and_return_with_map_of_map(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_and_return_with_map_of_map' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_and_return_with_map_of_map.__globals__)

        router.post(
            path="/object/get-and-return-with-map-of-map",
            response_model=ObjectWithMapOfMap,
            description=AbstractEndpointsObjectService.get_and_return_with_map_of_map.__doc__,
            **get_route_args(cls.get_and_return_with_map_of_map, default_tag="endpoints.object"),
        )(wrapper)

    @classmethod
    def __init_get_and_return_nested_with_optional_field(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_and_return_nested_with_optional_field)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_and_return_nested_with_optional_field,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_and_return_nested_with_optional_field)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> NestedObjectWithOptionalField:
            try:
                return cls.get_and_return_nested_with_optional_field(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_and_return_nested_with_optional_field' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_and_return_nested_with_optional_field.__globals__)

        router.post(
            path="/object/get-and-return-nested-with-optional-field",
            response_model=NestedObjectWithOptionalField,
            description=AbstractEndpointsObjectService.get_and_return_nested_with_optional_field.__doc__,
            **get_route_args(cls.get_and_return_nested_with_optional_field, default_tag="endpoints.object"),
        )(wrapper)

    @classmethod
    def __init_get_and_return_nested_with_required_field(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_and_return_nested_with_required_field)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_and_return_nested_with_required_field,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_and_return_nested_with_required_field)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> NestedObjectWithRequiredField:
            try:
                return cls.get_and_return_nested_with_required_field(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_and_return_nested_with_required_field' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_and_return_nested_with_required_field.__globals__)

        router.post(
            path="/object/get-and-return-nested-with-required-field",
            response_model=NestedObjectWithRequiredField,
            description=AbstractEndpointsObjectService.get_and_return_nested_with_required_field.__doc__,
            **get_route_args(cls.get_and_return_nested_with_required_field, default_tag="endpoints.object"),
        )(wrapper)
