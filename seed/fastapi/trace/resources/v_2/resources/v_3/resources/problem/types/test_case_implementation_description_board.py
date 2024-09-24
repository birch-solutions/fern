# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ........core.pydantic_utilities import IS_PYDANTIC_V2
from .parameter_id import ParameterId
from ........core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ........core.pydantic_utilities import UniversalBaseModel
from ........core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def html(self, value: str) -> TestCaseImplementationDescriptionBoard:
        if IS_PYDANTIC_V2:
            return TestCaseImplementationDescriptionBoard(
                root=_TestCaseImplementationDescriptionBoard.Html(
                    type="html", value=value
                )
            )  # type: ignore
        else:
            return TestCaseImplementationDescriptionBoard(
                __root__=_TestCaseImplementationDescriptionBoard.Html(
                    type="html", value=value
                )
            )  # type: ignore

    def param_id(self, value: ParameterId) -> TestCaseImplementationDescriptionBoard:
        if IS_PYDANTIC_V2:
            return TestCaseImplementationDescriptionBoard(
                root=_TestCaseImplementationDescriptionBoard.ParamId(
                    type="paramId", value=value
                )
            )  # type: ignore
        else:
            return TestCaseImplementationDescriptionBoard(
                __root__=_TestCaseImplementationDescriptionBoard.ParamId(
                    type="paramId", value=value
                )
            )  # type: ignore


class TestCaseImplementationDescriptionBoard(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _TestCaseImplementationDescriptionBoard.Html,
                _TestCaseImplementationDescriptionBoard.ParamId,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestCaseImplementationDescriptionBoard.Html,
            _TestCaseImplementationDescriptionBoard.ParamId,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _TestCaseImplementationDescriptionBoard.Html,
                _TestCaseImplementationDescriptionBoard.ParamId,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _TestCaseImplementationDescriptionBoard.Html,
            _TestCaseImplementationDescriptionBoard.ParamId,
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
        param_id: typing.Callable[[ParameterId], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "html":
            return html(unioned_value.value)
        if unioned_value.type == "paramId":
            return param_id(unioned_value.value)

    class Config:
        extra = pydantic.Extra.forbid


class _TestCaseImplementationDescriptionBoard:
    class Html(UniversalBaseModel):
        type: typing.Literal["html"] = "html"
        value: str

    class ParamId(UniversalBaseModel):
        type: typing.Literal["paramId"] = "paramId"
        value: ParameterId


update_forward_refs(TestCaseImplementationDescriptionBoard)
