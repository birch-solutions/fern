using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SeedEnum.Core;

#nullable enable

namespace SeedEnum;

public partial class InlinedRequestClient
{
    private RawClient _client;

    internal InlinedRequestClient(RawClient client)
    {
        _client = client;
    }

    public async Task SendAsync(
        SendEnumInlinedRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "inlined",
                Body = request,
                Options = options,
            },
            cancellationToken
        );
        if (response.StatusCode is >= 200 and < 400)
        {
            return;
        }
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        throw new SeedEnumApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
