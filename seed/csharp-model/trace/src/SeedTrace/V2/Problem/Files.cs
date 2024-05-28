using System.Text.Json.Serialization;
using SeedTrace.V2;

#nullable enable

namespace SeedTrace.V2;

public class Files
{
    [JsonPropertyName("files")]
    public List<FileInfoV2> Files_ { get; init; }
}
