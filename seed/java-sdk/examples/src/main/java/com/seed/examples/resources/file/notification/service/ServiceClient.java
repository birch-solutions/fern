/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.file.notification.service;

import com.seed.examples.core.ClientOptions;
import com.seed.examples.core.ObjectMappers;
import com.seed.examples.core.RequestOptions;
import com.seed.examples.core.SeedExamplesError;
import com.seed.examples.resources.types.types.Exception;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Exception getException(String notificationId) {
        return getException(notificationId, null);
    }

    public Exception getException(String notificationId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("file/notification")
                .addPathSegment(notificationId)
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Exception.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedExamplesError("Network error executing HTTP request", e);
        }
    }
}
