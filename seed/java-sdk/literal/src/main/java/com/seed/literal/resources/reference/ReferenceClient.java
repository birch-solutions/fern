/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.reference;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.literal.core.ClientOptions;
import com.seed.literal.core.MediaTypes;
import com.seed.literal.core.ObjectMappers;
import com.seed.literal.core.RequestOptions;
import com.seed.literal.core.SeedLiteralApiException;
import com.seed.literal.core.SeedLiteralException;
import com.seed.literal.resources.reference.types.SendRequest;
import com.seed.literal.types.SendResponse;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ReferenceClient {
    protected final ClientOptions clientOptions;

    public ReferenceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public SendResponse send(SendRequest request) {
        return send(request, null);
    }

    public SendResponse send(SendRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("reference")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedLiteralException("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), SendResponse.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedLiteralApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedLiteralException("Network error executing HTTP request", e);
        }
    }
}
