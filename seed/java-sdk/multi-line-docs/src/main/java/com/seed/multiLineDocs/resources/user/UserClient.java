/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiLineDocs.resources.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.multiLineDocs.core.ClientOptions;
import com.seed.multiLineDocs.core.MediaTypes;
import com.seed.multiLineDocs.core.ObjectMappers;
import com.seed.multiLineDocs.core.RequestOptions;
import com.seed.multiLineDocs.core.SeedMultiLineDocsApiError;
import com.seed.multiLineDocs.core.SeedMultiLineDocsError;
import com.seed.multiLineDocs.resources.user.requests.CreateUserRequest;
import com.seed.multiLineDocs.resources.user.types.User;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class UserClient {
    protected final ClientOptions clientOptions;

    public UserClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * Retrieve a user.
     * This endpoint is used to retrieve a user.
     */
    public void getUser(String userId) {
        getUser(userId, null);
    }

    /**
     * Retrieve a user.
     * This endpoint is used to retrieve a user.
     */
    public void getUser(String userId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users")
                .addPathSegment(userId)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
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
            try {
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedMultiLineDocsApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedMultiLineDocsError("Network error executing HTTP request", e);
        }
    }

    /**
     * Create a new user.
     * This endpoint is used to create a new user.
     */
    public User createUser(CreateUserRequest request) {
        return createUser(request, null);
    }

    /**
     * Create a new user.
     * This endpoint is used to create a new user.
     */
    public User createUser(CreateUserRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedMultiLineDocsError("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), User.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedMultiLineDocsApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedMultiLineDocsError("Network error executing HTTP request", e);
        }
    }
}
