using System.Text.Json.Serialization;

#nullable enable

namespace SeedExhaustive.Types;

public class ObjectWithMapOfMap
{
    [JsonPropertyName("map")]
    public Dictionary<string, Dictionary<string, string>> Map { get; init; }
}
