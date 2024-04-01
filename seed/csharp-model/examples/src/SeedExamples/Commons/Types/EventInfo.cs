using SeedExamples.Commons;
using System.Text.Json.Serialization;

namespace SeedExamples.Commons;

public class EventInfo
{
    public class _Metadata : Metadata
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "metadata";
    }
    public class _Tag
    {
        [JsonPropertyName("type")]
        public string Type { get; } = "tag";

        [JsonPropertyName("value")]
        public string Value { get; init; }
    }
}
