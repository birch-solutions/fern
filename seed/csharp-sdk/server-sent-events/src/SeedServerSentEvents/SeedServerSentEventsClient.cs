using SeedServerSentEvents;
using SeedServerSentEvents.Core;

#nullable enable

namespace SeedServerSentEvents;

public partial class SeedServerSentEventsClient
{
    private RawClient _client;

    public SeedServerSentEventsClient(ClientOptions clientOptions = null)
    {
        _client = new RawClient(
            new Dictionary<string, string>() { { "X-Fern-Language", "C#" }, },
            clientOptions ?? new ClientOptions()
        );
        Completions = new CompletionsClient(_client);
    }

    public CompletionsClient Completions { get; }

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
