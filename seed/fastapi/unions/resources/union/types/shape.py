# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .circle import Circle as resources_union_types_circle_Circle
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .square import Square as resources_union_types_square_Square
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def circle(self, value: resources_union_types_circle_Circle) -> Shape:
        if IS_PYDANTIC_V2:
            return Shape(
                root=_Shape.Circle(**value.dict(exclude_unset=True), type="circle")
            )  # type: ignore
        else:
            return Shape(
                __root__=_Shape.Circle(**value.dict(exclude_unset=True), type="circle")
            )  # type: ignore

    def square(self, value: resources_union_types_square_Square) -> Shape:
        if IS_PYDANTIC_V2:
            return Shape(
                root=_Shape.Square(**value.dict(exclude_unset=True), type="square")
            )  # type: ignore
        else:
            return Shape(
                __root__=_Shape.Square(**value.dict(exclude_unset=True), type="square")
            )  # type: ignore


class Shape(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Shape.Circle, _Shape.Square],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Shape.Circle, _Shape.Square]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Shape.Circle, _Shape.Square],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Shape.Circle, _Shape.Square]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        circle: typing.Callable[[resources_union_types_circle_Circle], T_Result],
        square: typing.Callable[[resources_union_types_square_Square], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "circle":
            return circle(
                resources_union_types_circle_Circle(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "square":
            return square(
                resources_union_types_square_Square(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )

    class Config:
        extra = pydantic.Extra.forbid


class _Shape:
    class Circle(resources_union_types_circle_Circle):
        type: typing.Literal["circle"] = "circle"

    class Square(resources_union_types_square_Square):
        type: typing.Literal["square"] = "square"


update_forward_refs(Shape)
