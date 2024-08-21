using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedTrace.Core;

#nullable enable

namespace SeedTrace;

public partial class MigrationClient
{
    private RawClient _client;

    internal MigrationClient(RawClient client)
    {
        _client = client;
    }

    public async Task<IEnumerable<Migration>> GetAttemptedMigrationsAsync(
        GetAttemptedMigrationsRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var _headers = new Headers(
            new Dictionary<string, string>() { { "admin-key-header", request.AdminKeyHeader } }
        );
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = "/migration-info/all",
                Headers = _headers,
                Options = options,
            },
            cancellationToken
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<IEnumerable<Migration>>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedTraceException("Failed to deserialize response", e);
            }
        }

        throw new SeedTraceApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
