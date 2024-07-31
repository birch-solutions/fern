using System.Net.Http;
using System.Text.Json;
using SeedEnum;
using SeedEnum.Core;

#nullable enable

namespace SeedEnum;

public class QueryParamClient
{
    private RawClient _client;

    public QueryParamClient(RawClient client)
    {
        _client = client;
    }

    public async Task SendAsync(SendEnumAsQueryParamRequest request, RequestOptions? options)
    {
        var _query = new Dictionary<string, object>() { };
        _query["operand"] = JsonSerializer.Serialize(request.Operand);
        _query["operandOrColor"] = request.OperandOrColor.ToString();
        if (request.MaybeOperand != null)
        {
            _query["maybeOperand"] = JsonSerializer.Serialize(request.MaybeOperand.Value);
        }
        if (request.MaybeOperandOrColor != null)
        {
            _query["maybeOperandOrColor"] = request.MaybeOperandOrColor.ToString();
        }
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "query",
                Query = _query,
                Options = options
            }
        );
    }

    public async Task SendListAsync(
        SendEnumListAsQueryParamRequest request,
        RequestOptions? options
    )
    {
        var _query = new Dictionary<string, object>() { };
        _query["operand"] = request
            .Operand.Select(_value => JsonSerializer.Serialize(_value))
            .ToList();
        _query["maybeOperand"] = request.MaybeOperand.Select(_value => _value.ToString()).ToList();
        _query["operandOrColor"] = request
            .OperandOrColor.Select(_value => _value.ToString())
            .ToList();
        _query["maybeOperandOrColor"] = request
            .MaybeOperandOrColor.Select(_value => _value.ToString())
            .ToList();
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = options?.BaseUrl ?? _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "query-list",
                Query = _query,
                Options = options
            }
        );
    }
}
