# This file was auto-generated by Fern from our API Definition.

from seed import SeedTrace
from seed import AsyncSeedTrace
import typing
from ..utilities import validate_response


async def test_get_lightweight_problems(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = [
        {
            "problemId": "string",
            "problemName": "string",
            "problemVersion": 1,
            "variableTypes": [{"type": "integerType"}],
        }
    ]
    expected_types: typing.Tuple[typing.Any, typing.Any] = (
        "list",
        {
            0: {
                "problemId": None,
                "problemName": None,
                "problemVersion": "integer",
                "variableTypes": ("set", {0: "no_validate"}),
            }
        },
    )
    response = client.v_2.problem.get_lightweight_problems()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.v_2.problem.get_lightweight_problems()
    validate_response(async_response, expected_response, expected_types)


async def test_get_problems(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = [
        {
            "problemId": "string",
            "problemDescription": {
                "boards": [{"0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", "type": "html"}]
            },
            "problemName": "string",
            "problemVersion": 1,
            "supportedLanguages": ["JAVA"],
            "customFiles": {"type": "basic"},
            "generatedFiles": {},
            "customTestCaseTemplates": [{}],
            "testcases": [{}],
            "isPublic": True,
        }
    ]
    expected_types: typing.Tuple[typing.Any, typing.Any] = (
        "list",
        {
            0: {
                "problemId": None,
                "problemDescription": {"boards": ("list", {0: "no_validate"})},
                "problemName": None,
                "problemVersion": "integer",
                "supportedLanguages": ("set", {0: None}),
                "customFiles": "no_validate",
                "generatedFiles": {},
                "customTestCaseTemplates": ("list", {0: {}}),
                "testcases": ("list", {0: {}}),
                "isPublic": None,
            }
        },
    )
    response = client.v_2.problem.get_problems()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.v_2.problem.get_problems()
    validate_response(async_response, expected_response, expected_types)


async def test_get_latest_problem(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = {
        "problemId": "string",
        "problemDescription": {
            "boards": [{"0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", "type": "html"}]
        },
        "problemName": "string",
        "problemVersion": 1,
        "supportedLanguages": ["JAVA"],
        "customFiles": {"type": "basic"},
        "generatedFiles": {},
        "customTestCaseTemplates": [{}],
        "testcases": [{}],
        "isPublic": True,
    }
    expected_types: typing.Any = {
        "problemId": None,
        "problemDescription": {"boards": ("list", {0: "no_validate"})},
        "problemName": None,
        "problemVersion": "integer",
        "supportedLanguages": ("set", {0: None}),
        "customFiles": "no_validate",
        "generatedFiles": {},
        "customTestCaseTemplates": ("list", {0: {}}),
        "testcases": ("list", {0: {}}),
        "isPublic": None,
    }
    response = client.v_2.problem.get_latest_problem(problem_id="string")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.v_2.problem.get_latest_problem(problem_id="string")
    validate_response(async_response, expected_response, expected_types)


async def test_get_problem_version(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response: typing.Any = {
        "problemId": "string",
        "problemDescription": {
            "boards": [{"0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", "type": "html"}]
        },
        "problemName": "string",
        "problemVersion": 1,
        "supportedLanguages": ["JAVA"],
        "customFiles": {"type": "basic"},
        "generatedFiles": {},
        "customTestCaseTemplates": [{}],
        "testcases": [{}],
        "isPublic": True,
    }
    expected_types: typing.Any = {
        "problemId": None,
        "problemDescription": {"boards": ("list", {0: "no_validate"})},
        "problemName": None,
        "problemVersion": "integer",
        "supportedLanguages": ("set", {0: None}),
        "customFiles": "no_validate",
        "generatedFiles": {},
        "customTestCaseTemplates": ("list", {0: {}}),
        "testcases": ("list", {0: {}}),
        "isPublic": None,
    }
    response = client.v_2.problem.get_problem_version(problem_id="string", problem_version=1)
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.v_2.problem.get_problem_version(problem_id="string", problem_version=1)
    validate_response(async_response, expected_response, expected_types)
