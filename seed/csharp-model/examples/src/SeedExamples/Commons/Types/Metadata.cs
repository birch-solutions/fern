using System.Text.Json.Serialization;

#nullable enable

namespace SeedExamples.Commons;

public record Metadata
{
    [JsonPropertyName("id")]
    public required string Id { get; }

    [JsonPropertyName("data")]
    public Dictionary<string, string>? Data { get; }

    [JsonPropertyName("jsonString")]
    public string? JsonString { get; }
}
