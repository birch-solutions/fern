from dataclasses import dataclass
from enum import Enum
from typing import List, Optional, Tuple

DependencyName = str
DependencyVersion = str


class DependencyCompatibility(Enum):
    EXACT = "="
    GREATER_THAN_OR_EQUAL = ">="


@dataclass(frozen=True)
class Dependency:
    name: DependencyName
    version: DependencyVersion
    # Using a tuple here to ensure immutability and make it hashable
    extras: Optional[Tuple[str, ...]] = None
    compatibility: DependencyCompatibility = DependencyCompatibility.EXACT
    optional: bool = False
