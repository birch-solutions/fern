# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalRootModel
from .circle import Circle as union_types_circle_Circle
from .square import Square as union_types_square_Square

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def circle(self, value: union_types_circle_Circle) -> Shape:
        return Shape(_Shape.Circle(**value.dict(exclude_unset=True), type="circle"))

    def square(self, value: union_types_square_Square) -> Shape:
        return Shape(_Shape.Square(**value.dict(exclude_unset=True), type="square"))


class Shape(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Shape.Circle, _Shape.Square], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Shape.Circle, _Shape.Square]:
            return self.root

    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Shape.Circle, _Shape.Square], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Shape.Circle, _Shape.Square]:
            return self.__root__

    def visit(
        self,
        circle: typing.Callable[[union_types_circle_Circle], T_Result],
        square: typing.Callable[[union_types_square_Square], T_Result],
    ) -> T_Result:
        if self.get_as_union().type == "circle":
            return circle(union_types_circle_Circle(**self.get_as_union().dict(exclude_unset=True, exclude={"type"})))
        if self.get_as_union().type == "square":
            return square(union_types_square_Square(**self.get_as_union().dict(exclude_unset=True, exclude={"type"})))


class _Shape:
    class Circle(union_types_circle_Circle):
        type: typing.Literal["circle"] = "circle"

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True
                allow_population_by_field_name = True

    class Square(union_types_square_Square):
        type: typing.Literal["square"] = "square"

        if IS_PYDANTIC_V2:
            model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
        else:

            class Config:
                frozen = True
                smart_union = True
                allow_population_by_field_name = True
