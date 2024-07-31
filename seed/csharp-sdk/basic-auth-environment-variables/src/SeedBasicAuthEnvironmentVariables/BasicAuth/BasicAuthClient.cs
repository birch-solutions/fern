using System.Net.Http;
using System.Text.Json;
using SeedBasicAuthEnvironmentVariables;
using SeedBasicAuthEnvironmentVariables.Core;

#nullable enable

namespace SeedBasicAuthEnvironmentVariables;

public class BasicAuthClient
{
    private RawClient _client;

    public BasicAuthClient(RawClient client)
    {
        _client = client;
    }

    /// <summary>
    /// GET request with basic auth scheme
    /// </summary>
    public async Task<bool> GetWithBasicAuthAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = "basic-auth"
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<bool>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedBasicAuthEnvironmentVariablesException(
                    "Failed to deserialize response",
                    e
                );
            }
        }

        try
        {
            switch (response.StatusCode)
            {
                case 401:
                    throw new UnauthorizedRequest(
                        JsonUtils.Deserialize<UnauthorizedRequestErrorBody>(responseBody)
                    );
            }
        }
        catch (JsonException e)
        {
            // unable to map error response, throwing generic error
        }
        throw new SeedBasicAuthEnvironmentVariablesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            JsonUtils.Deserialize<object>(responseBody)
        );
    }

    /// <summary>
    /// POST request with basic auth scheme
    /// </summary>
    public async Task<bool> PostWithBasicAuthAsync(object request)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "basic-auth",
                Body = request
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            try
            {
                return JsonUtils.Deserialize<bool>(responseBody)!;
            }
            catch (JsonException e)
            {
                throw new SeedBasicAuthEnvironmentVariablesException(
                    "Failed to deserialize response",
                    e
                );
            }
        }

        try
        {
            switch (response.StatusCode)
            {
                case 401:
                    throw new UnauthorizedRequest(
                        JsonUtils.Deserialize<UnauthorizedRequestErrorBody>(responseBody)
                    );
                case 400:
                    throw new BadRequest(JsonUtils.Deserialize<object>(responseBody));
            }
        }
        catch (JsonException e)
        {
            // unable to map error response, throwing generic error
        }
        throw new SeedBasicAuthEnvironmentVariablesApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            JsonUtils.Deserialize<object>(responseBody)
        );
    }
}
