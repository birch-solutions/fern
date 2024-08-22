# This file was auto-generated by Fern from our API Definition.

from seed import SeedCrossPackageTypeNames
import os
import pytest
from seed import AsyncSeedCrossPackageTypeNames


@pytest.fixture
def client() -> SeedCrossPackageTypeNames:
    return SeedCrossPackageTypeNames(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedCrossPackageTypeNames:
    return AsyncSeedCrossPackageTypeNames(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
