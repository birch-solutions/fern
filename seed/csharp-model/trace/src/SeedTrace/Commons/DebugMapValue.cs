using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public class DebugMapValue
{
    [JsonPropertyName("keyValuePairs")]
    public List<DebugKeyValuePairs> KeyValuePairs { get; init; }
}
