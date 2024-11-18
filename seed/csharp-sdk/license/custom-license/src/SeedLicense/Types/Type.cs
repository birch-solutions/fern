using System.Text.Json.Serialization;
using SeedLicense.Core;

#nullable enable

namespace SeedLicense;

public record Type
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
