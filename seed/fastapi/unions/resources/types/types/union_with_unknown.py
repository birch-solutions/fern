# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .foo import Foo as resources_types_types_foo_Foo
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def foo(self, value: resources_types_types_foo_Foo) -> UnionWithUnknown:
        if IS_PYDANTIC_V2:
            return UnionWithUnknown(
                root=_UnionWithUnknown.Foo(**value.dict(exclude_unset=True), type="foo")
            )  # type: ignore
        else:
            return UnionWithUnknown(
                __root__=_UnionWithUnknown.Foo(
                    **value.dict(exclude_unset=True), type="foo"
                )
            )  # type: ignore

    def unknown(self) -> UnionWithUnknown:
        if IS_PYDANTIC_V2:
            return UnionWithUnknown(root=_UnionWithUnknown.Unknown(type="unknown"))  # type: ignore
        else:
            return UnionWithUnknown(__root__=_UnionWithUnknown.Unknown(type="unknown"))  # type: ignore


class UnionWithUnknown(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_UnionWithUnknown.Foo, _UnionWithUnknown.Unknown]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        foo: typing.Callable[[resources_types_types_foo_Foo], T_Result],
        unknown: typing.Callable[[], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "foo":
            return foo(
                resources_types_types_foo_Foo(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "unknown":
            return unknown()


class _UnionWithUnknown:
    class Foo(resources_types_types_foo_Foo):
        type: typing.Literal["foo"] = "foo"

    class Unknown(UniversalBaseModel):
        type: typing.Literal["unknown"] = "unknown"


update_forward_refs(UnionWithUnknown)
