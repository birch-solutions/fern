using SeedTrace;
using SeedTrace.V2;
using SeedTrace.V2.V3;

#nullable enable

namespace SeedTrace.V2;

public class V2Client
{
    private RawClient _client;

    public V2Client(RawClient client)
    {
        _client = client;
        Problem = new ProblemClient(_client);
        V3 = new V3Client(_client);
    }

    public ProblemClient Problem { get; }

    public V3Client V3 { get; }

    public async void TestAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = "" }
        );
    }
}
