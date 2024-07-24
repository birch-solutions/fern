# This file was auto-generated by Fern from our API Definition.

from ......core.abstract_fern_service import AbstractFernService
from ......security import ApiAuth
import abc
from .....types.resources.object.types.object_with_required_field import ObjectWithRequiredField
from .....types.resources.object.types.object_with_optional_field import ObjectWithOptionalField
import fastapi
import inspect
import typing
from ......security import FernAuth
from ......core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
from ......core.route_args import get_route_args
class AbstractEndpointsHttpMethodsService(AbstractFernService):
    """
    AbstractEndpointsHttpMethodsService is an abstract class containing the methods that you should implement.
    
    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """
    
    @abc.abstractmethod
    def test_get(self, *, id: str, auth: ApiAuth) -> str:
        ...
    
    @abc.abstractmethod
    def test_post(self, *, body: ObjectWithRequiredField, auth: ApiAuth) -> ObjectWithOptionalField:
        ...
    
    @abc.abstractmethod
    def test_put(self, *, body: ObjectWithRequiredField, id: str, auth: ApiAuth) -> ObjectWithOptionalField:
        ...
    
    @abc.abstractmethod
    def test_patch(self, *, body: ObjectWithOptionalField, id: str, auth: ApiAuth) -> ObjectWithOptionalField:
        ...
    
    @abc.abstractmethod
    def test_delete(self, *, id: str, auth: ApiAuth) -> bool:
        ...
    
    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """
    
    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_test_get(router=router)
        cls.__init_test_post(router=router)
        cls.__init_test_put(router=router)
        cls.__init_test_patch(router=router)
        cls.__init_test_delete(router=router)
    
    @classmethod
    def __init_test_get(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.test_get)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "id":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(cls.test_get, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.test_get)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.test_get(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'test_get' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.test_get.__globals__)
        
        router.get(
            path="/http-methods/{id}",
            response_model=str,
            description=AbstractEndpointsHttpMethodsService.test_get.__doc__,
            **get_route_args(cls.test_get, default_tag="endpoints.http_methods"),
        )(wrapper)
    
    @classmethod
    def __init_test_post(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.test_post)
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
        setattr(cls.test_post, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.test_post)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithOptionalField:
            try:
                return cls.test_post(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'test_post' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.test_post.__globals__)
        
        router.post(
            path="/http-methods",
            response_model=ObjectWithOptionalField,
            description=AbstractEndpointsHttpMethodsService.test_post.__doc__,
            **get_route_args(cls.test_post, default_tag="endpoints.http_methods"),
        )(wrapper)
    
    @classmethod
    def __init_test_put(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.test_put)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "id":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(cls.test_put, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.test_put)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithOptionalField:
            try:
                return cls.test_put(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'test_put' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.test_put.__globals__)
        
        router.put(
            path="/http-methods/{id}",
            response_model=ObjectWithOptionalField,
            description=AbstractEndpointsHttpMethodsService.test_put.__doc__,
            **get_route_args(cls.test_put, default_tag="endpoints.http_methods"),
        )(wrapper)
    
    @classmethod
    def __init_test_patch(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.test_patch)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "id":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(cls.test_patch, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.test_patch)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithOptionalField:
            try:
                return cls.test_patch(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'test_patch' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.test_patch.__globals__)
        
        router.patch(
            path="/http-methods/{id}",
            response_model=ObjectWithOptionalField,
            description=AbstractEndpointsHttpMethodsService.test_patch.__doc__,
            **get_route_args(cls.test_patch, default_tag="endpoints.http_methods"),
        )(wrapper)
    
    @classmethod
    def __init_test_delete(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.test_delete)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "id":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            elif parameter_name == "auth":
                new_parameters.append(parameter.replace(default=fastapi.Depends(FernAuth)))
            else:
                new_parameters.append(parameter)
        setattr(cls.test_delete, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.test_delete)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> bool:
            try:
                return cls.test_delete(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'test_delete' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.test_delete.__globals__)
        
        router.delete(
            path="/http-methods/{id}",
            response_model=bool,
            description=AbstractEndpointsHttpMethodsService.test_delete.__doc__,
            **get_route_args(cls.test_delete, default_tag="endpoints.http_methods"),
        )(wrapper)
