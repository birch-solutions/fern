using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedExtraProperties.Core;

#nullable enable

namespace SeedExtraProperties;

public partial class UserClient
{
    private RawClient _client;

    internal UserClient(RawClient client)
    {
        _client = client;
    }

    /// <example>
    /// <code>
    /// await client.User.CreateUserAsync(
    ///     new CreateUserRequest
    ///     {
    ///         Type = "CreateUserRequest",
    ///         Version = "v1",
    ///         Name = "string",
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<User> CreateUserAsync(
        CreateUserRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "/user",
                Body = request,
                Options = options,
            },
            cancellationToken
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<User>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedExtraPropertiesException("Failed to deserialize response", e);
            }
        }

        throw new SeedExtraPropertiesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
