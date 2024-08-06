# This file was auto-generated by Fern from our API Definition.

from seed import SeedNurseryApi
from seed import AsyncSeedNurseryApi


async def test_test(client: SeedNurseryApi, async_client: AsyncSeedNurseryApi) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert client.package.test(for_="string") is None  # type: ignore[func-returns-value]

    assert await async_client.package.test(for_="string") is None  # type: ignore[func-returns-value]
