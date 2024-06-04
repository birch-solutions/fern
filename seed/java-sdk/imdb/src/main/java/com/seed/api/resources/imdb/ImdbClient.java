/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.resources.imdb;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.api.core.ClientOptions;
import com.seed.api.core.MediaTypes;
import com.seed.api.core.ObjectMappers;
import com.seed.api.core.RequestOptions;
import com.seed.api.core.SeedApiApiError;
import com.seed.api.core.SeedApiError;
import com.seed.api.resources.imdb.errors.SeedApiMovieDoesNotExistError;
import com.seed.api.resources.imdb.types.CreateMovieRequest;
import com.seed.api.resources.imdb.types.Movie;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ImdbClient {
    protected final ClientOptions clientOptions;

    public ImdbClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * Add a movie to the database
     */
    public String createMovie(CreateMovieRequest request) {
        return createMovie(request, null);
    }

    /**
     * Add a movie to the database
     */
    public String createMovie(CreateMovieRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("movies")
                .addPathSegments("create-movie")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedApiError("Failed to serialize request", e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), String.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedApiError("Network error executing HTTP request", e);
        }
    }

    public Movie getMovie(String movieId) {
        return getMovie(movieId, null);
    }

    public Movie getMovie(String movieId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("movies")
                .addPathSegment(movieId)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Movie.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
                if (response.code() == 404) {
                    throw new SeedApiMovieDoesNotExistError(
                            ObjectMappers.JSON_MAPPER.readValue(responseBodyString, String.class));
                }
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedApiApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedApiError("Network error executing HTTP request", e);
        }
    }
}
