using NUnit.Framework;
using SeedEnum;

#nullable enable

namespace SeedEnum.Test.Unit.MockServer;

[TestFixture]
public class SendListTest : BaseMockServerTest
{
    [Test]
    public void MockServerTest()
    {
        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/query-list")
                    .WithParam("operand", ">")
                    .WithParam("operandOrColor", "red")
                    .UsingPost()
            )
            .RespondWith(WireMock.ResponseBuilders.Response.Create().WithStatusCode(200));

        Assert.DoesNotThrowAsync(
            async () =>
                await Client.QueryParam.SendListAsync(
                    new SendEnumListAsQueryParamRequest
                    {
                        Operand = [Operand.GreaterThan],
                        OperandOrColor = [Color.Red],
                    },
                    RequestOptions
                )
        );
    }
}
