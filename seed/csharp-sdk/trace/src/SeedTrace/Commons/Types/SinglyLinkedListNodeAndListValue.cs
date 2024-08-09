using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record SinglyLinkedListNodeAndListValue
{
    [JsonPropertyName("nodeId")]
    public required string NodeId { get; set; }

    [JsonPropertyName("fullList")]
    public required SinglyLinkedListValue FullList { get; set; }
}
