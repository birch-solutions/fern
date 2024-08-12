using NUnit.Framework;
using SeedExhaustive.Endpoints;
using SeedExhaustive.Test.Wire;

#nullable enable

namespace SeedExhaustive.Test;

[TestFixture]
public class GetWithPathAndQueryTest : BaseWireTest
{
    [Test]
    public void WireTest()
    {
        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/params/path-query/string")
                    .WithParam("query", "string")
                    .UsingGet()
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrow(
            () =>
                Client
                    .Endpoints.Params.GetWithPathAndQueryAsync(
                        "string",
                        new GetWithPathAndQuery { Query = "string" }
                    )
                    .GetAwaiter()
                    .GetResult()
        );
    }
}
