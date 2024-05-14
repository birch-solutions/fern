# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import deep_union_pydantic_dicts, pydantic_v1
from ....types.identifier import Identifier


class Response(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed.examples import BasicType, ComplexType, Identifier, Response

    Response(
        response="Initializing...",
        identifiers=[
            Identifier(
                type=BasicType.PRIMITIVE,
                value="example",
                label="Primitive",
            ),
            Identifier(
                type=ComplexType.UNKNOWN,
                value="{}",
                label="Unknown",
            ),
        ],
    )
    """

    response: typing.Any
    identifiers: typing.List[Identifier]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
