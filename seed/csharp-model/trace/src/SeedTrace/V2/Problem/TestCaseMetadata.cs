using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace.V2;

public record TestCaseMetadata
{
    [JsonPropertyName("id")]
    public required string Id { get; }

    [JsonPropertyName("name")]
    public required string Name { get; }

    [JsonPropertyName("hidden")]
    public required bool Hidden { get; }
}
