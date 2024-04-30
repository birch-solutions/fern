# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import pydantic_v1


class Moment(pydantic_v1.BaseModel):
    """
    Examples
    --------
    import datetime
    import uuid

    from seed.examples import Moment

    Moment(
        id=uuid.UUID(
            "656f12d6-f592-444c-a1d3-a3cfd46d5b39",
        ),
        date=datetime.date.fromisoformat(
            "1994-01-01",
        ),
        datetime=datetime.datetime.fromisoformat(
            "1994-01-01 01:01:01+00:00",
        ),
    )
    """

    id: uuid.UUID
    date: dt.date
    datetime: dt.datetime

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
