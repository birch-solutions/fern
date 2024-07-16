# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, UniversalRootModel

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def html(self, value: str) -> Metadata:
        return Metadata(_Metadata.Html(type="html", value=value))

    def markdown(self, value: str) -> Metadata:
        return Metadata(_Metadata.Markdown(type="markdown", value=value))


class Metadata(UniversalRootModel):
    """
    Examples
    --------
    from seed.examples import Metadata_Html

    Metadata_Html(value="<head>...</head>")
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Metadata.Html, _Metadata.Markdown], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Metadata.Html, _Metadata.Markdown]:
            return self.root

    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Metadata.Html, _Metadata.Markdown], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Metadata.Html, _Metadata.Markdown]:
            return self.__root__

    def visit(self, html: typing.Callable[[str], T_Result], markdown: typing.Callable[[str], T_Result]) -> T_Result:
        if self.get_as_union().type == "html":
            return html(self.get_as_union().value)
        if self.get_as_union().type == "markdown":
            return markdown(self.get_as_union().value)


class _Metadata:
    class Html(UniversalBaseModel):
        type: typing.Literal["html"] = "html"
        value: str

    class Markdown(UniversalBaseModel):
        type: typing.Literal["markdown"] = "markdown"
        value: str
