/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.noauth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.MediaTypes;
import com.seed.exhaustive.core.ObjectMappers;
import com.seed.exhaustive.core.RequestOptions;
import com.seed.exhaustive.core.SeedExhaustiveApiError;
import com.seed.exhaustive.core.SeedExhaustiveError;
import com.seed.exhaustive.resources.generalerrors.errors.SeedExhaustiveBadRequestBody;
import com.seed.exhaustive.resources.generalerrors.types.BadObjectRequestInfo;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class NoAuthClient {
    protected final ClientOptions clientOptions;

    public NoAuthClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * POST request with no auth
     */
    public boolean postWithNoAuth(Object request) {
        return postWithNoAuth(request, null);
    }

    /**
     * POST request with no auth
     */
    public boolean postWithNoAuth(Object request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("no-auth")
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
                returnObjectMappers.JSON_MAPPER.readValue(responseBody.string(), boolean.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            try {
                if (response.code() == 400) {
                    throw new SeedExhaustiveBadRequestBody(
                            ObjectMappers.JSON_MAPPER.readValue(responseBodyString, BadObjectRequestInfo.class));
                }
            } catch (JsonProcessingException ignored) {
                // unable to map error response, throwing generic error
            }
            throw new SeedExhaustiveApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedExhaustiveError("Network error executing HTTP request", e);
        }
    }
}
