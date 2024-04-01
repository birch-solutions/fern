using System.Text.Json.Serialization;
using Client.Types;

namespace Client.Types;

public class NestedObjectWithOptionalField
{
    [JsonPropertyName("string")]
    public string? String { get; init; }

    [JsonPropertyName("NestedObject")]
    public ObjectWithOptionalField? NestedObject { get; init; }
}
