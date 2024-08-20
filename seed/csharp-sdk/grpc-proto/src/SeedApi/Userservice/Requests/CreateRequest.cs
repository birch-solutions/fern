using System.Text.Json.Serialization;
using Proto = User.V1;

#nullable enable

namespace SeedApi;

public record CreateRequest
{
    [JsonPropertyName("username")]
    public string? Username { get; set; }

    [JsonPropertyName("email")]
    public string? Email { get; set; }

    [JsonPropertyName("age")]
    public uint? Age { get; set; }

    [JsonPropertyName("weight")]
    public float? Weight { get; set; }

    [JsonPropertyName("metadata")]
    public Metadata? Metadata { get; set; }

    /// <summary>
    /// Maps the CreateRequest type into its Protobuf-equivalent representation.
    /// </summary>
    internal Proto.CreateRequest ToProto()
    {
        var result = new Proto.CreateRequest();
        if (Username != null)
        {
            result.Username = Username ?? "";
        }
        if (Email != null)
        {
            result.Email = Email ?? "";
        }
        if (Age != null)
        {
            result.Age = Age ?? 0U;
        }
        if (Weight != null)
        {
            result.Weight = Weight ?? 0.0f;
        }
        if (Metadata != null)
        {
            result.Metadata = Metadata.ToProto();
        }
        return result;
    }
}
