using System.Text.Json.Serialization;
using SeedTrace;
using SeedTrace.V2.V3;

#nullable enable

namespace SeedTrace.V2.V3;

public record CreateProblemRequestV2
{
    [JsonPropertyName("problemName")]
    public required string ProblemName { get; set; }

    [JsonPropertyName("problemDescription")]
    public required ProblemDescription ProblemDescription { get; set; }

    [JsonPropertyName("customFiles")]
    public required object CustomFiles { get; set; }

    [JsonPropertyName("customTestCaseTemplates")]
    public IEnumerable<TestCaseTemplate> CustomTestCaseTemplates { get; set; } =
        new List<TestCaseTemplate>();

    [JsonPropertyName("testcases")]
    public IEnumerable<TestCaseV2> Testcases { get; set; } = new List<TestCaseV2>();

    [JsonPropertyName("supportedLanguages")]
    public HashSet<Language> SupportedLanguages { get; set; } = new HashSet<Language>();

    [JsonPropertyName("isPublic")]
    public required bool IsPublic { get; set; }
}
