from pydantic import BaseModel
from typing import Optional, List
from resources.users.types.user import User


class UserOptionalListContainer(BaseModel):
    users: Optional[List[User]] = None
