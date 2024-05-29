/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentialsEnvironmentVariables.resources.auth;

import com.seed.oauthClientCredentialsEnvironmentVariables.core.ApiError;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.ClientOptions;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.MediaTypes;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.ObjectMappers;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.RequestOptions;
import com.seed.oauthClientCredentialsEnvironmentVariables.resources.auth.requests.GetTokenRequest;
import com.seed.oauthClientCredentialsEnvironmentVariables.resources.auth.requests.RefreshTokenRequest;
import com.seed.oauthClientCredentialsEnvironmentVariables.resources.auth.types.TokenResponse;
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

    public TokenResponse getTokenWithClientCredentials(GetTokenRequest request) {
        return getTokenWithClientCredentials(request, null);
    }

    public TokenResponse getTokenWithClientCredentials(GetTokenRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("token")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), TokenResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(
                            responseBody != null ? responseBody.string() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public TokenResponse refreshToken(RefreshTokenRequest request) {
        return refreshToken(request, null);
    }

    public TokenResponse refreshToken(RefreshTokenRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("token")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), TokenResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(
                            responseBody != null ? responseBody.string() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
