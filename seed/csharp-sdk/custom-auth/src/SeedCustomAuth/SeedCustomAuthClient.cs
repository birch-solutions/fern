using SeedCustomAuth;

#nullable enable

namespace SeedCustomAuth;

public partial class SeedCustomAuthClient
{
    private RawClient _client;

    public SeedCustomAuthClient(string customAuthScheme = null, ClientOptions clientOptions = null)
    {
        _client = new RawClient(
            new Dictionary<string, string>()
            {
                { "X-API-KEY", customAuthScheme },
                { "X-Fern-Language", "C#" },
            },
            clientOptions ?? new ClientOptions()
        );
        CustomAuth = new CustomAuthClient(_client);
        Errors = new ErrorsClient(_client);
    }

    public CustomAuthClient CustomAuth { get; }

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
