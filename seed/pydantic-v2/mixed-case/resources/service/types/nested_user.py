from pydantic import BaseModel
from resources.service.types.user import User
from dt import datetime
from core.datetime_utils import serialize_datetime


class NestedUser(BaseModel):
    name: str = Field(alias="Name")
    nested_user: User = Field(alias="NestedUser")

    class Config:
        frozen = True
        smart_union = True
        json_encoders = {datetime: serialize_datetime}
