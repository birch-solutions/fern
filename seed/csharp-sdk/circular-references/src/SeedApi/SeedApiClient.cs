using SeedApi;
using SeedApi.Core;

#nullable enable

namespace SeedApi;

public partial class SeedApiClient
{
    private RawClient _client;

    public SeedApiClient(ClientOptions? clientOptions = null)
    {
        _client = new RawClient(
            new Dictionary<string, string>() { { "X-Fern-Language", "C#" }, },
            clientOptions ?? new ClientOptions()
        );
        A = new AClient(_client);
        Ast = new AstClient(_client);
    }

    public AClient A { get; }

    public AstClient Ast { get; }
}
