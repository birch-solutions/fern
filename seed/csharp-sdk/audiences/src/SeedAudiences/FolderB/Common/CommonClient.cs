using SeedAudiences.Core;

#nullable enable

namespace SeedAudiences.FolderB;

public partial class CommonClient
{
    private RawClient _client;

    internal CommonClient(RawClient client)
    {
        _client = client;
    }
}
