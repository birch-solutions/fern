# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .metadata import (
    Metadata as resources_commons_resources_types_types_metadata_Metadata,
)
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from .tag import Tag as resources_commons_resources_types_types_tag_Tag
from ......core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import UniversalBaseModel
from ......core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def metadata(
        self, value: resources_commons_resources_types_types_metadata_Metadata
    ) -> EventInfo:
        if IS_PYDANTIC_V2:
            return EventInfo(
                root=_EventInfo.Metadata(
                    **value.dict(exclude_unset=True), type="metadata"
                )
            )  # type: ignore
        else:
            return EventInfo(
                __root__=_EventInfo.Metadata(
                    **value.dict(exclude_unset=True), type="metadata"
                )
            )  # type: ignore

    def tag(self, value: resources_commons_resources_types_types_tag_Tag) -> EventInfo:
        if IS_PYDANTIC_V2:
            return EventInfo(root=_EventInfo.Tag(type="tag", value=value))  # type: ignore
        else:
            return EventInfo(__root__=_EventInfo.Tag(type="tag", value=value))  # type: ignore


class EventInfo(UniversalRootModel):
    """
    Examples
    --------
    from seed.examples.resources.commons.resources.types import EventInfo_Metadata

    EventInfo_Metadata(
        id="metadata-alskjfg8",
        data={"one": "two"},
        json_string='{"one": "two"}',
    )
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_EventInfo.Metadata, _EventInfo.Tag],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_EventInfo.Metadata, _EventInfo.Tag]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_EventInfo.Metadata, _EventInfo.Tag],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_EventInfo.Metadata, _EventInfo.Tag]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        metadata: typing.Callable[
            [resources_commons_resources_types_types_metadata_Metadata], T_Result
        ],
        tag: typing.Callable[
            [resources_commons_resources_types_types_tag_Tag], T_Result
        ],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "metadata":
            return metadata(
                resources_commons_resources_types_types_metadata_Metadata(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "tag":
            return tag(unioned_value.value)

    class Config:
        extra = pydantic.Extra.forbid


class _EventInfo:
    class Metadata(resources_commons_resources_types_types_metadata_Metadata):
        type: typing.Literal["metadata"] = "metadata"

    class Tag(UniversalBaseModel):
        type: typing.Literal["tag"] = "tag"
        value: resources_commons_resources_types_types_tag_Tag


update_forward_refs(EventInfo)
