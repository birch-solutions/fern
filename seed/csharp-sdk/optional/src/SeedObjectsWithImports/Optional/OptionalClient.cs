using System.Text.Json;
using SeedObjectsWithImports;

#nullable enable

namespace SeedObjectsWithImports;

public class OptionalClient
{
    private RawClient _client;

    public OptionalClient(RawClient client)
    {
        _client = client;
    }

    public async Task<string> SendOptionalBodyAsync(Dictionary<string, object>? request)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Post,
                Path = "/send-optional-body",
                Body = request
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<string>(responseBody);
        }
        throw new Exception();
    }
}
