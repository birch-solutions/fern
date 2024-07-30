using System.Text.Json.Serialization;
using SeedTrace.V2.V3;

#nullable enable

namespace SeedTrace.V2.V3;

public record Files
{
    [JsonPropertyName("files")]
    public IEnumerable<FileInfoV2> Files_ { get; } = new List<FileInfoV2>();
}
