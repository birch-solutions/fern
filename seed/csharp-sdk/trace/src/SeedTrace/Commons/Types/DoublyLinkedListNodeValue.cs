using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public class DoublyLinkedListNodeValue
{
    [JsonPropertyName("nodeId")]
    public string NodeId { get; init; }

    [JsonPropertyName("val")]
    public double Val { get; init; }

    [JsonPropertyName("next")]
    public string? Next { get; init; }

    [JsonPropertyName("prev")]
    public string? Prev { get; init; }
}
