using SeedTrace.V2;
using System.Text.Json.Serialization;

namespace SeedTrace.V2;

public class TestCaseFunction
{
    public class _WithActualResult : TestCaseWithActualResultImplementation
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "withActualResult";
    }
    public class _Custom : VoidFunctionDefinition
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "custom";
    }
}
