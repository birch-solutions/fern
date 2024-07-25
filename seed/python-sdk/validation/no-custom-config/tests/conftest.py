# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedValidation, SeedValidation


@pytest.fixture
def client() -> SeedValidation:
    return SeedValidation(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedValidation:
    return AsyncSeedValidation(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
