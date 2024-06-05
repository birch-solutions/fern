/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.unions.resources.union;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.unions.core.ClientOptions;
import com.seed.unions.core.MediaTypes;
import com.seed.unions.core.ObjectMappers;
import com.seed.unions.core.RequestOptions;
import com.seed.unions.core.SeedUnionsApiError;
import com.seed.unions.core.SeedUnionsError;
import com.seed.unions.resources.union.types.Shape;
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

    public Shape get(String id) {
        return get(id, null);
    }

    public Shape get(String id, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegment(id)
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Shape.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedUnionsApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedUnionsError("Network error executing HTTP request", e);
        }
    }

    public boolean update(Shape request) {
        return update(request, null);
    }

    public boolean update(Shape request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedUnionsError("Failed to serialize request", e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("PATCH", body)
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), boolean.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedUnionsApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedUnionsError("Network error executing HTTP request", e);
        }
    }
}
