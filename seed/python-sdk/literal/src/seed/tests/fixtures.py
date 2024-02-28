# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedLiteral, SeedLiteral


@pytest.fixture
def client() -> SeedLiteral:
    return SeedLiteral(base_url=os.getenv("TESTS_BASE_URL"))


@pytest.fixture
def async_client() -> AsyncSeedLiteral:
    return AsyncSeedLiteral(base_url=os.getenv("TESTS_BASE_URL"))
