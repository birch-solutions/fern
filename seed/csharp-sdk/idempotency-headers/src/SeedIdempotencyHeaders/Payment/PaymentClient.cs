using System.Net.Http;
using SeedIdempotencyHeaders;
using SeedIdempotencyHeaders.Core;

#nullable enable

namespace SeedIdempotencyHeaders;

public class PaymentClient
{
    private RawClient _client;

    public PaymentClient(RawClient client)
    {
        _client = client;
    }

    public async Task<string> CreateAsync(CreatePaymentRequest request, RequestOptions? options)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "/payment",
                Body = request,
                Options = options
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<string>(responseBody)!;
        }
        throw new Exception(responseBody);
    }

    public async Task DeleteAsync(string paymentId, RequestOptions? options)
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Delete,
                Path = $"/payment/{paymentId}",
                Options = options
            }
        );
    }
}
