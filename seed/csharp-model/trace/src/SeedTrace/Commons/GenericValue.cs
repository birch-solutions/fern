using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record GenericValue
{
    [JsonPropertyName("stringifiedType")]
    public string? StringifiedType { get; }

    [JsonPropertyName("stringifiedValue")]
    public required string StringifiedValue { get; }
}
