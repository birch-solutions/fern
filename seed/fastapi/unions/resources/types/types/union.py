# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .foo import Foo as resources_types_types_foo_Foo
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .bar import Bar as resources_types_types_bar_Bar
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: resources_types_types_foo_Foo) -> Union:
        if IS_PYDANTIC_V2:
            return Union(root=_Union.Foo(type="foo", foo=value))  # type: ignore
        else:
            return Union(__root__=_Union.Foo(type="foo", foo=value))  # type: ignore

    def bar(self, value: resources_types_types_bar_Bar) -> Union:
        if IS_PYDANTIC_V2:
            return Union(root=_Union.Bar(type="bar", bar=value))  # type: ignore
        else:
            return Union(__root__=_Union.Bar(type="bar", bar=value))  # type: ignore


class Union(UniversalRootModel):
    """
    This is a simple union.
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Union.Foo, _Union.Bar], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Union.Foo, _Union.Bar]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Union.Foo, _Union.Bar], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Union.Foo, _Union.Bar]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        foo: typing.Callable[[resources_types_types_foo_Foo], T_Result],
        bar: typing.Callable[[resources_types_types_bar_Bar], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "foo":
            return foo(unioned_value.foo)
        if unioned_value.type == "bar":
            return bar(unioned_value.bar)

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


class _Union:
    class Foo(UniversalBaseModel):
        type: typing.Literal["foo"] = "foo"
        foo: resources_types_types_foo_Foo

    class Bar(UniversalBaseModel):
        type: typing.Literal["bar"] = "bar"
        bar: resources_types_types_bar_Bar


update_forward_refs(Union)
