# This file was auto-generated by Fern from our API Definition.

from seed import SeedPagination
import os
import pytest
from seed import AsyncSeedPagination


@pytest.fixture
def client() -> SeedPagination:
    return SeedPagination(
        token=os.getenv("ENV_TOKEN", "token"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )


@pytest.fixture
def async_client() -> AsyncSeedPagination:
    return AsyncSeedPagination(
        token=os.getenv("ENV_TOKEN", "token"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )
