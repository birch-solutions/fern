using System.Globalization;
using NUnit.Framework;
using SeedTrace;

#nullable enable

namespace SeedTrace.Test.Unit.MockServer;

[TestFixture]
public class SendTestSubmissionUpdateTest : BaseMockServerTest
{
    [Test]
    public void MockServerTest()
    {
        const string requestJson = """
            {
              "updateTime": "SGVsbG8gd29ybGQh",
              "updateInfo": {
                "type": "running",
                "value": "QUEUEING_SUBMISSION"
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath(
                        "/admin/store-test-submission-status-v2/d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"
                    )
                    .UsingPost()
                    .WithBodyAsJson(requestJson)
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrowAsync(
            async () =>
                await Client.Admin.SendTestSubmissionUpdateAsync(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                    new TestSubmissionUpdate
                    {
                        UpdateTime = DateTime.Parse(
                            "2024-01-15T09:30:00.000Z",
                            null,
                            DateTimeStyles.AdjustToUniversal
                        ),
                        UpdateInfo = RunningSubmissionState.QueueingSubmission,
                    },
                    RequestOptions
                )
        );
    }
}
