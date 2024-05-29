using System.Text.Json.Serialization;
using SeedTrace.V2.V3;

#nullable enable

namespace SeedTrace.V2.V3;

public class GetFunctionSignatureRequest
{
    [JsonPropertyName("functionSignature")]
    public FunctionSignature FunctionSignature { get; init; }
}
