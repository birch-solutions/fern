/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.streaming.resources.dummy;

import com.seed.streaming.core.ApiError;
import com.seed.streaming.core.ClientOptions;
import com.seed.streaming.core.MediaTypes;
import com.seed.streaming.core.ObjectMappers;
import com.seed.streaming.core.RequestOptions;
import com.seed.streaming.core.Stream;
import com.seed.streaming.resources.dummy.requests.GenerateStreamRequestzs;
import com.seed.streaming.resources.dummy.types.StreamResponse;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class DummyClient {
    protected final ClientOptions clientOptions;

    public DummyClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Iterable<StreamResponse> generateStream(GenerateStreamRequestzs request) {
        return generateStream(request, null);
    }

    public Iterable<StreamResponse> generateStream(GenerateStreamRequestzs request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("generate-stream")
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
                return new Stream<StreamResponse>(
                        StreamResponse.class, response.body().charStream(), "\n");
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
