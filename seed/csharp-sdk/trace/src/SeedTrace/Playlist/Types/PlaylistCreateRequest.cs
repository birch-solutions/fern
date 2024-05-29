using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public class PlaylistCreateRequest
{
    [JsonPropertyName("name")]
    public string Name { get; init; }

    [JsonPropertyName("problems")]
    public List<string> Problems { get; init; }
}
