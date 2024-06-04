/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.extraProperties.resources.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.extraProperties.core.ClientOptions;
import com.seed.extraProperties.core.MediaTypes;
import com.seed.extraProperties.core.ObjectMappers;
import com.seed.extraProperties.core.RequestOptions;
import com.seed.extraProperties.core.SeedExtraPropertiesError;
import com.seed.extraProperties.resources.user.requests.CreateUserRequest;
import com.seed.extraProperties.resources.user.types.User;
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

    public User createUser(CreateUserRequest request) {
        return createUser(request, null);
    }

    public User createUser(CreateUserRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("user")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExtraPropertiesError("Failed to serialize request", e);
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
        } catch (IOException e) {
            throw new SeedExtraPropertiesError("Network error executing HTTP request", e);
        }
    }
}
