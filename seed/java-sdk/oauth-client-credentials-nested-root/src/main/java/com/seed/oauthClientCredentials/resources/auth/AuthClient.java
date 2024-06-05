/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentials.resources.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.oauthClientCredentials.core.ClientOptions;
import com.seed.oauthClientCredentials.core.MediaTypes;
import com.seed.oauthClientCredentials.core.ObjectMappers;
import com.seed.oauthClientCredentials.core.RequestOptions;
import com.seed.oauthClientCredentials.core.SeedOauthClientCredentialsApiError;
import com.seed.oauthClientCredentials.core.SeedOauthClientCredentialsError;
import com.seed.oauthClientCredentials.resources.auth.requests.GetTokenRequest;
import com.seed.oauthClientCredentials.resources.auth.types.TokenResponse;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class AuthClient {
    protected final ClientOptions clientOptions;

    public AuthClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public TokenResponse getToken(GetTokenRequest request) {
        return getToken(request, null);
    }

    public TokenResponse getToken(GetTokenRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("token")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedOauthClientCredentialsError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), TokenResponse.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedOauthClientCredentialsApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedOauthClientCredentialsError("Network error executing HTTP request", e);
        }
    }
}
