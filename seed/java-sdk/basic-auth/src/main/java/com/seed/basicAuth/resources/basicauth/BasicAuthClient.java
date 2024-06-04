/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.basicAuth.resources.basicauth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.basicAuth.core.ClientOptions;
import com.seed.basicAuth.core.MediaTypes;
import com.seed.basicAuth.core.ObjectMappers;
import com.seed.basicAuth.core.RequestOptions;
import com.seed.basicAuth.core.SeedBasicAuthApiError;
import com.seed.basicAuth.core.SeedBasicAuthError;
import com.seed.basicAuth.resources.errors.errors.SeedBasicAuthBadRequest;
import com.seed.basicAuth.resources.errors.errors.SeedBasicAuthUnauthorizedRequest;
import com.seed.basicAuth.resources.errors.types.UnauthorizedRequestErrorBody;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class BasicAuthClient {
    protected final ClientOptions clientOptions;

    public BasicAuthClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * GET request with basic auth scheme
     */
    public boolean getWithBasicAuth() {
        return getWithBasicAuth(null);
    }

    /**
     * GET request with basic auth scheme
     */
    public boolean getWithBasicAuth(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("basic-auth")
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), boolean.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
                if (response.code() == 401) {
                    throw new SeedBasicAuthUnauthorizedRequest(ObjectMappers.JSON_MAPPER.readValue(
                            responseBodyString, UnauthorizedRequestErrorBody.class));
                }
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedBasicAuthApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedBasicAuthError("Network error executing HTTP request", e);
        }
    }

    /**
     * POST request with basic auth scheme
     */
    public boolean postWithBasicAuth(Object request) {
        return postWithBasicAuth(request, null);
    }

    /**
     * POST request with basic auth scheme
     */
    public boolean postWithBasicAuth(Object request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("basic-auth")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedBasicAuthError("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), boolean.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
                switch (response.code()) {
                    case 400:
                        throw new SeedBasicAuthBadRequest(
                                ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
                    case 401:
                        throw new SeedBasicAuthUnauthorizedRequest(ObjectMappers.JSON_MAPPER.readValue(
                                responseBodyString, UnauthorizedRequestErrorBody.class));
                }
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedBasicAuthApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedBasicAuthError("Network error executing HTTP request", e);
        }
    }
}
