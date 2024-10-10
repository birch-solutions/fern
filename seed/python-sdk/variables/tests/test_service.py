# This file was auto-generated by Fern from our API Definition.

from seed import SeedVariables
from seed import AsyncSeedVariables


async def test_post(client: SeedVariables, async_client: AsyncSeedVariables) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.service.post(endpoint_param="endpointParam")  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.service.post(endpoint_param="endpointParam")  # type: ignore[func-returns-value]
        is None
    )
