using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public class WorkspaceSubmissionStatusV2
{
    [JsonPropertyName("updates")]
    public IEnumerable<WorkspaceSubmissionUpdate> Updates { get; init; }
}
