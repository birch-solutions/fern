# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedExamples, SeedExamples
from seed.environment import SeedExamplesEnvironment


async def test_echo(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    client = SeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    client.echo(request="Hello world!")
    client = AsyncSeedExamples(token="YOUR_TOKEN", environment=SeedExamplesEnvironment.PRODUCTION)

    await client.echo(request="Hello world!")
