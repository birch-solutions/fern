# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedApiWideBasePath, SeedApiWideBasePath


@pytest.fixture
def client() -> SeedApiWideBasePath:
    return SeedApiWideBasePath(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedApiWideBasePath:
    return AsyncSeedApiWideBasePath(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
