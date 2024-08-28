using System.Text.Json.Serialization;
using SeedExamples.Core;

#nullable enable

namespace SeedExamples;

public record ExtendedMovie
{
    [JsonPropertyName("cast")]
    public IEnumerable<string> Cast { get; set; } = new List<string>();

    [JsonPropertyName("id")]
    public required string Id { get; set; }

    [JsonPropertyName("prequel")]
    public string? Prequel { get; set; }

    [JsonPropertyName("title")]
    public required string Title { get; set; }

    [JsonPropertyName("from")]
    public required string From { get; set; }

    /// <summary>
    /// The rating scale is one to five stars
    /// </summary>
    [JsonPropertyName("rating")]
    public required double Rating { get; set; }

    [JsonPropertyName("type")]
    public required string Type { get; set; }

    [JsonPropertyName("tag")]
    public required string Tag { get; set; }

    [JsonPropertyName("book")]
    public string? Book { get; set; }

    [JsonPropertyName("metadata")]
    public object Metadata { get; set; } = new Dictionary<string, object?>();

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
