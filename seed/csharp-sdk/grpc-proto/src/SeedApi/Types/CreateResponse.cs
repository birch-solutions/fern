using System.Text.Json.Serialization;
using Proto = User.V1;

#nullable enable

namespace SeedApi;

public record CreateResponse
{
    [JsonPropertyName("user")]
    public UserModel? User { get; set; }

    /// <summary>
    /// Maps the CreateResponse type into its Protobuf-equivalent representation.
    /// </summary>
    internal Proto.CreateResponse ToProto()
    {
        var result = new Proto.CreateResponse();
        if (User != null)
        {
            result.User = User.ToProto();
        }
        return result;
    }

    /// <summary>
    /// Returns a new CreateResponse type from its Protobuf-equivalent representation.
    /// </summary>
    internal static CreateResponse FromProto(Proto.CreateResponse value)
    {
        return new CreateResponse
        {
            User = value.User != null ? UserModel.FromProto(value.User) : null
        };
    }
}
