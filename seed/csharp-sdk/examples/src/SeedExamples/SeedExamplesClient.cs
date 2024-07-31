using System;
using System.Net.Http;
using SeedExamples;
using SeedExamples.Commons;
using SeedExamples.Core;
using SeedExamples.File;
using SeedExamples.Health;

#nullable enable

namespace SeedExamples;

public partial class SeedExamplesClient
{
    private RawClient _client;

    public SeedExamplesClient(string token, ClientOptions? clientOptions = null)
    {
        _client = new RawClient(
            new Dictionary<string, string>() { { "X-Fern-Language", "C#" }, },
            new Dictionary<string, Func<string>>() { },
            clientOptions ?? new ClientOptions()
        );
        Commons = new CommonsClient(_client);
        File = new FileClient(_client);
        Health = new HealthClient(_client);
        Service = new ServiceClient(_client);
        Types = new TypesClient(_client);
    }

    public CommonsClient Commons { get; init; }

    public FileClient File { get; init; }

    public HealthClient Health { get; init; }

    public ServiceClient Service { get; init; }

    public TypesClient Types { get; init; }

    public async Task<string> EchoAsync(string request, RequestOptions? options)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "",
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
