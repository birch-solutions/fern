using Client.V2.V3;
using System.Text.Json.Serialization;

namespace Client.V2.V3;

public class FunctionSignature
{
    public class _Void : VoidFunctionSignature
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "void";
    }
    public class _NonVoid : NonVoidFunctionSignature
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "nonVoid";
    }
    public class _VoidThatTakesActualResult : VoidFunctionSignatureThatTakesActualResult
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "voidThatTakesActualResult";
    }
}
