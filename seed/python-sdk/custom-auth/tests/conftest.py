# This file was auto-generated by Fern from our API Definition.

from seed import SeedCustomAuth
import os
import pytest
from seed import AsyncSeedCustomAuth


@pytest.fixture
def client() -> SeedCustomAuth:
    return SeedCustomAuth(
        custom_auth_scheme=os.getenv("ENV_CUSTOM_AUTH_SCHEME", "custom_auth_scheme"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )


@pytest.fixture
def async_client() -> AsyncSeedCustomAuth:
    return AsyncSeedCustomAuth(
        custom_auth_scheme=os.getenv("ENV_CUSTOM_AUTH_SCHEME", "custom_auth_scheme"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
    )
