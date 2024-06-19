using SeedAuthEnvironmentVariables;

#nullable enable

namespace SeedAuthEnvironmentVariables;

public partial class SeedAuthEnvironmentVariablesClient
{
    private RawClient _client;

    public SeedAuthEnvironmentVariablesClient (string xAnotherHeader, string apiKey = null, ClientOptions clientOptions = null) {
        apiKey = apiKey ?? GetFromEnvironmentOrThrow(
            "FERN_API_KEY",
            "Please pass in apiKey or set the environment variable FERN_API_KEY."
        _client = 
        new RawClient(
            new Dictionary<string, string>() {
                { "X-FERN-API-KEY", apiKey }, 
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
