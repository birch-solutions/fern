# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedTrace, SeedTrace


@pytest.fixture
def client() -> SeedTrace:
    return SeedTrace(
        x_random_header=os.getenv("ENV_X_RANDOM_HEADER", "x_random_header"),
        token=os.getenv("ENV_TOKEN", "token"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )


@pytest.fixture
def async_client() -> AsyncSeedTrace:
    return AsyncSeedTrace(
        x_random_header=os.getenv("ENV_X_RANDOM_HEADER", "x_random_header"),
        token=os.getenv("ENV_TOKEN", "token"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )
