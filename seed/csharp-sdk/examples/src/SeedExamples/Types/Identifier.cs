using System.Text.Json.Serialization;
using OneOf;
using SeedExamples.Core;

#nullable enable

namespace SeedExamples;

public record Identifier
{
    [JsonPropertyName("type")]
    [JsonConverter(typeof(OneOfSerializer<OneOf<BasicType, ComplexType>>))]
    public required OneOf<BasicType, ComplexType> Type { get; set; }

    [JsonPropertyName("value")]
    public required string Value { get; set; }

    [JsonPropertyName("label")]
    public required string Label { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
