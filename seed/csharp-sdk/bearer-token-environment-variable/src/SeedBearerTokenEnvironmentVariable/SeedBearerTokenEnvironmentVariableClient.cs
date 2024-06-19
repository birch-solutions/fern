using SeedBearerTokenEnvironmentVariable;

#nullable enable

namespace SeedBearerTokenEnvironmentVariable;

public partial class SeedBearerTokenEnvironmentVariableClient
{
    private RawClient _client;

    public SeedBearerTokenEnvironmentVariableClient (string apiKey = null, ClientOptions clientOptions = null) {
        apiKey = apiKey ?? GetFromEnvironmentOrThrow(
            "COURIER_API_KEY",
            "Please pass in apiKey or set the environment variable COURIER_API_KEY."
        _client = 
        new RawClient(
            new Dictionary<string, string>() {
                { "Authorization", $"Bearer {apiKey}" }, 
                { "X-Fern-Language", "C#" }, 
            }, clientOptions ?? new ClientOptions());
        Service = 
        new ServiceClient(
            _client);
    }

    public ServiceClient Service { get; }

    private string GetFromEnvironmentOrThrow(string env, string message) {
        var value = Environment.GetEnvironmentVariable(env);
        if (value == null) {
            throw new Exception(message);
        }
        return value;
    }

}
