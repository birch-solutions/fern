using System.Text.Json.Serialization;
using SeedTrace.Core;

#nullable enable

namespace SeedTrace;

public record WorkspaceTracedUpdate
{
    [JsonPropertyName("traceResponsesSize")]
    public required int TraceResponsesSize { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
