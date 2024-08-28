using System.Net.Http;
using System.Text.Json;
using System.Threading;
using SeedOauthClientCredentialsEnvironmentVariables.Core;

#nullable enable

namespace SeedOauthClientCredentialsEnvironmentVariables;

public partial class AuthClient
{
    private RawClient _client;

    internal AuthClient(RawClient client)
    {
        _client = client;
    }

    /// <example>
    /// <code>
    /// await client.Auth.GetTokenWithClientCredentialsAsync(
    ///     new GetTokenRequest
    ///     {
    ///         ClientId = "string",
    ///         ClientSecret = "string",
    ///         Audience = "https://api.example.com",
    ///         GrantType = "client_credentials",
    ///         Scope = "string",
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<TokenResponse> GetTokenWithClientCredentialsAsync(
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
                throw new SeedOauthClientCredentialsEnvironmentVariablesException(
                    "Failed to deserialize response",
                    e
                );
            }
        }

        throw new SeedOauthClientCredentialsEnvironmentVariablesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }

    /// <example>
    /// <code>
    /// await client.Auth.RefreshTokenAsync(
    ///     new RefreshTokenRequest
    ///     {
    ///         ClientId = "string",
    ///         ClientSecret = "string",
    ///         RefreshToken = "string",
    ///         Audience = "https://api.example.com",
    ///         GrantType = "refresh_token",
    ///         Scope = "string",
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<TokenResponse> RefreshTokenAsync(
        RefreshTokenRequest request,
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
                throw new SeedOauthClientCredentialsEnvironmentVariablesException(
                    "Failed to deserialize response",
                    e
                );
            }
        }

        throw new SeedOauthClientCredentialsEnvironmentVariablesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
