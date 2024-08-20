using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedLiteral.Core;

#nullable enable

namespace SeedLiteral;

public partial class QueryClient
{
    private RawClient _client;

    internal QueryClient(RawClient client)
    {
        _client = client;
    }

    public async Task<SendResponse> SendAsync(
        SendLiteralsInQueryRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var _query = new Dictionary<string, object>();
        _query["prompt"] = request.Prompt.ToString();
        _query["query"] = request.Query;
        _query["stream"] = request.Stream.ToString();
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "query",
                Query = _query,
                Options = options,
            },
            cancellationToken
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<SendResponse>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedLiteralException("Failed to deserialize response", e);
            }
        }

        throw new SeedLiteralApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
