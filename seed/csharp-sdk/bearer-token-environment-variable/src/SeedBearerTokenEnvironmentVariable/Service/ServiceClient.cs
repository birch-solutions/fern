using System.Text.Json;
using SeedBearerTokenEnvironmentVariable;

#nullable enable

namespace SeedBearerTokenEnvironmentVariable;

public class ServiceClient
{
    private RawClient _client;

    public ServiceClient(RawClient client)
    {
        _client = client;
    }

    /// <summary>
    /// GET request with custom api key
    /// </summary>
    public async Task<string> GetWithBearerTokenAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = "/apiKey" }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<string>(responseBody);
        }
        throw new Exception();
    }
}
