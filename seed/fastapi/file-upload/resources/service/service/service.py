# This file was auto-generated by Fern from our API Definition.

from ....core.abstract_fern_service import AbstractFernService
import typing
import fastapi
from ..types.my_object import MyObject
from ..types.object_type import ObjectType
from ..types.id import Id
import abc
import inspect
import typing_extensions
from ....core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
import starlette
from ....core.route_args import get_route_args


class AbstractServiceService(AbstractFernService):
    """
    AbstractServiceService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def post(
        self,
        *,
        maybe_string_param: typing.Optional[str] = None,
        integer_param: int,
        file_param: fastapi.UploadFile,
        file_list_param: typing.List[fastapi.UploadFile],
        maybe_file_param: typing.Union[fastapi.UploadFile, None],
        maybe_file_list_param: typing.Optional[typing.List[fastapi.UploadFile]] = None,
        maybe_integer_param: typing.Optional[int] = None,
        optional_list_of_strings_param: typing.Optional[typing.List[str]] = None,
        list_of_objects_param: typing.List[MyObject],
        optional_metadata_param: typing.Optional[typing.Optional[typing.Any]] = None,
        optional_object_type_param: typing.Optional[ObjectType] = None,
        optional_id_param: typing.Optional[Id] = None,
    ) -> None: ...

    @abc.abstractmethod
    def just_file(self, *, file_param: fastapi.UploadFile) -> None: ...

    @abc.abstractmethod
    def just_file_with_query_params(
        self,
        *,
        file_param: fastapi.UploadFile,
        maybe_string: typing.Optional[str] = None,
        integer: int,
        maybe_integer: typing.Optional[int] = None,
        list_of_strings: typing.List[str],
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
    ) -> None: ...

    @abc.abstractmethod
    def with_content_type(
        self, *, file_param: fastapi.UploadFile, foo_param: str, bar_param: MyObject
    ) -> None: ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_post(router=router)
        cls.__init_just_file(router=router)
        cls.__init_just_file_with_query_params(router=router)
        cls.__init_with_content_type(router=router)

    @classmethod
    def __init_post(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.post)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "maybe_string_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="maybeString"))
                )
            elif parameter_name == "integer_param":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "file_param":
                new_parameters.append(parameter.replace(default=fastapi.UploadFile))
            elif parameter_name == "file_list_param":
                new_parameters.append(
                    parameter.replace(
                        default=typing_extensions.Annotated[
                            typing.List[fastapi.UploadFile],
                            fastapi.File(alias="fileList"),
                        ]
                    )
                )
            elif parameter_name == "maybe_file_param":
                new_parameters.append(
                    parameter.replace(
                        default=typing_extensions.Annotated[
                            typing.Union[fastapi.UploadFile, None],
                            fastapi.File(alias="maybeFile"),
                        ]
                    )
                )
            elif parameter_name == "maybe_file_list_param":
                new_parameters.append(
                    parameter.replace(
                        default=typing_extensions.Annotated[
                            typing.Optional[typing.List[fastapi.UploadFile]],
                            fastapi.File(alias="maybeFileList"),
                        ]
                    )
                )
            elif parameter_name == "maybe_integer_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="maybeInteger"))
                )
            elif parameter_name == "optional_list_of_strings_param":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Body(alias="optionalListOfStrings")
                    )
                )
            elif parameter_name == "list_of_objects_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="listOfObjects"))
                )
            elif parameter_name == "optional_metadata_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="optionalMetadata"))
                )
            elif parameter_name == "optional_object_type_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="optionalObjectType"))
                )
            elif parameter_name == "optional_id_param":
                new_parameters.append(
                    parameter.replace(default=fastapi.Body(alias="optionalId"))
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.post,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

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
            path="/",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.post.__doc__,
            **get_route_args(cls.post, default_tag="service"),
        )(wrapper)

    @classmethod
    def __init_just_file(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.just_file)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "file_param":
                new_parameters.append(parameter.replace(default=fastapi.UploadFile))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.just_file,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.just_file)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.just_file(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'just_file' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.just_file.__globals__)

        router.post(
            path="/just-file",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.just_file.__doc__,
            **get_route_args(cls.just_file, default_tag="service"),
        )(wrapper)

    @classmethod
    def __init_just_file_with_query_params(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.just_file_with_query_params)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "file_param":
                new_parameters.append(parameter.replace(default=fastapi.UploadFile))
            elif parameter_name == "maybe_string":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Query(default=None, alias="maybeString")
                    )
                )
            elif parameter_name == "integer":
                new_parameters.append(
                    parameter.replace(default=fastapi.Query(default=...))
                )
            elif parameter_name == "maybe_integer":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Query(default=None, alias="maybeInteger")
                    )
                )
            elif parameter_name == "list_of_strings":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Query(default=[], alias="listOfStrings")
                    )
                )
            elif parameter_name == "optional_list_of_strings":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Query(
                            default=None, alias="optionalListOfStrings"
                        )
                    )
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.just_file_with_query_params,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.just_file_with_query_params)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.just_file_with_query_params(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'just_file_with_query_params' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.just_file_with_query_params.__globals__)

        router.post(
            path="/just-file-with-query-params",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.just_file_with_query_params.__doc__,
            **get_route_args(cls.just_file_with_query_params, default_tag="service"),
        )(wrapper)

    @classmethod
    def __init_with_content_type(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.with_content_type)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "file_param":
                new_parameters.append(parameter.replace(default=fastapi.UploadFile))
            elif parameter_name == "foo_param":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            elif parameter_name == "bar_param":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(
            cls.with_content_type,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.with_content_type)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.with_content_type(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'with_content_type' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.with_content_type.__globals__)

        router.post(
            path="/with-content-type",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.with_content_type.__doc__,
            **get_route_args(cls.with_content_type, default_tag="service"),
        )(wrapper)
