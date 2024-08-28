using System.Text.Json.Serialization;
using OneOf;
using SeedApi.Core;

#nullable enable

namespace SeedApi;

public record Patient
{
    [JsonPropertyName("resource_type")]
    public required string ResourceType { get; set; }

    [JsonPropertyName("name")]
    public required string Name { get; set; }

    [JsonPropertyName("scripts")]
    public IEnumerable<Script> Scripts { get; set; } = new List<Script>();

    [JsonPropertyName("id")]
    public required string Id { get; set; }

    [JsonPropertyName("related_resources")]
    [JsonConverter(
        typeof(CollectionItemSerializer<
            OneOf<Account, Patient, Practitioner, Script>,
            OneOfSerializer<OneOf<Account, Patient, Practitioner, Script>>
        >)
    )]
    public IEnumerable<
        OneOf<Account, Patient, Practitioner, Script>
    > RelatedResources { get; set; } = new List<OneOf<Account, Patient, Practitioner, Script>>();

    [JsonPropertyName("memo")]
    public required Memo Memo { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
