/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.validation;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.validation.core.ClientOptions;
import com.seed.validation.core.MediaTypes;
import com.seed.validation.core.ObjectMappers;
import com.seed.validation.core.RequestOptions;
import com.seed.validation.core.SeedValidationApiException;
import com.seed.validation.core.SeedValidationException;
import com.seed.validation.requests.CreateRequest;
import com.seed.validation.requests.GetRequest;
import com.seed.validation.types.Type;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SeedValidationClient {
    protected final ClientOptions clientOptions;

    public SeedValidationClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Type create(CreateRequest request) {
        return create(request, null);
    }

    public Type create(CreateRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("create")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedValidationException("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Type.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedValidationApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedValidationException("Network error executing HTTP request", e);
        }
    }

    public Type get(GetRequest request) {
        return get(request, null);
    }

    public Type get(GetRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl =
                HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder();

        httpUrl.addQueryParameter("decimal", Double.toString(request.getDecimal()));
        httpUrl.addQueryParameter("even", Integer.toString(request.getEven()));
        httpUrl.addQueryParameter("name", request.getName());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Type.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedValidationApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedValidationException("Network error executing HTTP request", e);
        }
    }

    public static SeedValidationClientBuilder builder() {
        return new SeedValidationClientBuilder();
    }
}
