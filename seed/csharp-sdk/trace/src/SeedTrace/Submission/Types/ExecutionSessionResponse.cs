using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record ExecutionSessionResponse
{
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; set; }

    [JsonPropertyName("executionSessionUrl")]
    public string? ExecutionSessionUrl { get; set; }

    [JsonPropertyName("language")]
    public required Language Language { get; set; }

    [JsonPropertyName("status")]
    public required ExecutionSessionStatus Status { get; set; }
}
