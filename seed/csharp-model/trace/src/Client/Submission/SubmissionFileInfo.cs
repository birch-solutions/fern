using System.Text.Json.Serialization;

namespace Client;

public class SubmissionFileInfo
{
    [JsonPropertyName("directory")]
    public string Directory { get; init; }

    [JsonPropertyName("filename")]
    public string Filename { get; init; }

    [JsonPropertyName("contents")]
    public string Contents { get; init; }
}
