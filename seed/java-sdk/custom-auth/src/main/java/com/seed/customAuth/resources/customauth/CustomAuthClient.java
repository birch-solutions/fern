/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.customAuth.resources.customauth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.customAuth.core.ClientOptions;
import com.seed.customAuth.core.MediaTypes;
import com.seed.customAuth.core.ObjectMappers;
import com.seed.customAuth.core.RequestOptions;
import com.seed.customAuth.core.SeedCustomAuthApiError;
import com.seed.customAuth.core.SeedCustomAuthError;
import com.seed.customAuth.resources.errors.errors.SeedCustomAuthBadRequest;
import com.seed.customAuth.resources.errors.errors.SeedCustomAuthUnauthorizedRequest;
import com.seed.customAuth.resources.errors.types.UnauthorizedRequestErrorBody;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class CustomAuthClient {
    protected final ClientOptions clientOptions;

    public CustomAuthClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * GET request with custom auth scheme
     */
    public boolean getWithCustomAuth() {
        return getWithCustomAuth(null);
    }

    /**
     * GET request with custom auth scheme
     */
    public boolean getWithCustomAuth(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("custom-auth")
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
                    throw new SeedCustomAuthUnauthorizedRequest(ObjectMappers.JSON_MAPPER.readValue(
                            responseBodyString, UnauthorizedRequestErrorBody.class));
                }
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedCustomAuthApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedCustomAuthError("Network error executing HTTP request", e);
        }
    }

    /**
     * POST request with custom auth scheme
     */
    public boolean postWithCustomAuth(Object request) {
        return postWithCustomAuth(request, null);
    }

    /**
     * POST request with custom auth scheme
     */
    public boolean postWithCustomAuth(Object request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("custom-auth")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedCustomAuthError("Failed to serialize request", e);
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
                        throw new SeedCustomAuthBadRequest(
                                ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
                    case 401:
                        throw new SeedCustomAuthUnauthorizedRequest(ObjectMappers.JSON_MAPPER.readValue(
                                responseBodyString, UnauthorizedRequestErrorBody.class));
                }
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedCustomAuthApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedCustomAuthError("Network error executing HTTP request", e);
        }
    }
}
