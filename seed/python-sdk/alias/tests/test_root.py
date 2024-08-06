# This file was auto-generated by Fern from our API Definition.

from seed import SeedAlias
from seed import AsyncSeedAlias


async def test_get(client: SeedAlias, async_client: AsyncSeedAlias) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert client.get(type_id="type-kaljhv87") is None  # type: ignore[func-returns-value]

    assert await async_client.get(type_id="type-kaljhv87") is None  # type: ignore[func-returns-value]
