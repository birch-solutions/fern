using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SeedMultiUrlEnvironment.Core;

#nullable enable

namespace SeedMultiUrlEnvironment;

public partial class Ec2Client
{
    private RawClient _client;

    internal Ec2Client(RawClient client)
    {
        _client = client;
    }

    /// <example>
    /// <code>
    /// await client.Ec2.BootInstanceAsync(new BootInstanceRequest { Size = "string" });
    /// </code>
    /// </example>
    public async Task BootInstanceAsync(
        BootInstanceRequest request,
        RequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.Environment.Ec2,
                Method = HttpMethod.Post,
                Path = "/ec2/boot",
                Body = request,
                Options = options,
            },
            cancellationToken
        );
        if (response.StatusCode is >= 200 and < 400)
        {
            return;
        }
        var responseBody = await response.Raw.Content.ReadAsStringAsync(cancellationToken);
        throw new SeedMultiUrlEnvironmentApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
