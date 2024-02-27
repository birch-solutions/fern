# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedExamples, SeedExamples
from seed.environment import SeedExamplesEnvironment


async def test_check(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    client = SeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    client.health.service.check(id="id-2sdx82h")
    client = AsyncSeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    await client.health.service.check(id="id-2sdx82h")


async def test_ping(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    client = SeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    client.health.service.ping()
    client = AsyncSeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    await client.health.service.ping()
