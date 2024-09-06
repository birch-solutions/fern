using System.Threading.Tasks;
using FluentAssertions.Json;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedMixedFileDirectory.Core;
using SeedMixedFileDirectory.User.Events;

#nullable enable

namespace SeedMixedFileDirectory.Test.Unit.MockServer;

[TestFixture]
public class GetMetadataTest : BaseMockServerTest
{
    [Test]
    public async Task MockServerTest()
    {
        const string mockResponse = """
            {
              "id": "string",
              "value": {
                "key": "value"
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/users/events/metadata/")
                    .WithParam("id", "string")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.User.Events.Metadata.GetMetadataAsync(
            new GetEventMetadataRequest { Id = "string" },
            RequestOptions
        );
        JToken
            .Parse(mockResponse)
            .Should()
            .BeEquivalentTo(JToken.Parse(JsonUtils.Serialize(response)));
    }
}
