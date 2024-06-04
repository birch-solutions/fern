/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.singleUrlEnvironmentDefault.resources.dummy;

import com.seed.singleUrlEnvironmentDefault.core.ClientOptions;
import com.seed.singleUrlEnvironmentDefault.core.ObjectMappers;
import com.seed.singleUrlEnvironmentDefault.core.RequestOptions;
import com.seed.singleUrlEnvironmentDefault.core.SeedSingleUrlEnvironmentDefaultError;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class DummyClient {
    protected final ClientOptions clientOptions;

    public DummyClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public String getDummy() {
        return getDummy(null);
    }

    public String getDummy(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("dummy")
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), String.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedSingleUrlEnvironmentDefaultError("Network error executing HTTP request", e);
        }
    }
}
