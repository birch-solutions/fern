using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record UpdatePlaylistRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }

    /// <summary>
    /// The problems that make up the playlist.
    /// </summary>
    [JsonPropertyName("problems")]
    public IEnumerable<string> Problems { get; set; } = new List<string>();
}
