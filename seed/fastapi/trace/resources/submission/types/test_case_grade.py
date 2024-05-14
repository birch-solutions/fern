# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import deep_union_pydantic_dicts, pydantic_v1
from .test_case_hidden_grade import TestCaseHiddenGrade
from .test_case_non_hidden_grade import TestCaseNonHiddenGrade

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def hidden(self, value: TestCaseHiddenGrade) -> TestCaseGrade:
        return TestCaseGrade(__root__=_TestCaseGrade.Hidden(**value.dict(exclude_unset=True), type="hidden"))

    def non_hidden(self, value: TestCaseNonHiddenGrade) -> TestCaseGrade:
        return TestCaseGrade(__root__=_TestCaseGrade.NonHidden(**value.dict(exclude_unset=True), type="nonHidden"))


class TestCaseGrade(pydantic_v1.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden]:
        return self.__root__

    def visit(
        self,
        hidden: typing.Callable[[TestCaseHiddenGrade], T_Result],
        non_hidden: typing.Callable[[TestCaseNonHiddenGrade], T_Result],
    ) -> T_Result:
        if self.__root__.type == "hidden":
            return hidden(TestCaseHiddenGrade(**self.__root__.dict(exclude_unset=True, exclude={"type"})))
        if self.__root__.type == "nonHidden":
            return non_hidden(TestCaseNonHiddenGrade(**self.__root__.dict(exclude_unset=True, exclude={"type"})))

    __root__: typing_extensions.Annotated[
        typing.Union[_TestCaseGrade.Hidden, _TestCaseGrade.NonHidden], pydantic_v1.Field(discriminator="type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _TestCaseGrade:
    class Hidden(TestCaseHiddenGrade):
        type: typing.Literal["hidden"] = "hidden"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class NonHidden(TestCaseNonHiddenGrade):
        type: typing.Literal["nonHidden"] = "nonHidden"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


TestCaseGrade.update_forward_refs()
