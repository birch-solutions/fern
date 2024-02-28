# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedPlainText, SeedPlainText


@pytest.fixture
def client() -> SeedPlainText:
    return SeedPlainText(base_url=os.getenv("TESTS_BASE_URL"))


@pytest.fixture
def async_client() -> AsyncSeedPlainText:
    return AsyncSeedPlainText(base_url=os.getenv("TESTS_BASE_URL"))
