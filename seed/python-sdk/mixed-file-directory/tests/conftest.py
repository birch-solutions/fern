# This file was auto-generated by Fern from our API Definition.

from seed import SeedMixedFileDirectory
import os
import pytest
from seed import AsyncSeedMixedFileDirectory


@pytest.fixture
def client() -> SeedMixedFileDirectory:
    return SeedMixedFileDirectory(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedMixedFileDirectory:
    return AsyncSeedMixedFileDirectory(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
