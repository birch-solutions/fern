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
    def integer(self, value: int) -> UnionWithPrimitive:
        if IS_PYDANTIC_V2:
            return UnionWithPrimitive(
                root=_UnionWithPrimitive.Integer(type="integer", value=value)
            )  # type: ignore
        else:
            return UnionWithPrimitive(
                __root__=_UnionWithPrimitive.Integer(type="integer", value=value)
            )  # type: ignore

    def string(self, value: str) -> UnionWithPrimitive:
        if IS_PYDANTIC_V2:
            return UnionWithPrimitive(
                root=_UnionWithPrimitive.String(type="string", value=value)
            )  # type: ignore
        else:
            return UnionWithPrimitive(
                __root__=_UnionWithPrimitive.String(type="string", value=value)
            )  # type: ignore


class UnionWithPrimitive(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_UnionWithPrimitive.Integer, _UnionWithPrimitive.String],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_UnionWithPrimitive.Integer, _UnionWithPrimitive.String]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_UnionWithPrimitive.Integer, _UnionWithPrimitive.String],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[_UnionWithPrimitive.Integer, _UnionWithPrimitive.String]:
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
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "integer":
            return integer(unioned_value.value)
        if unioned_value.type == "string":
            return string(unioned_value.value)

    class Config:
        extra = pydantic.Extra.forbid


class _UnionWithPrimitive:
    class Integer(UniversalBaseModel):
        type: typing.Literal["integer"] = "integer"
        value: int

    class String(UniversalBaseModel):
        type: typing.Literal["string"] = "string"
        value: str


update_forward_refs(UnionWithPrimitive)
