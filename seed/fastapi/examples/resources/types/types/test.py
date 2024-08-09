# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def and_(self, value: bool) -> Test:
        if IS_PYDANTIC_V2:
            return Test(root=_Test.And(type="and", value=value))
        else:
            return Test(__root__=_Test.And(type="and", value=value))

    def or_(self, value: bool) -> Test:
        if IS_PYDANTIC_V2:
            return Test(root=_Test.Or(type="or", value=value))
        else:
            return Test(__root__=_Test.Or(type="or", value=value))


class Test(UniversalRootModel):
    """
    Examples
    --------
    from seed.examples.resources.types import Test_And

    Test_And(value=True)
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Test.And, _Test.Or], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Test.And, _Test.Or]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Test.And, _Test.Or], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_Test.And, _Test.Or]:
            return self.__root__

    def visit(
        self,
        and_: typing.Callable[[bool], T_Result],
        or_: typing.Callable[[bool], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "and":
            return and_(unioned_value.value)
        if unioned_value.type == "or":
            return or_(unioned_value.value)


class _Test:
    class And(UniversalBaseModel):
        type: typing.Literal["and"] = "and"
        value: bool

    class Or(UniversalBaseModel):
        type: typing.Literal["or"] = "or"
        value: bool
