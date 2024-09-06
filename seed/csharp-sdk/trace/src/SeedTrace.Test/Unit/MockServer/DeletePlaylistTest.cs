using NUnit.Framework;

#nullable enable

namespace SeedTrace.Test.Unit.MockServer;

[TestFixture]
public class DeletePlaylistTest : BaseMockServerTest
{
    [Test]
    public void MockServerTest()
    {
        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/v2/playlist/1/string")
                    .UsingDelete()
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrowAsync(
            async () => await Client.Playlist.DeletePlaylistAsync(1, "string", RequestOptions)
        );
    }
}
