# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedTrace, SeedTrace

from ...utilities import validate_response


async def test_get_lightweight_problems(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = [{}]
    response = client.v_2.v_3.problem.get_lightweight_problems()
    validate_response(response, expected_response)

    async_response = await async_client.v_2.v_3.problem.get_lightweight_problems()
    validate_response(async_response, expected_response)


async def test_get_problems(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = [{}]
    response = client.v_2.v_3.problem.get_problems()
    validate_response(response, expected_response)

    async_response = await async_client.v_2.v_3.problem.get_problems()
    validate_response(async_response, expected_response)


async def test_get_latest_problem(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {}
    response = client.v_2.v_3.problem.get_latest_problem(problem_id="string")
    validate_response(response, expected_response)

    async_response = await async_client.v_2.v_3.problem.get_latest_problem(problem_id="string")
    validate_response(async_response, expected_response)


async def test_get_problem_version(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {}
    response = client.v_2.v_3.problem.get_problem_version(problem_id="string", problem_version=1)
    validate_response(response, expected_response)

    async_response = await async_client.v_2.v_3.problem.get_problem_version(problem_id="string", problem_version=1)
    validate_response(async_response, expected_response)
