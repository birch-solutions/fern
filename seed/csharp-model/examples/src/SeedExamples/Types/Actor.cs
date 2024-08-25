using System.Text.Json.Serialization;
using SeedExamples.Core;

#nullable enable

namespace SeedExamples;

public record Actor
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    [JsonPropertyName("id")]
    public required string Id { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
