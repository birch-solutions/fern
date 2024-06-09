using SeedBasicAuth;

#nullable enable

namespace SeedBasicAuth;

public partial class SeedBasicAuthClient
{
    private RawClient _client;

    public SeedBasicAuthClient(
        string username = null,
        string password = null,
        ClientOptions clientOptions = null
    )
    {
        _client = new RawClient(
            new Dictionary<string, string>() { { "X-Fern-Language", "C#" }, },
            clientOptions ?? new ClientOptions()
        );
        BasicAuth = new BasicAuthClient(_client);
        Errors = new ErrorsClient(_client);
    }

    public BasicAuthClient BasicAuth { get; }

    public ErrorsClient Errors { get; }

    private string GetFromEnvironmentOrThrow(string env, string message)
    {
        var value = Environment.GetEnvironmentVariable(env);
        if (value == null)
        {
            throw new Exception(message);
        }
        return value;
    }
}
