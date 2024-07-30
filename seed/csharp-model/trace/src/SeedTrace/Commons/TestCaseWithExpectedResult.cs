using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public record TestCaseWithExpectedResult
{
    [JsonPropertyName("testCase")]
    public required TestCase TestCase { get; }

    [JsonPropertyName("expectedResult")]
    public required object ExpectedResult { get; }
}
