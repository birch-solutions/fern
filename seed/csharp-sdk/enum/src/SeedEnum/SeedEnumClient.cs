using SeedEnum.Core;

#nullable enable

namespace SeedEnum;

public partial class SeedEnumClient
{
    private RawClient _client;

    public SeedEnumClient(ClientOptions? clientOptions = null)
    {
        var defaultHeaders = new Headers(
            new Dictionary<string, string>()
            {
                { "X-Fern-Language", "C#" },
                { "User-Agent", "Fernenum/0.0.1" },
            }
        );
        clientOptions ??= new ClientOptions();
        foreach (var header in defaultHeaders)
        {
            if (!clientOptions.Headers.ContainsKey(header.Key))
            {
                clientOptions.Headers[header.Key] = header.Value;
            }
        }
        _client = new RawClient(clientOptions);
        InlinedRequest = new InlinedRequestClient(_client);
        PathParam = new PathParamClient(_client);
        QueryParam = new QueryParamClient(_client);
    }

    public InlinedRequestClient InlinedRequest { get; init; }

    public PathParamClient PathParam { get; init; }

    public QueryParamClient QueryParam { get; init; }
}
