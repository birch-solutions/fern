# This file was auto-generated by Fern from our API Definition.

from seed import SeedApi
from seed import AsyncSeedApi


async def test_foo(client: SeedApi, async_client: AsyncSeedApi) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert client.folder.foo() is None  # type: ignore[func-returns-value]

    assert await async_client.folder.foo() is None  # type: ignore[func-returns-value]
