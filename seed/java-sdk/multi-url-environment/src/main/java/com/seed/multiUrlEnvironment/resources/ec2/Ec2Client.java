/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiUrlEnvironment.resources.ec2;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.multiUrlEnvironment.core.ClientOptions;
import com.seed.multiUrlEnvironment.core.MediaTypes;
import com.seed.multiUrlEnvironment.core.ObjectMappers;
import com.seed.multiUrlEnvironment.core.RequestOptions;
import com.seed.multiUrlEnvironment.core.SeedMultiUrlEnvironmentApiError;
import com.seed.multiUrlEnvironment.core.SeedMultiUrlEnvironmentError;
import com.seed.multiUrlEnvironment.resources.ec2.requests.BootInstanceRequest;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class Ec2Client {
    protected final ClientOptions clientOptions;

    public Ec2Client(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void bootInstance(BootInstanceRequest request) {
        bootInstance(request, null);
    }

    public void bootInstance(BootInstanceRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getEc2URL())
                .newBuilder()
                .addPathSegments("ec2")
                .addPathSegments("boot")
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (JsonProcessingException e) {
            throw new SeedMultiUrlEnvironmentError("Failed to serialize request", e);
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
                return;
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
            } catch (JsonProcessingException ignored) {
            }
            throw new SeedMultiUrlEnvironmentApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedMultiUrlEnvironmentError("Network error executing HTTP request", e);
        }
    }
}
