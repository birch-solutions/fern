using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedObjectsWithImports.Core;

#nullable enable

namespace SeedObjectsWithImports;

public partial class OptionalClient
{
    private RawClient _client;

    internal OptionalClient(RawClient client)
    {
        _client = client;
    }

    /// <example>
    /// <code>
    /// await client.Optional.SendOptionalBodyAsync(
    ///     new Dictionary<string, object>()
    ///     {
    ///         {
    ///             "string",
    ///             new Dictionary<object, object?>() { { "key", "value" } }
    ///         },
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<string> SendOptionalBodyAsync(
        Dictionary<string, object?>? request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "send-optional-body",
                Body = request,
                Options = options,
            },
            cancellationToken
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<string>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedObjectsWithImportsException("Failed to deserialize response", e);
            }
        }

        throw new SeedObjectsWithImportsApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
