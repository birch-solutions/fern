using System.Text.Json;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public class HomepageClient
{
    private RawClient _client;

    public HomepageClient(RawClient client)
    {
        _client = client;
    }

    public async Task<List<string>> GetHomepageProblemsAsync()
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest { Method = HttpMethod.Get, Path = "" }
        );
        string responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode >= 200 && response.StatusCode < 400)
        {
            return JsonSerializer.Deserialize<List<string>>(responseBody);
        }
        throw new Exception();
    }

    public async void SetHomepageProblemsAsync(List<string> request)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.ApiRequest
            {
                Method = HttpMethod.Post,
                Path = "",
                Body = request
            }
        );
    }
}
