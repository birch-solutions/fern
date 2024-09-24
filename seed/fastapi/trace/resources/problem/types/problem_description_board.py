# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ...commons.types.variable_value import VariableValue
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def html(self, value: str) -> ProblemDescriptionBoard:
        if IS_PYDANTIC_V2:
            return ProblemDescriptionBoard(
                root=_ProblemDescriptionBoard.Html(type="html", value=value)
            )  # type: ignore
        else:
            return ProblemDescriptionBoard(
                __root__=_ProblemDescriptionBoard.Html(type="html", value=value)
            )  # type: ignore

    def variable(self, value: VariableValue) -> ProblemDescriptionBoard:
        if IS_PYDANTIC_V2:
            return ProblemDescriptionBoard(
                root=_ProblemDescriptionBoard.Variable(type="variable", value=value)
            )  # type: ignore
        else:
            return ProblemDescriptionBoard(
                __root__=_ProblemDescriptionBoard.Variable(type="variable", value=value)
            )  # type: ignore

    def test_case_id(self, value: str) -> ProblemDescriptionBoard:
        if IS_PYDANTIC_V2:
            return ProblemDescriptionBoard(
                root=_ProblemDescriptionBoard.TestCaseId(type="testCaseId", value=value)
            )  # type: ignore
        else:
            return ProblemDescriptionBoard(
                __root__=_ProblemDescriptionBoard.TestCaseId(
                    type="testCaseId", value=value
                )
            )  # type: ignore


class ProblemDescriptionBoard(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _ProblemDescriptionBoard.Html,
                _ProblemDescriptionBoard.Variable,
                _ProblemDescriptionBoard.TestCaseId,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _ProblemDescriptionBoard.Html,
            _ProblemDescriptionBoard.Variable,
            _ProblemDescriptionBoard.TestCaseId,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _ProblemDescriptionBoard.Html,
                _ProblemDescriptionBoard.Variable,
                _ProblemDescriptionBoard.TestCaseId,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _ProblemDescriptionBoard.Html,
            _ProblemDescriptionBoard.Variable,
            _ProblemDescriptionBoard.TestCaseId,
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        html: typing.Callable[[str], T_Result],
        variable: typing.Callable[[VariableValue], T_Result],
        test_case_id: typing.Callable[[str], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "html":
            return html(unioned_value.value)
        if unioned_value.type == "variable":
            return variable(unioned_value.value)
        if unioned_value.type == "testCaseId":
            return test_case_id(unioned_value.value)

    class Config:
        extra = pydantic.Extra.forbid


class _ProblemDescriptionBoard:
    class Html(UniversalBaseModel):
        type: typing.Literal["html"] = "html"
        value: str

    class Variable(UniversalBaseModel):
        type: typing.Literal["variable"] = "variable"
        value: VariableValue

    class TestCaseId(UniversalBaseModel):
        type: typing.Literal["testCaseId"] = "testCaseId"
        value: str


update_forward_refs(ProblemDescriptionBoard)
