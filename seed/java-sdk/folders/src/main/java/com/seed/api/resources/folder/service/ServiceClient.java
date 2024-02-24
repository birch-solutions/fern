/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.resources.folder.service;

import com.seed.api.core.ApiError;
import com.seed.api.core.ClientOptions;
import com.seed.api.core.MediaTypes;
import com.seed.api.core.ObjectMappers;
import com.seed.api.core.RequestOptions;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void endpoint() {
        endpoint(null);
    }

    public void endpoint(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("service")
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void unknownRequest(Object request) {
        unknownRequest(request, null);
    }

    public void unknownRequest(Object request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("service")
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
            if (requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
