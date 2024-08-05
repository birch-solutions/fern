# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedSingleUrlEnvironmentNoDefault, SeedSingleUrlEnvironmentNoDefault


@pytest.fixture
def client() -> SeedSingleUrlEnvironmentNoDefault:
    return SeedSingleUrlEnvironmentNoDefault(
        token=os.getenv("ENV_TOKEN", "token"), base_url=os.getenv("TESTS_BASE_URL", "base_url")
    )


@pytest.fixture
def async_client() -> AsyncSeedSingleUrlEnvironmentNoDefault:
    return AsyncSeedSingleUrlEnvironmentNoDefault(
        token=os.getenv("ENV_TOKEN", "token"), base_url=os.getenv("TESTS_BASE_URL", "base_url")
    )
