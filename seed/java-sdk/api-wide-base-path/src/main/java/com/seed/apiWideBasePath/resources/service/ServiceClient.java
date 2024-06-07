/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.apiWideBasePath.resources.service;

import com.seed.apiWideBasePath.core.ClientOptions;
import com.seed.apiWideBasePath.core.ObjectMappers;
import com.seed.apiWideBasePath.core.RequestOptions;
import com.seed.apiWideBasePath.core.SeedApiWideBasePathApiError;
import com.seed.apiWideBasePath.core.SeedApiWideBasePathError;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void post(String serviceParam, String resourceParam, int endpointParam) {
        post(serviceParam, resourceParam, endpointParam, null);
    }

    public void post(String serviceParam, String resourceParam, int endpointParam, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegment(serviceParam)
                .addPathSegment(Integer.toString(endpointParam))
                .addPathSegment(resourceParam)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", RequestBody.create("", null))
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
            throw new SeedApiWideBasePathApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedApiWideBasePathError("Network error executing HTTP request", e);
        }
    }
}
