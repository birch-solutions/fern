using System.Net.Http;
using SeedExamples.Core;

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
    public async Task CheckAsync(string id, RequestOptions? options)
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = $"/check/{id}",
                Options = options
            }
        );
    }

    /// <summary>
    /// This endpoint checks the health of the service.
    /// </summary>
    public async Task<bool> PingAsync(RequestOptions? options)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = "/ping",
                Options = options
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<bool>(responseBody)!;
        }
        throw new Exception(responseBody);
    }
}
