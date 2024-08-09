using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record WorkspaceSubmissionStatusV2
{
    [JsonPropertyName("updates")]
    public IEnumerable<WorkspaceSubmissionUpdate> Updates { get; set; } =
        new List<WorkspaceSubmissionUpdate>();
}
