using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record TracedTestCase
{
    [JsonPropertyName("result")]
    public required TestCaseResultWithStdout Result { get; set; }

    [JsonPropertyName("traceResponsesSize")]
    public required int TraceResponsesSize { get; set; }
}
