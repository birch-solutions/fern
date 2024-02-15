# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ......core.datetime_utils import serialize_datetime
from .test_case_implementation import TestCaseImplementation
from .test_case_template_id import TestCaseTemplateId

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def template_id(self, value: TestCaseTemplateId) -> TestCaseImplementationReference:
        return TestCaseImplementationReference(
            __root__=_TestCaseImplementationReference.TemplateId(type="templateId", value=value)
        )

    def implementation(self, value: TestCaseImplementation) -> TestCaseImplementationReference:
        return TestCaseImplementationReference(
            __root__=_TestCaseImplementationReference.Implementation(
                **value.dict(exclude_unset=True), type="implementation"
            )
        )


class TestCaseImplementationReference(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(
        self,
    ) -> typing.Union[_TestCaseImplementationReference.TemplateId, _TestCaseImplementationReference.Implementation]:
        return self.__root__

    def visit(
        self,
        template_id: typing.Callable[[TestCaseTemplateId], T_Result],
        implementation: typing.Callable[[TestCaseImplementation], T_Result],
    ) -> T_Result:
        if self.__root__.type == "templateId":
            return template_id(self.__root__.value)
        if self.__root__.type == "implementation":
            return implementation(TestCaseImplementation(**self.__root__.dict(exclude_unset=True, exclude={"type"})))

    __root__: typing.Annotated[
        typing.Union[_TestCaseImplementationReference.TemplateId, _TestCaseImplementationReference.Implementation],
        pydantic.Field(discriminator="type"),
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _TestCaseImplementationReference:
    class TemplateId(pydantic.BaseModel):
        type: typing.Literal["templateId"]
        value: TestCaseTemplateId

    class Implementation(TestCaseImplementation):
        type: typing.Literal["implementation"]

        class Config:
            allow_population_by_field_name = True


TestCaseImplementationReference.update_forward_refs()
