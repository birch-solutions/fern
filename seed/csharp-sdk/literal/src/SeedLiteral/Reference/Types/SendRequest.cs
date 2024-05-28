using System.Text.Json.Serialization;

#nullable enable

namespace SeedLiteral;

public class SendRequest
{
    [JsonPropertyName("prompt")]
    public string Prompt { get; init; }

    [JsonPropertyName("query")]
    public string Query { get; init; }

    [JsonPropertyName("stream")]
    public bool Stream { get; init; }
}
