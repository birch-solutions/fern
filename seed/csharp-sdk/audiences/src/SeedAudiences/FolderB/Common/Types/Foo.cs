using System.Text.Json.Serialization;
using SeedAudiences.FolderC;

#nullable enable

namespace SeedAudiences.FolderB;

public class Foo
{
    [JsonPropertyName("foo")]
    public Foo? Foo_ { get; init; }
}
