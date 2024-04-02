# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

from .core.datetime_utils import serialize_datetime
from .name import Name

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class Type(pydantic.BaseModel):
    """
    Exercises all of the built-in types.
    ---
    import datetime
    import uuid

    from seed.object import Name, Type

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
        eighteen="eighteen",
        nineteen=Name(
            id="name-129fsdj9",
            value="nineteen",
        ),
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
    fourteen: typing.Any
    fifteen: typing.List[typing.List[int]]
    sixteen: typing.List[typing.Dict[str, int]]
    seventeen: typing.List[typing.Optional[uuid.UUID]]
    eighteen: typing.Literal["eighteen"]
    nineteen: Name

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}
