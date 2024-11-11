/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.examples.core.ClientOptions;
import com.seed.examples.core.MediaTypes;
import com.seed.examples.core.ObjectMappers;
import com.seed.examples.core.RequestOptions;
import com.seed.examples.core.SeedExamplesApiException;
import com.seed.examples.core.SeedExamplesException;
import com.seed.examples.core.Suppliers;
import com.seed.examples.resources.file.FileClient;
import com.seed.examples.resources.health.HealthClient;
import com.seed.examples.resources.service.ServiceClient;
import com.seed.examples.types.Identifier;
import com.seed.examples.types.Type;
import java.io.IOException;
import java.util.function.Supplier;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SeedExamplesClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<FileClient> fileClient;

    protected final Supplier<HealthClient> healthClient;

    protected final Supplier<ServiceClient> serviceClient;

    public SeedExamplesClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.fileClient = Suppliers.memoize(() -> new FileClient(clientOptions));
        this.healthClient = Suppliers.memoize(() -> new HealthClient(clientOptions));
        this.serviceClient = Suppliers.memoize(() -> new ServiceClient(clientOptions));
    }

    public String echo(String request) {
        return echo(request, null);
    }

    public String echo(String request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExamplesException("Failed to serialize request", e);
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
            throw new SeedExamplesApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExamplesException("Network error executing HTTP request", e);
        }
    }

    public Identifier createType(Type request) {
        return createType(request, null);
    }

    public Identifier createType(Type request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedExamplesException("Failed to serialize request", e);
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
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Identifier.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedExamplesApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExamplesException("Network error executing HTTP request", e);
        }
    }

    public FileClient file() {
        return this.fileClient.get();
    }

    public HealthClient health() {
        return this.healthClient.get();
    }

    public ServiceClient service() {
        return this.serviceClient.get();
    }

    public static SeedExamplesClientBuilder builder() {
        return new SeedExamplesClientBuilder();
    }
}
