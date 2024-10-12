# This file was auto-generated by Fern from our API Definition.

from seed import SeedEnum
from seed import AsyncSeedEnum
from seed import Operand
from seed import Color


async def test_send(client: SeedEnum, async_client: AsyncSeedEnum) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.query_param.send(operand=Operand.GREATER_THAN, operand_or_color=Color.RED)  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.query_param.send(operand=Operand.GREATER_THAN, operand_or_color=Color.RED)  # type: ignore[func-returns-value]
        is None
    )


async def test_send_list(client: SeedEnum, async_client: AsyncSeedEnum) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.query_param.send_list(operand=Operand.GREATER_THAN, operand_or_color=Color.RED)  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.query_param.send_list(operand=Operand.GREATER_THAN, operand_or_color=Color.RED)  # type: ignore[func-returns-value]
        is None
    )
