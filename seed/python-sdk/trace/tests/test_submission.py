# This file was auto-generated by Fern from our API Definition.

from seed import SeedTrace
from seed import AsyncSeedTrace
import typing
from .utilities import validate_response


async def test_create_execution_session(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = {"sessionId": "sessionId", "language": "JAVA", "status": "CREATING_CONTAINER"}
    expected_types: typing.Any = {"sessionId": None, "executionSessionUrl": None, "language": None, "status": None}
    response = client.submission.create_execution_session(language="JAVA")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.submission.create_execution_session(language="JAVA")
    validate_response(async_response, expected_response, expected_types)


async def test_get_execution_session(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.submission.get_execution_session(session_id="sessionId")  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.submission.get_execution_session(session_id="sessionId")  # type: ignore[func-returns-value]
        is None
    )


async def test_stop_execution_session(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.submission.stop_execution_session(session_id="sessionId")  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.submission.stop_execution_session(session_id="sessionId")  # type: ignore[func-returns-value]
        is None
    )


async def test_get_execution_sessions_state(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = {
        "states": {
            "states": {
                "sessionId": "sessionId",
                "isWarmInstance": True,
                "language": "JAVA",
                "status": "CREATING_CONTAINER",
            }
        },
        "warmingSessionIds": ["warmingSessionIds", "warmingSessionIds"],
    }
    expected_types: typing.Any = {
        "states": (
            "dict",
            {
                0: (
                    None,
                    {
                        "lastTimeContacted": None,
                        "sessionId": None,
                        "isWarmInstance": None,
                        "awsTaskId": None,
                        "language": None,
                        "status": None,
                    },
                )
            },
        ),
        "numWarmingInstances": None,
        "warmingSessionIds": ("list", {0: None, 1: None}),
    }
    response = client.submission.get_execution_sessions_state()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.submission.get_execution_sessions_state()
    validate_response(async_response, expected_response, expected_types)
