# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedNurseryApi, SeedNurseryApi


@pytest.fixture
def client() -> SeedNurseryApi:
    return SeedNurseryApi(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedNurseryApi:
    return AsyncSeedNurseryApi(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
