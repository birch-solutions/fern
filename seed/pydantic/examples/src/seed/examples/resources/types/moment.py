# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import uuid
import datetime as dt
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class Moment(UniversalBaseModel):
    """
    Examples
    --------
    import datetime
    import uuid

    from seed.examples.resources import Moment

    Moment(
        id=uuid.UUID(
            "656f12d6-f592-444c-a1d3-a3cfd46d5b39",
        ),
        date=datetime.date.fromisoformat(
            "1994-01-01",
        ),
        datetime=datetime.datetime.fromisoformat(
            "datetime=datetime.datetime(1994, 1, 1, 1, 1, 1, tzinfo=TzInfo(UTC)) raw='1994-01-01T01:01:01Z'",
        ),
    )
    """

    id: uuid.UUID
    date: dt.date
    datetime: dt.datetime

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
