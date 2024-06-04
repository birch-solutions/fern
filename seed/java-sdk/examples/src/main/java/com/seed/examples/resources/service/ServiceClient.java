/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.examples.core.ClientOptions;
import com.seed.examples.core.MediaTypes;
import com.seed.examples.core.ObjectMappers;
import com.seed.examples.core.RequestOptions;
import com.seed.examples.core.SeedExamplesError;
import com.seed.examples.resources.service.requests.GetMetadataRequest;
import com.seed.examples.resources.types.types.Metadata;
import com.seed.examples.resources.types.types.Movie;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Movie getMovie(String movieId) {
        return getMovie(movieId, null);
    }

    public Movie getMovie(String movieId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("movie")
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
        } catch (IOException e) {
            throw new SeedExamplesError("Network error executing HTTP request", e);
        }
    }

    public String createMovie(Movie request) {
        return createMovie(request, null);
    }

    public String createMovie(Movie request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("movie")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExamplesError("Failed to serialize request", e);
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
            throw new SeedExamplesError("Network error executing HTTP request", e);
        }
    }

    public Metadata getMetadata(GetMetadataRequest request) {
        return getMetadata(request, null);
    }

    public Metadata getMetadata(GetMetadataRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("metadata");
        if (request.getShallow().isPresent()) {
            httpUrl.addQueryParameter("shallow", request.getShallow().get().toString());
        }
        if (request.getTag().isPresent()) {
            httpUrl.addQueryParameter("tag", request.getTag().get());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        _requestBuilder.addHeader("X-API-Version", request.getXApiVersion());
        Request okhttpRequest = _requestBuilder.build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Metadata.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedExamplesError("Network error executing HTTP request", e);
        }
    }

    public com.seed.examples.resources.types.types.Response getResponse() {
        return getResponse(null);
    }

    public com.seed.examples.resources.types.types.Response getResponse(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("response")
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", RequestBody.create("", null))
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
                return ObjectMappers.JSON_MAPPER.readValue(
                        responseBody.string(), com.seed.examples.resources.types.types.Response.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedExamplesError("Network error executing HTTP request", e);
        }
    }
}
