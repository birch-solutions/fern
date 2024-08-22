using SeedStreaming.Core;

#nullable enable

namespace SeedStreaming;

public partial class SeedStreamingClient
{
    private RawClient _client;

    public SeedStreamingClient(ClientOptions? clientOptions = null)
    {
        var defaultHeaders = new Headers(
            new Dictionary<string, string>()
            {
                { "X-Fern-Language", "C#" },
                { "User-Agent", "Fernstreaming-parameter/0.0.1" },
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
        Dummy = new DummyClient(_client);
    }

    public DummyClient Dummy { get; init; }
}
