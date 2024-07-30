using System.Text.Json.Serialization;

#nullable enable

namespace SeedPackageYml;

public record EchoRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; }

    [JsonPropertyName("size")]
    public required int Size { get; }
}
