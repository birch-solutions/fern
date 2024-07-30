using System.Text.Json.Serialization;
using SeedTrace.V2;

#nullable enable

namespace SeedTrace.V2;

public record TestCaseTemplate
{
    [JsonPropertyName("templateId")]
    public required string TemplateId { get; }

    [JsonPropertyName("name")]
    public required string Name { get; }

    [JsonPropertyName("implementation")]
    public required TestCaseImplementation Implementation { get; }
}
