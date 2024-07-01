using System.Text.Json.Serialization;
using SeedExhaustive.Types;

#nullable enable

namespace SeedExhaustive.Types;

public class NestedObjectWithOptionalField
{
    [JsonPropertyName("string")]
    public string? String { get; init; }

    [JsonPropertyName("NestedObject")]
    public ObjectWithOptionalField? NestedObject { get; init; }
}
