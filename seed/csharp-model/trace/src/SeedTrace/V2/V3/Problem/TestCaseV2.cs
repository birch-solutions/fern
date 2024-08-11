using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace.V2.V3;

public record TestCaseV2
{
    [JsonPropertyName("metadata")]
    public required TestCaseMetadata Metadata { get; set; }

    [JsonPropertyName("implementation")]
    public required object Implementation { get; set; }

    [JsonPropertyName("arguments")]
    public object Arguments { get; set; } = new Dictionary<string, object?>();

    [JsonPropertyName("expects")]
    public TestCaseExpects? Expects { get; set; }
}
