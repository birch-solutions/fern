using System.Text.Json.Serialization;

#nullable enable

namespace SeedExamples;

public record Actor
{
    [JsonPropertyName("name")]
    public required string Name { get; }

    [JsonPropertyName("id")]
    public required string Id { get; }
}
