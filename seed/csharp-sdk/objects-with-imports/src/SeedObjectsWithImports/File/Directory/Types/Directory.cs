using System.Text.Json.Serialization;
using SeedObjectsWithImports.File.Types;

#nullable enable

namespace SeedObjectsWithImports.File.Directory.Types;

public record Directory
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("files")]
    public IEnumerable<File>? Files { get; init; }

    [JsonPropertyName("directories")]
    public IEnumerable<Directory>? Directories { get; init; }
}
