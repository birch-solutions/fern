using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public class ListType
{
    [JsonPropertyName("valueType")]
    public VariableType ValueType { get; init; }

    /// <summary>
    /// Whether this list is fixed-size (for languages that supports fixed-size lists). Defaults to false.
    /// </summary>
    [JsonPropertyName("isFixedLength")]
    public bool? IsFixedLength { get; init; }
}
