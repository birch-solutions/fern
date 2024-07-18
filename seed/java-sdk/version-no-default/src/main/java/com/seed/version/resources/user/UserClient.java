/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.version.resources.user;

import com.seed.version.core.ClientOptions;
import com.seed.version.core.ObjectMappers;
import com.seed.version.core.RequestOptions;
import com.seed.version.core.SeedVersionApiException;
import com.seed.version.core.SeedVersionException;
import com.seed.version.resources.user.types.User;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class UserClient {
    protected final ClientOptions clientOptions;

    public UserClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public User getUser(String userId) {
        return getUser(userId, null);
    }

    public User getUser(String userId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users")
                .addPathSegment(userId)
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), User.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedVersionApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedVersionException("Network error executing HTTP request", e);
        }
    }
}
