# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedExhaustive, SeedExhaustive


@pytest.fixture
def client() -> SeedExhaustive:
    return SeedExhaustive(token=os.getenv("ENV_TOKEN", "token"), base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedExhaustive:
    return AsyncSeedExhaustive(token=os.getenv("ENV_TOKEN", "token"), base_url=os.getenv("TESTS_BASE_URL", "base_url"))
