# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .inline_type_1 import InlineType1
from ..core.pydantic_utilities import IS_PYDANTIC_V2
from .inline_type_2 import InlineType2
from ..core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ..core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def type_1(self, value: InlineType1) -> InlinedDiscriminatedUnion1:
        if IS_PYDANTIC_V2:
            return InlinedDiscriminatedUnion1(
                root=_InlinedDiscriminatedUnion1.Type1(
                    **value.dict(exclude_unset=True), type="type1"
                )
            )  # type: ignore
        else:
            return InlinedDiscriminatedUnion1(
                __root__=_InlinedDiscriminatedUnion1.Type1(
                    **value.dict(exclude_unset=True), type="type1"
                )
            )  # type: ignore

    def type_2(self, value: InlineType2) -> InlinedDiscriminatedUnion1:
        if IS_PYDANTIC_V2:
            return InlinedDiscriminatedUnion1(
                root=_InlinedDiscriminatedUnion1.Type2(
                    **value.dict(exclude_unset=True), type="type2"
                )
            )  # type: ignore
        else:
            return InlinedDiscriminatedUnion1(
                __root__=_InlinedDiscriminatedUnion1.Type2(
                    **value.dict(exclude_unset=True), type="type2"
                )
            )  # type: ignore


class InlinedDiscriminatedUnion1(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _InlinedDiscriminatedUnion1.Type1, _InlinedDiscriminatedUnion1.Type2
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _InlinedDiscriminatedUnion1.Type1, _InlinedDiscriminatedUnion1.Type2
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _InlinedDiscriminatedUnion1.Type1, _InlinedDiscriminatedUnion1.Type2
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _InlinedDiscriminatedUnion1.Type1, _InlinedDiscriminatedUnion1.Type2
        ]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        type_1: typing.Callable[[InlineType1], T_Result],
        type_2: typing.Callable[[InlineType2], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "type1":
            return type_1(
                InlineType1(**unioned_value.dict(exclude_unset=True, exclude={"type"}))
            )
        if unioned_value.type == "type2":
            return type_2(
                InlineType2(**unioned_value.dict(exclude_unset=True, exclude={"type"}))
            )


class _InlinedDiscriminatedUnion1:
    class Type1(InlineType1):
        type: typing.Literal["type1"] = "type1"

    class Type2(InlineType2):
        type: typing.Literal["type2"] = "type2"


update_forward_refs(InlinedDiscriminatedUnion1)
