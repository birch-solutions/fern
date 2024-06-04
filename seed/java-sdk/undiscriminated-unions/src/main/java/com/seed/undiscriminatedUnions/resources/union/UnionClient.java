/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.resources.union;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.undiscriminatedUnions.core.ClientOptions;
import com.seed.undiscriminatedUnions.core.MediaTypes;
import com.seed.undiscriminatedUnions.core.ObjectMappers;
import com.seed.undiscriminatedUnions.core.RequestOptions;
import com.seed.undiscriminatedUnions.core.SeedUndiscriminatedUnionsError;
import com.seed.undiscriminatedUnions.resources.union.types.MyUnion;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class UnionClient {
    protected final ClientOptions clientOptions;

    public UnionClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public MyUnion get(MyUnion request) {
        return get(request, null);
    }

    public MyUnion get(MyUnion request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedUndiscriminatedUnionsError("Failed to serialize request", e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), MyUnion.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedUndiscriminatedUnionsError("Network error executing HTTP request", e);
        }
    }
}
