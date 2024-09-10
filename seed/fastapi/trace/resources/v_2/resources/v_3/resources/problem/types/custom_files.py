# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .basic_custom_files import BasicCustomFiles
from ........core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from .......commons.types.language import Language
from .files import Files
from ........core.pydantic_utilities import UniversalRootModel
from .......commons.types.list_type import ListType
from .......commons.types.map_type import MapType
import typing_extensions
import pydantic
from ........core.pydantic_utilities import UniversalBaseModel
from ........core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def basic(self, value: BasicCustomFiles) -> CustomFiles:
        if IS_PYDANTIC_V2:
            return CustomFiles(
                root=_CustomFiles.Basic(**value.dict(exclude_unset=True), type="basic")
            )  # type: ignore
        else:
            return CustomFiles(
                __root__=_CustomFiles.Basic(
                    **value.dict(exclude_unset=True), type="basic"
                )
            )  # type: ignore

    def custom(self, value: typing.Dict[Language, Files]) -> CustomFiles:
        if IS_PYDANTIC_V2:
            return CustomFiles(root=_CustomFiles.Custom(type="custom", value=value))  # type: ignore
        else:
            return CustomFiles(__root__=_CustomFiles.Custom(type="custom", value=value))  # type: ignore


class CustomFiles(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_CustomFiles.Basic, _CustomFiles.Custom],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_CustomFiles.Basic, _CustomFiles.Custom]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_CustomFiles.Basic, _CustomFiles.Custom],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_CustomFiles.Basic, _CustomFiles.Custom]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        basic: typing.Callable[[BasicCustomFiles], T_Result],
        custom: typing.Callable[[typing.Dict[Language, Files]], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "basic":
            return basic(
                BasicCustomFiles(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "custom":
            return custom(unioned_value.value)


class _CustomFiles:
    class Basic(BasicCustomFiles):
        type: typing.Literal["basic"] = "basic"

    class Custom(UniversalBaseModel):
        type: typing.Literal["custom"] = "custom"
        value: typing.Dict[Language, Files]


update_forward_refs(CustomFiles)
update_forward_refs(ListType)
update_forward_refs(MapType)
