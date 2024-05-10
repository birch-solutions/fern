using System.Text.Json;
using SeedLiteral;

namespace SeedLiteral;

public class QueryClient
{
    private RawClient _client;

    public QueryClient(RawClient client)
    {
        _client = client;
    }

    public async SendResponse SendAsync(SendLiteralsInQueryRequest request)
    {
        var _query = new Dictionary<string, string>()
        {
            { "prompt", request.Prompt.ToString() },
            { "query", request.Query },
            { "stream", request.Stream.ToString() },
        };
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Post,
                Path = "/query",
                Query = _query
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (responseBody.StatusCode >= 200 && responseBody.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<SendResponse>(responseBody);
        }
        throw new Exception();
    }
}
