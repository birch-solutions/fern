/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.objectsWithImports.resources.optional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.objectsWithImports.core.ClientOptions;
import com.seed.objectsWithImports.core.MediaTypes;
import com.seed.objectsWithImports.core.ObjectMappers;
import com.seed.objectsWithImports.core.RequestOptions;
import com.seed.objectsWithImports.core.SeedObjectsWithImportsError;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class OptionalClient {
    protected final ClientOptions clientOptions;

    public OptionalClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public String sendOptionalBody() {
        return sendOptionalBody(Optional.empty());
    }

    public String sendOptionalBody(Optional<Map<String, Object>> request) {
        return sendOptionalBody(request, null);
    }

    public String sendOptionalBody(Optional<Map<String, Object>> request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("send-optional-body")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create("", null);
            if (request.isPresent()) {
                body = RequestBody.create(
                        ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
            }
        } catch (JsonProcessingException e) {
            throw new SeedObjectsWithImportsError("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), String.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
        } catch (IOException e) {
            throw new SeedObjectsWithImportsError("Network error executing HTTP request", e);
        }
    }
}
