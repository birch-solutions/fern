using System.Net.Http;
using System.Threading.Tasks;
using SeedApi.Core;

#nullable enable

namespace SeedApi.A.C;

public class CClient
{
    private RawClient _client;

    public CClient(RawClient client)
    {
        _client = client;
    }

    public async Task FooAsync(RequestOptions? options = null)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "",
                Options = options
            }
        );
        if (response.StatusCode is >= 200 and < 400)
        {
            return;
        }
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        throw new SeedApiApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            JsonUtils.Deserialize<object>(responseBody)
        );
    }
}
