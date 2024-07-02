using OneOf;
using SeedEnum;
using SeedEnum.Core;

#nullable enable

namespace SeedEnum;

public class PathParamClient
{
    private RawClient _client;

    public PathParamClient(RawClient client)
    {
        _client = client;
    }

    public async void SendAsync(
        Operand operand,
        Operand? maybeOperand,
        OneOf<Color, Operand> operandOrColor,
        OneOf<Color, Operand>? maybeOperandOrColor
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                Method = HttpMethod.Post,
                Path = $"path/{operand}/{maybeOperand}/{operandOrColor}/{maybeOperandOrColor}"
            }
        );
    }
}
