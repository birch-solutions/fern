/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.packageYml;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.packageYml.core.ClientOptions;
import com.seed.packageYml.core.MediaTypes;
import com.seed.packageYml.core.ObjectMappers;
import com.seed.packageYml.core.RequestOptions;
import com.seed.packageYml.core.SeedPackageYmlApiError;
import com.seed.packageYml.core.SeedPackageYmlError;
import com.seed.packageYml.core.Suppliers;
import com.seed.packageYml.resources.service.ServiceClient;
import java.io.IOException;
import java.util.function.Supplier;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SeedPackageYmlClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<ServiceClient> serviceClient;

    public SeedPackageYmlClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
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
            throw new SeedPackageYmlError("Failed to serialize request", e);
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
            try {
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedPackageYmlApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedPackageYmlError("Network error executing HTTP request", e);
        }
    }

    public ServiceClient service() {
        return this.serviceClient.get();
    }

    public static SeedPackageYmlClientBuilder builder() {
        return new SeedPackageYmlClientBuilder();
    }
}
