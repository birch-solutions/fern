# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ..types.currency import Currency
import pydantic


class CreatePaymentRequest(UniversalBaseModel):
    amount: int
    currency: Currency

    class Config:
        extra = pydantic.Extra.forbid
