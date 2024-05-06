/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.serverSentEvents.resources.completions;

import com.seed.serverSentEvents.core.ApiError;
import com.seed.serverSentEvents.core.ClientOptions;
import com.seed.serverSentEvents.core.MediaTypes;
import com.seed.serverSentEvents.core.ObjectMappers;
import com.seed.serverSentEvents.core.RequestOptions;
import com.seed.serverSentEvents.resources.completions.requests.StreamCompletionRequest;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class CompletionsClient {
    protected final ClientOptions clientOptions;

    public CompletionsClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void stream(StreamCompletionRequest request) {
        stream(request, null);
    }

    public void stream(StreamCompletionRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("stream")
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
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(
                            response.body() != null ? response.body().toString() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
