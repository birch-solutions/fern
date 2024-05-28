using SeedApi;
using SeedApi.Folder;

#nullable enable

namespace SeedApi.Folder;

public class FolderClient
{
    private RawClient _client;

    public FolderClient(RawClient client)
    {
        _client = client;
        Service = new ServiceClient(_client);
    }

    public ServiceClient Service { get; }

    public async void FooAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Post, Path = "" }
        );
    }
}
