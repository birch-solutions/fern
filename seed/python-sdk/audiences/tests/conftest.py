# This file was auto-generated by Fern from our API Definition.

from seed import SeedAudiences
import os
import pytest
from seed import AsyncSeedAudiences


@pytest.fixture
def client() -> SeedAudiences:
    return SeedAudiences(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedAudiences:
    return AsyncSeedAudiences(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
