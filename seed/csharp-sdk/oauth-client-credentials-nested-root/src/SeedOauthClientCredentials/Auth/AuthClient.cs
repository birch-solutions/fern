using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedOauthClientCredentials;
using SeedOauthClientCredentials.Core;

#nullable enable

namespace SeedOauthClientCredentials.Auth;

public partial class AuthClient
{
    private RawClient _client;

    internal AuthClient(RawClient client)
    {
        _client = client;
    }

    /// <example>
    /// <code>
    /// await client.Auth.GetTokenAsync(
    ///     new GetTokenRequest
    ///     {
    ///         ClientId = &quot;string&quot;,
    ///         ClientSecret = &quot;string&quot;,
    ///         Audience = &quot;https://api.example.com&quot;,
    ///         GrantType = &quot;client_credentials&quot;,
    ///         Scope = &quot;string&quot;,
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<TokenResponse> GetTokenAsync(
        GetTokenRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "/token",
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
                return JsonUtils.Deserialize<TokenResponse>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedOauthClientCredentialsException("Failed to deserialize response", e);
            }
        }

        throw new SeedOauthClientCredentialsApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
