# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def html(self, value: str) -> Metadata:
        if IS_PYDANTIC_V2:
            return Metadata(root=_Metadata.Html(type="html", value=value))  # type: ignore
        else:
            return Metadata(__root__=_Metadata.Html(type="html", value=value))  # type: ignore

    def markdown(self, value: str) -> Metadata:
        if IS_PYDANTIC_V2:
            return Metadata(root=_Metadata.Markdown(type="markdown", value=value))  # type: ignore
        else:
            return Metadata(__root__=_Metadata.Markdown(type="markdown", value=value))  # type: ignore


class Metadata(UniversalRootModel):
    """
    Examples
    --------
    from seed.examples.resources.types import Metadata_Html

    Metadata_Html(value="<head>...</head>")
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Metadata.Html, _Metadata.Markdown],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Metadata.Html, _Metadata.Markdown]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Metadata.Html, _Metadata.Markdown],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Metadata.Html, _Metadata.Markdown]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        html: typing.Callable[[str], T_Result],
        markdown: typing.Callable[[str], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "html":
            return html(unioned_value.value)
        if unioned_value.type == "markdown":
            return markdown(unioned_value.value)


class _Metadata:
    class Html(UniversalBaseModel):
        type: typing.Literal["html"] = "html"
        value: str

    class Markdown(UniversalBaseModel):
        type: typing.Literal["markdown"] = "markdown"
        value: str


update_forward_refs(Metadata)
