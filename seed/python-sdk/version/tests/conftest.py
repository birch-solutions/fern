# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedVersion, SeedVersion


@pytest.fixture
def client() -> SeedVersion:
    return SeedVersion(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedVersion:
    return AsyncSeedVersion(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
