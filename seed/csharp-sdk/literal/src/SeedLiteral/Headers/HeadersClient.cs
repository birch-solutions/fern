using System.Text.Json;
using SeedLiteral;

#nullable enable

namespace SeedLiteral;

public class HeadersClient
{
    private RawClient _client;

    public HeadersClient(RawClient client)
    {
        _client = client;
    }

    public async Task<SendResponse> SendAsync(SendLiteralsInHeadersRequest request)
    {
        var _headers = new Dictionary<string, string>()
        {
            { "X-Endpoint-Version", request.EndpointVersion.ToString() },
            { "X-Async", request.Async.ToString() },
        };
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Post,
                Path = "/headers",
                Headers = _headers
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<SendResponse>(responseBody);
        }
        throw new Exception();
    }
}
