using System.Text.Json.Serialization;

namespace Client;

public class Type
{
    [JsonPropertyName("id")]
    public string Id { get; init; }

    [JsonPropertyName("name")]
    public string Name { get; init; }
}
