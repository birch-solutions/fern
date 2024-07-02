using System.Text.Json;
using SeedValidation;
using SeedValidation.Core;

#nullable enable

namespace SeedValidation;

public partial class SeedValidationClient
{
    private RawClient _client;

    public SeedValidationClient(ClientOptions clientOptions = null)
    {
        _client = new RawClient(
            new Dictionary<string, string>() { { "X-Fern-Language", "C#" }, },
            clientOptions ?? new ClientOptions()
        );
    }

    public async Task<Type> CreateAsync(CreateRequest request)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                Method = HttpMethod.Post,
                Path = "/create",
                Body = request
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<Type>(responseBody);
        }
        throw new Exception(responseBody);
    }

    public async Task<Type> GetAsync(GetRequest request)
    {
        var _query = new Dictionary<string, object>()
        {
            { "decimal", request.Decimal.ToString() },
            { "even", request.Even.ToString() },
            { "name", request.Name },
        };
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                Method = HttpMethod.Get,
                Path = "",
                Query = _query
            }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<Type>(responseBody);
        }
        throw new Exception(responseBody);
    }

    private string GetFromEnvironmentOrThrow(string env, string message)
    {
        var value = System.Environment.GetEnvironmentVariable(env);
        if (value == null)
        {
            throw new Exception(message);
        }
        return value;
    }
}
