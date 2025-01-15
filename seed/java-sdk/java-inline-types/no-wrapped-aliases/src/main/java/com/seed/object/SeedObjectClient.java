/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.object.core.ClientOptions;
import com.seed.object.core.MediaTypes;
import com.seed.object.core.ObjectMappers;
import com.seed.object.core.RequestOptions;
import com.seed.object.core.SeedObjectApiException;
import com.seed.object.core.SeedObjectException;
import com.seed.object.requests.GetDiscriminatedUnionRequest;
import com.seed.object.requests.GetUndiscriminatedUnionRequest;
import com.seed.object.requests.PostRootRequest;
import com.seed.object.types.RootType1;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SeedObjectClient {
    protected final ClientOptions clientOptions;

    public SeedObjectClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public RootType1 getRoot(PostRootRequest request) {
        return getRoot(request, null);
    }

    public RootType1 getRoot(PostRootRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("root")
                .addPathSegments("root")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedObjectException("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), RootType1.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedObjectApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedObjectException("Network error executing HTTP request", e);
        }
    }

    public void getDiscriminatedUnion(GetDiscriminatedUnionRequest request) {
        getDiscriminatedUnion(request, null);
    }

    public void getDiscriminatedUnion(GetDiscriminatedUnionRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("root")
                .addPathSegments("discriminated-union")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedObjectException("Failed to serialize request", e);
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
                return;
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedObjectApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedObjectException("Network error executing HTTP request", e);
        }
    }

    public void getUndiscriminatedUnion(GetUndiscriminatedUnionRequest request) {
        getUndiscriminatedUnion(request, null);
    }

    public void getUndiscriminatedUnion(GetUndiscriminatedUnionRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("root")
                .addPathSegments("undiscriminated-union")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedObjectException("Failed to serialize request", e);
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
                return;
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedObjectApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedObjectException("Network error executing HTTP request", e);
        }
    }

    public static SeedObjectClientBuilder builder() {
        return new SeedObjectClientBuilder();
    }
}
