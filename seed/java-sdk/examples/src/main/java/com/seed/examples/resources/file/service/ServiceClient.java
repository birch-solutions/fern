/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.file.service;

import com.seed.examples.core.ApiError;
import com.seed.examples.core.ClientOptions;
import com.seed.examples.core.ObjectMappers;
import com.seed.examples.core.RequestOptions;
import com.seed.examples.resources.file.service.requests.GetFileRequest;
import com.seed.examples.resources.types.types.File;
import java.io.IOException;
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
     * This endpoint returns a file by its name.
     */
    public File getFile(String filename) {
        return getFile(filename, GetFileRequest.builder().build());
    }

    /**
     * This endpoint returns a file by its name.
     */
    public File getFile(String filename, GetFileRequest request) {
        return getFile(filename, request, null);
    }

    /**
     * This endpoint returns a file by its name.
     */
    public File getFile(String filename, GetFileRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("file")
                .addPathSegment(filename)
                .build();
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        _requestBuilder.addHeader("X-File-API-Version", request.getXFileApiVersion());
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), File.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
