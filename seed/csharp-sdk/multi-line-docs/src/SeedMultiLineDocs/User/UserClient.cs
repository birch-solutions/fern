using System.Text.Json;
using SeedMultiLineDocs;

#nullable enable

namespace SeedMultiLineDocs;

public class UserClient
{
    private RawClient _client;

    public UserClient(RawClient client)
    {
        _client = client;
    }

    /// <summary>
    /// Retrieve a user.
    /// This endpoint is used to retrieve a user.
    /// </summary>
    public async void GetUserAsync(string userId)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = $"/users/{userId}" }
        );
    }

    /// <summary>
    /// Create a new user.
    /// This endpoint is used to create a new user.
    /// </summary>
    public async Task<User> CreateUserAsync(CreateUserRequest request)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Post,
                Path = "/users",
                Body = request
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<User>(responseBody);
        }
        throw new Exception();
    }
}
