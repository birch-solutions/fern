using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record TestCaseResultWithStdout
{
    [JsonPropertyName("result")]
    public required TestCaseResult Result { get; set; }

    [JsonPropertyName("stdout")]
    public required string Stdout { get; set; }
}
