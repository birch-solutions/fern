# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedMixedCase, SeedMixedCase


@pytest.fixture
def client() -> SeedMixedCase:
    return SeedMixedCase(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedMixedCase:
    return AsyncSeedMixedCase(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
