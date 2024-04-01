using System.Text.Json.Serialization;
using StringEnum;
using SeedExamples;

namespace SeedExamples;

public class Migration
{
    [JsonPropertyName("name")]
    public string Name { get; init; }

    [JsonPropertyName("status")]
    public StringEnum<MigrationStatus> Status { get; init; }
}
