using System.Text.Json.Serialization;
using SeedTrace.Core;

#nullable enable

namespace SeedTrace.V2;

public record GetBasicSolutionFileRequest
{
    [JsonPropertyName("methodName")]
    public required string MethodName { get; set; }

    [JsonPropertyName("signature")]
    public required NonVoidFunctionSignature Signature { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
