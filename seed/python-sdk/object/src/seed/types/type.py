# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
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

    one: int
    two: float
    three: str
    four: bool
    five: int
    six: dt.datetime
    seven: dt.date
    eight: uuid.UUID
    nine: str
    ten: typing.List[int]
    eleven: typing.Set[float]
    twelve: typing.Dict[str, bool]
    thirteen: typing.Optional[int] = None
    fourteen: typing.Optional[typing.Any] = None
    fifteen: typing.List[typing.List[int]]
    sixteen: typing.List[typing.Dict[str, int]]
    seventeen: typing.List[typing.Optional[uuid.UUID]]
    eighteen: typing.Literal["eighteen"] = "eighteen"
    nineteen: Name
    twenty: int
    twentyone: int
    twentytwo: float
    twentythree: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
