using System.Text.Json.Serialization;
using SeedMixedFileDirectory.Core;

#nullable enable

namespace SeedMixedFileDirectory;

public record CreateOrganizationRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
