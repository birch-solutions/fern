using System.Net.Http;
using SeedTrace;
using SeedTrace.Core;

#nullable enable

namespace SeedTrace;

public class PlaylistClient
{
    private RawClient _client;

    public PlaylistClient(RawClient client)
    {
        _client = client;
    }

    /// <summary>
    /// Create a new playlist
    /// </summary>
    public async Task<Playlist> CreatePlaylistAsync(int serviceParam, CreatePlaylistRequest request)
    {
        var _query = new Dictionary<string, object>() { };
        _query["datetime"] = request.Datetime.ToString(Constants.DateTimeFormat);

        if (request.OptionalDatetime != null)
        {
            _query["optionalDatetime"] = request.OptionalDatetime.Value.ToString(
                Constants.DateTimeFormat
            );
        }

        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/v2/playlist/{serviceParam}/create",
                Body = request.Body,
                Query = _query
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<Playlist>(responseBody)!;
        }
        throw new Exception(responseBody);
    }

    /// <summary>
    /// Returns the user's playlists
    /// </summary>
    public async Task<IEnumerable<Playlist>> GetPlaylistsAsync(
        int serviceParam,
        GetPlaylistsRequest request
    )
    {
        var _query = new Dictionary<string, object>() { };
        _query["otherField"] = request.OtherField;
        _query["multiLineDocs"] = request.MultiLineDocs;
        _query["optionalMultipleField"] = request
            .OptionalMultipleField.Where(_value => _value != null)
            .Select(_value => _value)
            .ToList();
        _query["multipleField"] = request.MultipleField.Select(_value => _value).ToList();

        if (request.Limit != null)
        {
            _query["limit"] = request.Limit.ToString();
        }

        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = $"/v2/playlist/{serviceParam}/all",
                Query = _query
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<IEnumerable<Playlist>>(responseBody)!;
        }
        throw new Exception(responseBody);
    }

    /// <summary>
    /// Returns a playlist
    /// </summary>
    public async Task<Playlist> GetPlaylistAsync(int serviceParam, string playlistId)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Get,
                Path = $"/v2/playlist/{serviceParam}/{playlistId}"
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<Playlist>(responseBody)!;
        }
        throw new Exception(responseBody);
    }

    /// <summary>
    /// Updates a playlist
    /// </summary>
    public async Task<Playlist?> UpdatePlaylistAsync(
        int serviceParam,
        string playlistId,
        UpdatePlaylistRequest? request
    )
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Put,
                Path = $"/v2/playlist/{serviceParam}/{playlistId}",
                Body = request
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        if (response.StatusCode is >= 200 and < 400)
        {
            return JsonUtils.Deserialize<Playlist?>(responseBody)!;
        }
        throw new Exception(responseBody);
    }

    /// <summary>
    /// Deletes a playlist
    /// </summary>
    public async Task DeletePlaylistAsync(int serviceParam, string playlistId)
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Delete,
                Path = $"/v2/playlist/{serviceParam}/{playlistId}"
            }
        );
    }
}
