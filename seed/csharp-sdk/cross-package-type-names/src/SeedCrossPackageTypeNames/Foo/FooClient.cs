using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedCrossPackageTypeNames.Core;

#nullable enable

namespace SeedCrossPackageTypeNames;

public partial class FooClient
{
    private RawClient _client;

    internal FooClient(RawClient client)
    {
        _client = client;
    }

    public async Task<ImportingType> FindAsync(
        FindRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var _query = new Dictionary<string, object>();
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
                Options = options,
            },
            cancellationToken
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<ImportingType>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedCrossPackageTypeNamesException("Failed to deserialize response", e);
            }
        }

        throw new SeedCrossPackageTypeNamesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
