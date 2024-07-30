using System.Text.Json.Serialization;
using SeedTrace.V2;

#nullable enable

namespace SeedTrace.V2;

public record VoidFunctionDefinitionThatTakesActualResult
{
    [JsonPropertyName("additionalParameters")]
    public IEnumerable<Parameter> AdditionalParameters { get; } = new List<Parameter>();

    [JsonPropertyName("code")]
    public required FunctionImplementationForMultipleLanguages Code { get; }
}
