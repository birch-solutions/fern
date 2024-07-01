using System.Text.Json.Serialization;

#nullable enable

namespace SeedApi;

public class Movie
{
    [JsonPropertyName("id")]
    public string Id { get; init; }

    [JsonPropertyName("title")]
    public string Title { get; init; }

    /// <summary>
    /// The rating scale is one to five stars
    /// </summary>
    [JsonPropertyName("rating")]
    public double Rating { get; init; }
}
