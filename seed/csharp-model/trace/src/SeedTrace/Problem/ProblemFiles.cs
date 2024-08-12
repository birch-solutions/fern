using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record ProblemFiles
{
    [JsonPropertyName("solutionFile")]
    public required FileInfo SolutionFile { get; set; }

    [JsonPropertyName("readOnlyFiles")]
    public IEnumerable<FileInfo> ReadOnlyFiles { get; set; } = new List<FileInfo>();
}
