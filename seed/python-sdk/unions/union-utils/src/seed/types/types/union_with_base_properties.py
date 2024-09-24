# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from .foo import Foo as types_types_foo_Foo
from ...core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ...core.pydantic_utilities import UniversalBaseModel
from ...core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def integer(self, value: int) -> UnionWithBaseProperties:
        if IS_PYDANTIC_V2:
            return UnionWithBaseProperties(root=_UnionWithBaseProperties.Integer(type="integer", value=value))  # type: ignore
        else:
            return UnionWithBaseProperties(__root__=_UnionWithBaseProperties.Integer(type="integer", value=value))  # type: ignore

    def string(self, value: str) -> UnionWithBaseProperties:
        if IS_PYDANTIC_V2:
            return UnionWithBaseProperties(root=_UnionWithBaseProperties.String(type="string", value=value))  # type: ignore
        else:
            return UnionWithBaseProperties(__root__=_UnionWithBaseProperties.String(type="string", value=value))  # type: ignore

    def foo(self, value: types_types_foo_Foo) -> UnionWithBaseProperties:
        if IS_PYDANTIC_V2:
            return UnionWithBaseProperties(
                root=_UnionWithBaseProperties.Foo(**value.dict(exclude_unset=True), type="foo")
            )  # type: ignore
        else:
            return UnionWithBaseProperties(
                __root__=_UnionWithBaseProperties.Foo(**value.dict(exclude_unset=True), type="foo")
            )  # type: ignore


class UnionWithBaseProperties(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _UnionWithBaseProperties.Integer, _UnionWithBaseProperties.String, _UnionWithBaseProperties.Foo
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _UnionWithBaseProperties.Integer, _UnionWithBaseProperties.String, _UnionWithBaseProperties.Foo
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _UnionWithBaseProperties.Integer, _UnionWithBaseProperties.String, _UnionWithBaseProperties.Foo
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _UnionWithBaseProperties.Integer, _UnionWithBaseProperties.String, _UnionWithBaseProperties.Foo
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        integer: typing.Callable[[int], T_Result],
        string: typing.Callable[[str], T_Result],
        foo: typing.Callable[[types_types_foo_Foo], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "integer":
            return integer(unioned_value.value)
        if unioned_value.type == "string":
            return string(unioned_value.value)
        if unioned_value.type == "foo":
            return foo(types_types_foo_Foo(**unioned_value.dict(exclude_unset=True, exclude={"type"})))

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class _UnionWithBaseProperties:
    class Integer(UniversalBaseModel):
        type: typing.Literal["integer"] = "integer"
        value: int

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True

    class String(UniversalBaseModel):
        type: typing.Literal["string"] = "string"
        value: str

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True

    class Foo(types_types_foo_Foo):
        type: typing.Literal["foo"] = "foo"

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True


update_forward_refs(UnionWithBaseProperties)
