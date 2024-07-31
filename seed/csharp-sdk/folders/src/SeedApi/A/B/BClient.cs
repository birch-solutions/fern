using System.Net.Http;
using SeedApi.Core;

#nullable enable

namespace SeedApi.A.B;

public class BClient
{
    private RawClient _client;

    public BClient(RawClient client)
    {
        _client = client;
    }

    public async Task FooAsync(RequestOptions? options)
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "",
                Options = options
            }
        );
    }
}
