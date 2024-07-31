using System.Net.Http;
using SeedObjectsWithImports.Core;

#nullable enable

namespace SeedObjectsWithImports;

public class OptionalClient
{
    private RawClient _client;

    public OptionalClient(RawClient client)
    {
        _client = client;
    }

    public async Task<string> SendOptionalBodyAsync(
        Dictionary<string, object?>? request,
        RequestOptions? options
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "send-optional-body",
                Body = request,
                Options = options
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<string>(responseBody)!;
        }
        throw new Exception(responseBody);
    }
}
