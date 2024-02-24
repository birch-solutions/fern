/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.playlist;

import com.fasterxml.jackson.core.type.TypeReference;
import com.seed.trace.core.ApiError;
import com.seed.trace.core.ClientOptions;
import com.seed.trace.core.MediaTypes;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.core.RequestOptions;
import com.seed.trace.resources.playlist.requests.CreatePlaylistRequest;
import com.seed.trace.resources.playlist.requests.GetPlaylistsRequest;
import com.seed.trace.resources.playlist.types.Playlist;
import com.seed.trace.resources.playlist.types.UpdatePlaylistRequest;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class PlaylistClient {
    protected final ClientOptions clientOptions;

    public PlaylistClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * Create a new playlist
     */
    public Playlist createPlaylist(int serviceParam, CreatePlaylistRequest request) {
        return createPlaylist(serviceParam, request, null);
    }

    /**
     * Create a new playlist
     */
    public Playlist createPlaylist(int serviceParam, CreatePlaylistRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("v2/playlist")
                .addPathSegment(Integer.toString(serviceParam))
                .addPathSegments("create");
        httpUrl.addQueryParameter("datetime", request.getDatetime().toString());
        if (request.getOptionalDatetime().isPresent()) {
            httpUrl.addQueryParameter(
                    "optionalDatetime", request.getOptionalDatetime().get().toString());
        }
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request.getBody()), MediaTypes.APPLICATION_JSON);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("POST", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Playlist.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Returns the user's playlists
     */
    public List<Playlist> getPlaylists(int serviceParam, GetPlaylistsRequest request) {
        return getPlaylists(serviceParam, request, null);
    }

    /**
     * Returns the user's playlists
     */
    public List<Playlist> getPlaylists(int serviceParam, GetPlaylistsRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("v2/playlist")
                .addPathSegment(Integer.toString(serviceParam))
                .addPathSegments("all");
        if (request.getLimit().isPresent()) {
            httpUrl.addQueryParameter("limit", request.getLimit().get().toString());
        }
        httpUrl.addQueryParameter("otherField", request.getOtherField());
        httpUrl.addQueryParameter("multiLineDocs", request.getMultiLineDocs());
        if (request.getOptionalMultipleField().isPresent()) {
            httpUrl.addQueryParameter(
                    "optionalMultipleField", request.getOptionalMultipleField().get());
        }
        httpUrl.addQueryParameter("multipleField", request.getMultipleField());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        response.body().string(), new TypeReference<List<Playlist>>() {});
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Returns a playlist
     */
    public Playlist getPlaylist(int serviceParam, String playlistId) {
        return getPlaylist(serviceParam, playlistId, null);
    }

    /**
     * Returns a playlist
     */
    public Playlist getPlaylist(int serviceParam, String playlistId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("v2/playlist")
                .addPathSegment(Integer.toString(serviceParam))
                .addPathSegment(playlistId)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Playlist.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Updates a playlist
     */
    public Optional<Playlist> updatePlaylist(int serviceParam, String playlistId) {
        return updatePlaylist(serviceParam, playlistId, Optional.empty());
    }

    /**
     * Updates a playlist
     */
    public Optional<Playlist> updatePlaylist(
            int serviceParam, String playlistId, Optional<UpdatePlaylistRequest> request) {
        return updatePlaylist(serviceParam, playlistId, request, null);
    }

    /**
     * Updates a playlist
     */
    public Optional<Playlist> updatePlaylist(
            int serviceParam,
            String playlistId,
            Optional<UpdatePlaylistRequest> request,
            RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("v2/playlist")
                .addPathSegment(Integer.toString(serviceParam))
                .addPathSegment(playlistId)
                .build();
        RequestBody body;
        try {
            body = RequestBody.create("", null);
            if (request.isPresent()) {
                body = RequestBody.create(
                        ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("PUT", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        response.body().string(), new TypeReference<Optional<Playlist>>() {});
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Deletes a playlist
     */
    public void deletePlaylist(int serviceParam, String playlistId) {
        deletePlaylist(serviceParam, playlistId, null);
    }

    /**
     * Deletes a playlist
     */
    public void deletePlaylist(int serviceParam, String playlistId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("v2/playlist")
                .addPathSegment(Integer.toString(serviceParam))
                .addPathSegment(playlistId)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("DELETE", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
