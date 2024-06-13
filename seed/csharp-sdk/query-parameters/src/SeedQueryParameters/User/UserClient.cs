using System.Text.Json;
using SeedQueryParameters;

#nullable enable

namespace SeedQueryParameters;

public class UserClient
{
    private RawClient _client;

    public UserClient(RawClient client)
    {
        _client = client;
    }

    public async Task<User> GetUsernameAsync(GetUsersRequest request)
    {
        var _query = new Dictionary<string, object>()
        {
            { "limit", request.Limit.ToString() },
            { "id", request.Id.ToString() },
            { "date", request.Date.ToString() },
            { "deadline", request.Deadline.ToString() },
            { "bytes", request.Bytes.ToString() },
            { "user", request.User.ToString() },
            { "userList", request.UserList.ToString() },
            { "keyValue", request.KeyValue.ToString() },
            { "nestedUser", request.NestedUser.ToString() },
            { "excludeUser", request.ExcludeUser.ToString() },
            { "filter", request.Filter },
        };
        if (request.OptionalString != null)
        {
            _query["optionalString"] = request.OptionalString;
        }
        if (request.OptionalUser != null)
        {
            _query["optionalUser"] = request.OptionalUser;
        }
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Get,
                Path = "",
                Query = _query
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<User>(responseBody);
        }
        throw new Exception(responseBody);
    }
}
