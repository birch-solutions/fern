# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ..core.serialization import FieldMetadata
import datetime as dt
import uuid
import typing
from .name import Name
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Type(UniversalBaseModel):
    """
    Exercises all of the built-in types.

    Examples
    --------
    import datetime
    import uuid

    from seed import Name, Type

    Type(
        one=1,
        two=2.0,
        three="three",
        four=True,
        five=5,
        six=datetime.datetime.fromisoformat(
            "1994-01-01 01:01:01+00:00",
        ),
        seven=datetime.date.fromisoformat(
            "1994-01-01",
        ),
        eight=uuid.UUID(
            "7f71f677-e138-4a5c-bb01-e4453a19bfef",
        ),
        nine="TWFueSBoYW5kcyBtYWtlIGxpZ2h0IHdvcmsu",
        ten=[10, 10],
        eleven={11.0},
        twelve={"invalid": False, "exists": True},
        thirteen=13,
        fourteen={},
        fifteen=[[15, 15], [15, 15]],
        sixteen=[{"foo": 16, "bar": 16}],
        seventeen=[
            uuid.UUID(
                "244c6643-f99d-4bfc-b20d-a6518f3a4cf4",
            ),
            uuid.UUID(
                "07791987-dec3-43b5-8dc4-250ab5dc0478",
            ),
        ],
        nineteen=Name(
            id="name-129fsdj9",
            value="nineteen",
        ),
        twenty=20,
        twentyone=21,
        twentytwo=22.22,
        twentythree="23",
    )
    """

    one: typing_extensions.Annotated[int, FieldMetadata(alias="one")]
    two: typing_extensions.Annotated[float, FieldMetadata(alias="two")]
    three: typing_extensions.Annotated[str, FieldMetadata(alias="three")]
    four: typing_extensions.Annotated[bool, FieldMetadata(alias="four")]
    five: typing_extensions.Annotated[int, FieldMetadata(alias="five")]
    six: typing_extensions.Annotated[dt.datetime, FieldMetadata(alias="six")]
    seven: typing_extensions.Annotated[dt.date, FieldMetadata(alias="seven")]
    eight: typing_extensions.Annotated[uuid.UUID, FieldMetadata(alias="eight")]
    nine: typing_extensions.Annotated[str, FieldMetadata(alias="nine")]
    ten: typing_extensions.Annotated[typing.List[int], FieldMetadata(alias="ten")]
    eleven: typing_extensions.Annotated[typing.Set[float], FieldMetadata(alias="eleven")]
    twelve: typing_extensions.Annotated[typing.Dict[str, bool], FieldMetadata(alias="twelve")]
    thirteen: typing_extensions.Annotated[typing.Optional[int], FieldMetadata(alias="thirteen")] = None
    fourteen: typing_extensions.Annotated[typing.Optional[typing.Any], FieldMetadata(alias="fourteen")] = None
    fifteen: typing_extensions.Annotated[typing.List[typing.List[int]], FieldMetadata(alias="fifteen")]
    sixteen: typing_extensions.Annotated[typing.List[typing.Dict[str, int]], FieldMetadata(alias="sixteen")]
    seventeen: typing_extensions.Annotated[typing.List[typing.Optional[uuid.UUID]], FieldMetadata(alias="seventeen")]
    eighteen: typing_extensions.Annotated[typing.Literal["eighteen"], FieldMetadata(alias="eighteen")] = "eighteen"
    nineteen: typing_extensions.Annotated[Name, FieldMetadata(alias="nineteen")]
    twenty: typing_extensions.Annotated[int, FieldMetadata(alias="twenty")]
    twentyone: typing_extensions.Annotated[int, FieldMetadata(alias="twentyone")]
    twentytwo: typing_extensions.Annotated[float, FieldMetadata(alias="twentytwo")]
    twentythree: typing_extensions.Annotated[str, FieldMetadata(alias="twentythree")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
