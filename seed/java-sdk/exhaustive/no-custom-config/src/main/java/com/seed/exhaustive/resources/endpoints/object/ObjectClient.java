/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.endpoints.object;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.MediaTypes;
import com.seed.exhaustive.core.ObjectMappers;
import com.seed.exhaustive.core.RequestOptions;
import com.seed.exhaustive.core.SeedExhaustiveApiError;
import com.seed.exhaustive.core.SeedExhaustiveError;
import com.seed.exhaustive.resources.types.object.types.NestedObjectWithOptionalField;
import com.seed.exhaustive.resources.types.object.types.NestedObjectWithRequiredField;
import com.seed.exhaustive.resources.types.object.types.ObjectWithMapOfMap;
import com.seed.exhaustive.resources.types.object.types.ObjectWithOptionalField;
import com.seed.exhaustive.resources.types.object.types.ObjectWithRequiredField;
import java.io.IOException;
import java.util.List;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ObjectClient {
    protected final ClientOptions clientOptions;

    public ObjectClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public ObjectWithOptionalField getAndReturnWithOptionalField() {
        return getAndReturnWithOptionalField(ObjectWithOptionalField.builder().build());
    }

    public ObjectWithOptionalField getAndReturnWithOptionalField(ObjectWithOptionalField request) {
        return getAndReturnWithOptionalField(request, null);
    }

    public ObjectWithOptionalField getAndReturnWithOptionalField(
            ObjectWithOptionalField request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-with-optional-field")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithOptionalField.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }

    public ObjectWithRequiredField getAndReturnWithRequiredField(ObjectWithRequiredField request) {
        return getAndReturnWithRequiredField(request, null);
    }

    public ObjectWithRequiredField getAndReturnWithRequiredField(
            ObjectWithRequiredField request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-with-required-field")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithRequiredField.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }

    public ObjectWithMapOfMap getAndReturnWithMapOfMap(ObjectWithMapOfMap request) {
        return getAndReturnWithMapOfMap(request, null);
    }

    public ObjectWithMapOfMap getAndReturnWithMapOfMap(ObjectWithMapOfMap request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-with-map-of-map")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithMapOfMap.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }

    public NestedObjectWithOptionalField getAndReturnNestedWithOptionalField() {
        return getAndReturnNestedWithOptionalField(
                NestedObjectWithOptionalField.builder().build());
    }

    public NestedObjectWithOptionalField getAndReturnNestedWithOptionalField(NestedObjectWithOptionalField request) {
        return getAndReturnNestedWithOptionalField(request, null);
    }

    public NestedObjectWithOptionalField getAndReturnNestedWithOptionalField(
            NestedObjectWithOptionalField request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-nested-with-optional-field")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), NestedObjectWithOptionalField.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }

    public NestedObjectWithRequiredField getAndReturnNestedWithRequiredField(
            String string, NestedObjectWithRequiredField request) {
        return getAndReturnNestedWithRequiredField(string, request, null);
    }

    public NestedObjectWithRequiredField getAndReturnNestedWithRequiredField(
            String string, NestedObjectWithRequiredField request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-nested-with-required-field")
                .addPathSegment(string)
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), NestedObjectWithRequiredField.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }

    public NestedObjectWithRequiredField getAndReturnNestedWithRequiredFieldAsList(
            List<NestedObjectWithRequiredField> request) {
        return getAndReturnNestedWithRequiredFieldAsList(request, null);
    }

    public NestedObjectWithRequiredField getAndReturnNestedWithRequiredFieldAsList(
            List<NestedObjectWithRequiredField> request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("object")
                .addPathSegments("get-and-return-nested-with-required-field-list")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExhaustiveError("Failed to serialize request", e);
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), NestedObjectWithRequiredField.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }
}
