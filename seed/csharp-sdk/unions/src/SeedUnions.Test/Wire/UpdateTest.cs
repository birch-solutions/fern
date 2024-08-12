using FluentAssertions.Json;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedUnions;
using SeedUnions.Test.Wire;

#nullable enable

namespace SeedUnions.Test;

[TestFixture]
public class UpdateTest : BaseWireTest
{
    [Test]
    public void WireTest()
    {
        const string requestJson = """
            {
              "type": "circle",
              "id": "string",
              "radius": 1.1
            }
            """;

        const string mockResponse = """
            true
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/")
                    .UsingPatch()
                    .WithBody(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = Client.Union.UpdateAsync(new Circle { Id = "string", Radius = 1.1 }).Result;
        JToken.Parse(serializedJson).Should().BeEquivalentTo(JToken.Parse(response));
    }
}
