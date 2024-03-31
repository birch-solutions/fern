using System.Text.Json.Serialization;
using Client.V2.V3;

namespace Client.V2.V3;

public class VoidFunctionDefinition
{
    [JsonPropertyName("parameters")]
    public List<Parameter> Parameters { get; init; }

    [JsonPropertyName("code")]
    public FunctionImplementationForMultipleLanguages Code { get; init; }
}
