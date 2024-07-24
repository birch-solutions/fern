/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.streaming.resources.dummy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.streaming.core.ClientOptions;
import com.seed.streaming.core.MediaTypes;
import com.seed.streaming.core.ObjectMappers;
import com.seed.streaming.core.RequestOptions;
import com.seed.streaming.core.ResponseBodyReader;
import com.seed.streaming.core.SeedStreamingApiException;
import com.seed.streaming.core.SeedStreamingException;
import com.seed.streaming.core.Stream;
import com.seed.streaming.resources.dummy.requests.GenerateStreamRequest;
import com.seed.streaming.resources.dummy.requests.Generateequest;
import com.seed.streaming.resources.dummy.types.StreamResponse;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class DummyClient {
    protected final ClientOptions clientOptions;

    public DummyClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Iterable<StreamResponse> generateStream(GenerateStreamRequest request) {
        return generateStream(request, null);
    }

    public Iterable<StreamResponse> generateStream(GenerateStreamRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("generate-stream")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedStreamingException("Failed to serialize request", e);
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
        try {
            Response response = client.newCall(okhttpRequest).execute();
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                ResponseBodyReader reader = new ResponseBodyReader(responseBody.charStream(), response);
                return new Stream<StreamResponse>(StreamResponse.class, reader, "\n");
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedStreamingApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedStreamingException("Network error executing HTTP request", e);
        }
    }

    public StreamResponse generate(Generateequest request) {
        return generate(request, null);
    }

    public StreamResponse generate(Generateequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("generate")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedStreamingException("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), StreamResponse.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedStreamingApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedStreamingException("Network error executing HTTP request", e);
        }
    }
}
