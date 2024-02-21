/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.bearerTokenEnvironmentVariable.resources.service;

import com.seed.bearerTokenEnvironmentVariable.core.ApiError;
import com.seed.bearerTokenEnvironmentVariable.core.ClientOptions;
import com.seed.bearerTokenEnvironmentVariable.core.ObjectMappers;
import com.seed.bearerTokenEnvironmentVariable.core.RequestOptions;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * GET request with custom api key
     */
    public String getWithBearerToken() {
        return getWithBearerToken(null);
    }

    /**
     * GET request with custom api key
     */
    public String getWithBearerToken(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("apiKey")
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
