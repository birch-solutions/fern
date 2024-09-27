/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.bytes.resources.service;

import com.seed.bytes.core.ClientOptions;
import com.seed.bytes.core.InputStreamRequestBody;
import com.seed.bytes.core.ObjectMappers;
import com.seed.bytes.core.RequestOptions;
import com.seed.bytes.core.SeedBytesApiException;
import com.seed.bytes.core.SeedBytesException;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
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

    public void upload(InputStream request) {
        upload(request, null);
    }

    public void upload(InputStream request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("upload-content")
                .build();
        RequestBody body = new InputStreamRequestBody(MediaType.parse("application/octet-stream"), request);
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
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
            throw new SeedBytesApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedBytesException("Network error executing HTTP request", e);
        }
    }

    public void upload(byte[] request) {
        upload(new ByteArrayInputStream(request));
    }

    public void upload(byte[] request, RequestOptions requestOptions) {
        upload(new ByteArrayInputStream(request), requestOptions);
    }
}
