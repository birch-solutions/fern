using NUnit.Framework;
using SeedMixedCase.Core;
using SeedMixedCase.Test.Utils;
using SeedMixedCase.Test.Wire;

#nullable enable

namespace SeedMixedCase.Test;

[TestFixture]
public class GetResourceTest : BaseWireTest
{
    [Test]
    public void WireTest_1()
    {
        const string mockResponse = """
            {
              "resource_type": "user",
              "userName": "username",
              "metadata_tags": [
                "tag1",
                "tag2"
              ],
              "EXTRA_PROPERTIES": {
                "foo": "bar",
                "baz": "qux"
              }
            }
            """;

        Server
            .Given(
                WireMock.RequestBuilders.Request.Create().WithPath("/resource/string").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = Client.Service.GetResourceAsync("string").Result;
        JsonDiffChecker.AssertJsonEquals(mockResponse, JsonUtils.Serialize(response));
    }

    [Test]
    public void WireTest_2()
    {
        const string mockResponse = """
            {
              "resource_type": "user",
              "userName": "username",
              "metadata_tags": [
                "tag1",
                "tag2"
              ],
              "EXTRA_PROPERTIES": {
                "foo": "bar",
                "baz": "qux"
              }
            }
            """;

        Server
            .Given(
                WireMock.RequestBuilders.Request.Create().WithPath("/resource/rsc-xyz").UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = Client.Service.GetResourceAsync("rsc-xyz").Result;
        JsonDiffChecker.AssertJsonEquals(mockResponse, JsonUtils.Serialize(response));
    }
}
