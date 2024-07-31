using System.Net.Http;
using SeedAudiences;
using SeedAudiences.Core;

#nullable enable

namespace SeedAudiences;

public class FooClient
{
    private RawClient _client;

    public FooClient(RawClient client)
    {
        _client = client;
    }

    public async Task<ImportingType> FindAsync(FindRequest request, RequestOptions? options = null)
    {
        var _query = new Dictionary<string, object>() { };
        if (request.OptionalString != null)
        {
            _query["optionalString"] = request.OptionalString;
        }
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "",
                Query = _query,
                Options = options
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<ImportingType>(responseBody)!;
        }
        throw new Exception(responseBody);
    }
}
