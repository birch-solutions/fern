using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public record RecordingResponseNotification
{
    [JsonPropertyName("submissionId")]
    public required string SubmissionId { get; }

    [JsonPropertyName("testCaseId")]
    public string? TestCaseId { get; }

    [JsonPropertyName("lineNumber")]
    public required int LineNumber { get; }

    [JsonPropertyName("lightweightStackInfo")]
    public required LightweightStackframeInformation LightweightStackInfo { get; }

    [JsonPropertyName("tracedFile")]
    public TracedFile? TracedFile { get; }
}
