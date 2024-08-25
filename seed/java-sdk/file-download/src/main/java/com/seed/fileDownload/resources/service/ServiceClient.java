/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.fileDownload.resources.service;

import com.seed.fileDownload.core.ClientOptions;
import com.seed.fileDownload.core.ObjectMappers;
import com.seed.fileDownload.core.RequestOptions;
import com.seed.fileDownload.core.ResponseBodyInputStream;
import com.seed.fileDownload.core.SeedFileDownloadApiException;
import com.seed.fileDownload.core.SeedFileDownloadException;
import java.io.IOException;
import java.io.InputStream;
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

    public InputStream downloadFile() {
        return downloadFile(null);
    }

    public InputStream downloadFile(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
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
        try {
            Response response = client.newCall(okhttpRequest).execute();
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return new ResponseBodyInputStream(response);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedFileDownloadApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedFileDownloadException("Network error executing HTTP request", e);
        }
    }
}
