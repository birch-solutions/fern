from pydantic import BaseModel
from datetime import datetime
from uuid import UUID
from typing import List, Set, Dict, Optional, Any
from .types import Name


class Type(BaseModel):
    one: int
    two: float
    three: str
    four: bool
    five: int
    six: datetime
    seven: str
    eight: UUID
    nine: bytes
    ten: List[int]
    eleven: Set[float]
    twelve: Dict[str, bool]
    thirteen: Optional[int] = None
    fourteen: Any
    fifteen: List[List[int]]
    sixteen: List[Dict[str, int]]
    seventeen: List[Optional[UUID]]
    eighteen: str
    nineteen: Name
    twenty: int
    twentyone: int
    twentytwo: float
    twentythree: str
