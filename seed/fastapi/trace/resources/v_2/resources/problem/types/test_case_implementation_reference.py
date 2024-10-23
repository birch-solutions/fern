# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .test_case_template_id import TestCaseTemplateId
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from .test_case_implementation import TestCaseImplementation
from ......core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import UniversalBaseModel
from ......core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def template_id(self, value: TestCaseTemplateId) -> TestCaseImplementationReference:
        if IS_PYDANTIC_V2:
            return TestCaseImplementationReference(
                root=_TestCaseImplementationReference.TemplateId(
                    type="templateId", value=value
                )
            )  # type: ignore
        else:
            return TestCaseImplementationReference(
                __root__=_TestCaseImplementationReference.TemplateId(
                    type="templateId", value=value
                )
            )  # type: ignore

    def implementation(
        self, value: TestCaseImplementation
    ) -> TestCaseImplementationReference:
        if IS_PYDANTIC_V2:
            return TestCaseImplementationReference(
                root=_TestCaseImplementationReference.Implementation(
                    **value.dict(exclude_unset=True), type="implementation"
                )
            )  # type: ignore
        else:
            return TestCaseImplementationReference(
                __root__=_TestCaseImplementationReference.Implementation(
                    **value.dict(exclude_unset=True), type="implementation"
                )
            )  # type: ignore


class TestCaseImplementationReference(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _TestCaseImplementationReference.TemplateId,
                _TestCaseImplementationReference.Implementation,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestCaseImplementationReference.TemplateId,
            _TestCaseImplementationReference.Implementation,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _TestCaseImplementationReference.TemplateId,
                _TestCaseImplementationReference.Implementation,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestCaseImplementationReference.TemplateId,
            _TestCaseImplementationReference.Implementation,
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        template_id: typing.Callable[[TestCaseTemplateId], T_Result],
        implementation: typing.Callable[[TestCaseImplementation], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "templateId":
            return template_id(unioned_value.value)
        if unioned_value.type == "implementation":
            return implementation(
                TestCaseImplementation(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )


class _TestCaseImplementationReference:
    class TemplateId(UniversalBaseModel):
        type: typing.Literal["templateId"] = "templateId"
        value: TestCaseTemplateId

    class Implementation(TestCaseImplementation):
        type: typing.Literal["implementation"] = "implementation"


update_forward_refs(TestCaseImplementationReference)
