# This file was auto-generated by Fern from our API Definition.

from seed import (
    CreateProblemRequest,
    FileInfo,
    ProblemDescription,
    ProblemDescriptionBoard_Html,
    ProblemFiles,
    TestCase,
    TestCaseWithExpectedResult,
    VariableType,
    VariableTypeAndName,
    VariableValue_IntegerValue,
)
from seed.client import AsyncSeedTrace, SeedTrace

from .utilities import validate_response


async def test_create_problem(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {
        "0": "s",
        "1": "t",
        "2": "r",
        "3": "i",
        "4": "n",
        "5": "g",
        "type": "success",
    }
    expected_types = "no_validate"
    response = client.problem.create_problem(
        request=CreateProblemRequest(
            problem_name="string",
            problem_description=ProblemDescription(
                boards=[ProblemDescriptionBoard_Html(value="string")]
            ),
            files={
                "JAVA": ProblemFiles(
                    solution_file=FileInfo(filename="string", contents="string"),
                    read_only_files=[FileInfo(filename="string", contents="string")],
                )
            },
            input_params=[
                VariableTypeAndName(variable_type=VariableType(), name="string")
            ],
            output_type=VariableType(),
            testcases=[
                TestCaseWithExpectedResult(
                    test_case=TestCase(
                        id="string", params=[VariableValue_IntegerValue(value=1)]
                    ),
                    expected_result=VariableValue_IntegerValue(value=1),
                )
            ],
            method_name="string",
        )
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.problem.create_problem(
        request=CreateProblemRequest(
            problem_name="string",
            problem_description=ProblemDescription(
                boards=[ProblemDescriptionBoard_Html(value="string")]
            ),
            files={
                "JAVA": ProblemFiles(
                    solution_file=FileInfo(filename="string", contents="string"),
                    read_only_files=[FileInfo(filename="string", contents="string")],
                )
            },
            input_params=[
                VariableTypeAndName(variable_type=VariableType(), name="string")
            ],
            output_type=VariableType(),
            testcases=[
                TestCaseWithExpectedResult(
                    test_case=TestCase(
                        id="string", params=[VariableValue_IntegerValue(value=1)]
                    ),
                    expected_result=VariableValue_IntegerValue(value=1),
                )
            ],
            method_name="string",
        )
    )
    validate_response(async_response, expected_response, expected_types)


async def test_update_problem(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    expected_response = {"problemVersion": 1}
    expected_types = {"problemVersion": "integer"}
    response = client.problem.update_problem(
        problem_id="string",
        request=CreateProblemRequest(
            problem_name="string",
            problem_description=ProblemDescription(
                boards=[ProblemDescriptionBoard_Html(value="string")]
            ),
            files={
                "JAVA": ProblemFiles(
                    solution_file=FileInfo(filename="string", contents="string"),
                    read_only_files=[FileInfo(filename="string", contents="string")],
                )
            },
            input_params=[
                VariableTypeAndName(variable_type=VariableType(), name="string")
            ],
            output_type=VariableType(),
            testcases=[
                TestCaseWithExpectedResult(
                    test_case=TestCase(
                        id="string", params=[VariableValue_IntegerValue(value=1)]
                    ),
                    expected_result=VariableValue_IntegerValue(value=1),
                )
            ],
            method_name="string",
        ),
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.problem.update_problem(
        problem_id="string",
        request=CreateProblemRequest(
            problem_name="string",
            problem_description=ProblemDescription(
                boards=[ProblemDescriptionBoard_Html(value="string")]
            ),
            files={
                "JAVA": ProblemFiles(
                    solution_file=FileInfo(filename="string", contents="string"),
                    read_only_files=[FileInfo(filename="string", contents="string")],
                )
            },
            input_params=[
                VariableTypeAndName(variable_type=VariableType(), name="string")
            ],
            output_type=VariableType(),
            testcases=[
                TestCaseWithExpectedResult(
                    test_case=TestCase(
                        id="string", params=[VariableValue_IntegerValue(value=1)]
                    ),
                    expected_result=VariableValue_IntegerValue(value=1),
                )
            ],
            method_name="string",
        ),
    )
    validate_response(async_response, expected_response, expected_types)


async def test_delete_problem(client: SeedTrace, async_client: AsyncSeedTrace) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert client.problem.delete_problem(problem_id="string") is None  # type: ignore[func-returns-value]

    assert await async_client.problem.delete_problem(problem_id="string") is None  # type: ignore[func-returns-value]


async def test_get_default_starter_files(
    client: SeedTrace, async_client: AsyncSeedTrace
) -> None:
    expected_response = {
        "files": {
            "string": {
                "solutionFile": {"filename": "string", "contents": "string"},
                "readOnlyFiles": [{"filename": "string", "contents": "string"}],
            }
        }
    }
    expected_types = {
        "files": (
            "dict",
            {
                0: (
                    None,
                    {
                        "solutionFile": {"filename": None, "contents": None},
                        "readOnlyFiles": (
                            "list",
                            {0: {"filename": None, "contents": None}},
                        ),
                    },
                )
            },
        )
    }
    response = client.problem.get_default_starter_files(
        input_params=[VariableTypeAndName(variable_type=VariableType(), name="string")],
        output_type=VariableType(),
        method_name="string",
    )
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.problem.get_default_starter_files(
        input_params=[VariableTypeAndName(variable_type=VariableType(), name="string")],
        output_type=VariableType(),
        method_name="string",
    )
    validate_response(async_response, expected_response, expected_types)
