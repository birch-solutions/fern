using System.Text.Json;
using SeedExamples;

#nullable enable

namespace SeedExamples.Health;

public class ServiceClient
{
    private RawClient _client;

    public ServiceClient(RawClient client)
    {
        _client = client;
    }

    /// <summary>
    /// This endpoint checks the health of a resource.
    /// </summary>
    public async void CheckAsync(string id)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = $"/check/{id}" }
        );
    }

    /// <summary>
    /// This endpoint checks the health of the service.
    /// </summary>
    public async Task<bool> PingAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = "/ping" }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<bool>(responseBody);
        }
        throw new Exception();
    }
}
