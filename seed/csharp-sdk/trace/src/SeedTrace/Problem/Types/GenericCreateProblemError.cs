using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public class GenericCreateProblemError
{
    [JsonPropertyName("message")]
    public string Message { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; init; }

    [JsonPropertyName("stacktrace")]
    public string Stacktrace { get; init; }
}
