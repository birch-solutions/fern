using System.Net.Http;
using SeedExhaustive.Core;
using SeedExhaustive.ReqWithHeaders;

#nullable enable

namespace SeedExhaustive.ReqWithHeaders;

public class ReqWithHeadersClient
{
    private RawClient _client;

    public ReqWithHeadersClient(RawClient client)
    {
        _client = client;
    }

    public async Task GetWithCustomHeaderAsync(ReqWithHeaders request)
    {
        var _headers = new Dictionary<string, string>()
        {
            { "X-TEST-ENDPOINT-HEADER", request.XTestEndpointHeader },
        };
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "/test-headers/custom-header",
                Body = request.Body,
                Headers = _headers
            }
        );
    }
}
