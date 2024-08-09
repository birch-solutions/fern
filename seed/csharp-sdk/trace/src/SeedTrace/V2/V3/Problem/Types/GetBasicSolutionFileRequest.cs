using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace.V2.V3;

public record GetBasicSolutionFileRequest
{
    [JsonPropertyName("methodName")]
    public required string MethodName { get; set; }

    [JsonPropertyName("signature")]
    public required NonVoidFunctionSignature Signature { get; set; }
}
