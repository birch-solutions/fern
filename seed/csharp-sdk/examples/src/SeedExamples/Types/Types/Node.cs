using System.Text.Json.Serialization;
using SeedExamples;

#nullable enable

namespace SeedExamples;

public record Node
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    [JsonPropertyName("nodes")]
    public IEnumerable<Node>? Nodes { get; set; }

    [JsonPropertyName("trees")]
    public IEnumerable<Tree>? Trees { get; set; }
}
