using System.Text.Json.Serialization;
using SeedTrace.V2;

#nullable enable

namespace SeedTrace.V2;

public record TestCaseV2
{
    [JsonPropertyName("metadata")]
    public required TestCaseMetadata Metadata { get; set; }

    [JsonPropertyName("implementation")]
    public required object Implementation { get; set; }

    [JsonPropertyName("arguments")]
    public Dictionary<string, object?> Arguments { get; set; } = new Dictionary<string, object?>();

    [JsonPropertyName("expects")]
    public TestCaseExpects? Expects { get; set; }
}
