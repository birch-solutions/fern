using System.Text.Json.Serialization;
using SeedBasicAuthEnvironmentVariables.Core;

#nullable enable

namespace SeedBasicAuthEnvironmentVariables;

public record UnauthorizedRequestErrorBody
{
    [JsonPropertyName("message")]
    public required string Message { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
