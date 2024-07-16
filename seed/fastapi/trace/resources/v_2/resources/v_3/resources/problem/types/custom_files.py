# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ........core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, UniversalRootModel
from .......commons.types.language import Language
from .basic_custom_files import BasicCustomFiles
from .files import Files

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def basic(self, value: BasicCustomFiles) -> CustomFiles:
        return CustomFiles(_CustomFiles.Basic(**value.dict(exclude_unset=True), type="basic"))

    def custom(self, value: typing.Dict[Language, Files]) -> CustomFiles:
        return CustomFiles(_CustomFiles.Custom(type="custom", value=value))


class CustomFiles(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_CustomFiles.Basic, _CustomFiles.Custom], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_CustomFiles.Basic, _CustomFiles.Custom]:
            return self.root

    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_CustomFiles.Basic, _CustomFiles.Custom], pydantic.Field(discriminator="type")
        ]

        def get_as_union(self) -> typing.Union[_CustomFiles.Basic, _CustomFiles.Custom]:
            return self.__root__

    def visit(
        self,
        basic: typing.Callable[[BasicCustomFiles], T_Result],
        custom: typing.Callable[[typing.Dict[Language, Files]], T_Result],
    ) -> T_Result:
        if self.get_as_union().type == "basic":
            return basic(BasicCustomFiles(**self.get_as_union().dict(exclude_unset=True, exclude={"type"})))
        if self.get_as_union().type == "custom":
            return custom(self.get_as_union().value)


class _CustomFiles:
    class Basic(BasicCustomFiles):
        type: typing.Literal["basic"] = "basic"

        class Config:
            allow_population_by_field_name = True

    class Custom(UniversalBaseModel):
        type: typing.Literal["custom"] = "custom"
        value: typing.Dict[Language, Files]
