using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace.V2;

public record VoidFunctionSignatureThatTakesActualResult
{
    [JsonPropertyName("parameters")]
    public IEnumerable<Parameter> Parameters { get; set; } = new List<Parameter>();

    [JsonPropertyName("actualResultType")]
    public required object ActualResultType { get; set; }
}
