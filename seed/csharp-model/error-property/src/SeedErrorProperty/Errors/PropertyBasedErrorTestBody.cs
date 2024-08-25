using System.Text.Json.Serialization;
using SeedErrorProperty.Core;

#nullable enable

namespace SeedErrorProperty;

public record PropertyBasedErrorTestBody
{
    [JsonPropertyName("message")]
    public required string Message { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
