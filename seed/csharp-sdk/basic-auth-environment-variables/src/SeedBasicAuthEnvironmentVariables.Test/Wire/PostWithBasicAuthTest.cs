using NUnit.Framework;
using SeedBasicAuthEnvironmentVariables.Core;
using SeedBasicAuthEnvironmentVariables.Test.Utils;
using SeedBasicAuthEnvironmentVariables.Test.Wire;

#nullable enable

namespace SeedBasicAuthEnvironmentVariables.Test;

[TestFixture]
public class PostWithBasicAuthTest : BaseWireTest
{
    [Test]
    public void WireTest()
    {
        const string requestJson = """
            {
              "key": "value"
            }
            """;

        const string mockResponse = """
            true
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/basic-auth")
                    .UsingPost()
                    .WithBody(requestJson)
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = Client
            .BasicAuth.PostWithBasicAuthAsync(
                new Dictionary<object, object?>() { { "key", "value" }, }
            )
            .Result;
        JsonDiffChecker.AssertJsonEquals(mockResponse, JsonUtils.Serialize(response));
    }
}
