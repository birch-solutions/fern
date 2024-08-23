using System.Text.Json.Serialization;
using SeedUnions.Core;

#nullable enable

namespace SeedUnions;

public record Circle
{
    [JsonPropertyName("radius")]
    public required double Radius { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
