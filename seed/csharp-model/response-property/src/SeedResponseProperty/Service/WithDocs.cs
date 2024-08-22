using System.Text.Json.Serialization;
using SeedResponseProperty.Core;

#nullable enable

namespace SeedResponseProperty;

public record WithDocs
{
    [JsonPropertyName("docs")]
    public required string Docs { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
