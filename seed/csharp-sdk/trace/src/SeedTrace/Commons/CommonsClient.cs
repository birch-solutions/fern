using SeedTrace;

#nullable enable

namespace SeedTrace;

public class CommonsClient
{
    private RawClient _client;

    public CommonsClient(RawClient client)
    {
        _client = client;
    }
}
