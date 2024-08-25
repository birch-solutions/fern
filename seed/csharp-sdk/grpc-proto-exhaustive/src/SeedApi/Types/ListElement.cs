using System.Text.Json.Serialization;
using Proto = Data.V1.Grpc;

#nullable enable

namespace SeedApi;

public record ListElement
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }

    /// <summary>
    /// Maps the ListElement type into its Protobuf-equivalent representation.
    /// </summary>
    internal Proto.ListElement ToProto()
    {
        var result = new Proto.ListElement();
        if (Id != null)
        {
            result.Id = Id ?? "";
        }
        return result;
    }
}
