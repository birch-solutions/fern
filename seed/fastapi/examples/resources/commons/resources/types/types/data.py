# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from ......core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import UniversalBaseModel
from ......core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def string(self, value: str) -> Data:
        if IS_PYDANTIC_V2:
            return Data(root=_Data.String(type="string", value=value))  # type: ignore
        else:
            return Data(__root__=_Data.String(type="string", value=value))  # type: ignore

    def base_64(self, value: str) -> Data:
        if IS_PYDANTIC_V2:
            return Data(root=_Data.Base64(type="base64", value=value))  # type: ignore
        else:
            return Data(__root__=_Data.Base64(type="base64", value=value))  # type: ignore


class Data(UniversalRootModel):
    """
    Examples
    --------
    from seed.examples.resources.commons.resources.types import Data_String

    Data_String(value="data")
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Data.String, _Data.Base64],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Data.String, _Data.Base64]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Data.String, _Data.Base64],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(self) -> typing.Union[_Data.String, _Data.Base64]:
            return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

    def visit(
        self,
        string: typing.Callable[[str], T_Result],
        base_64: typing.Callable[[str], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "string":
            return string(unioned_value.value)
        if unioned_value.type == "base64":
            return base_64(unioned_value.value)


class _Data:
    class String(UniversalBaseModel):
        type: typing.Literal["string"] = "string"
        value: str

    class Base64(UniversalBaseModel):
        type: typing.Literal["base64"] = "base64"
        value: str


update_forward_refs(Data)
