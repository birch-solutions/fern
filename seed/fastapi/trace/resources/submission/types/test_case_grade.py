# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .test_case_hidden_grade import TestCaseHiddenGrade
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .test_case_non_hidden_grade import TestCaseNonHiddenGrade
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def hidden(self, value: TestCaseHiddenGrade) -> TestCaseGrade:
        if IS_PYDANTIC_V2:
            return TestCaseGrade(
                root=_TestCaseGrade.Hidden(
                    **value.dict(exclude_unset=True), type="hidden"
                )
            )
        else:
            return TestCaseGrade(
                __root__=_TestCaseGrade.Hidden(
                    **value.dict(exclude_unset=True), type="hidden"
                )
            )

    def non_hidden(self, value: TestCaseNonHiddenGrade) -> TestCaseGrade:
        if IS_PYDANTIC_V2:
            return TestCaseGrade(
                root=_TestCaseGrade.NonHidden(
                    **value.dict(exclude_unset=True), type="nonHidden"
                )
            )
        else:
            return TestCaseGrade(
                __root__=_TestCaseGrade.NonHidden(
                    **value.dict(exclude_unset=True), type="nonHidden"
                )
            )


class TestCaseGrade(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden]:
            return self.__root__

    def visit(
        self,
        hidden: typing.Callable[[TestCaseHiddenGrade], T_Result],
        non_hidden: typing.Callable[[TestCaseNonHiddenGrade], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "hidden":
            return hidden(
                TestCaseHiddenGrade(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "nonHidden":
            return non_hidden(
                TestCaseNonHiddenGrade(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )


class _TestCaseGrade:
    class Hidden(TestCaseHiddenGrade):
        type: typing.Literal["hidden"] = "hidden"

    class NonHidden(TestCaseNonHiddenGrade):
        type: typing.Literal["nonHidden"] = "nonHidden"
