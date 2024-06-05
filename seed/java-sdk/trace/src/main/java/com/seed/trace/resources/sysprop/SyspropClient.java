/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.sysprop;

import com.fasterxml.jackson.core.type.TypeReference;
import com.seed.trace.core.ClientOptions;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.core.RequestOptions;
import com.seed.trace.core.SeedTraceApiError;
import com.seed.trace.core.SeedTraceError;
import com.seed.trace.resources.commons.types.Language;
import java.io.IOException;
import java.util.Map;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SyspropClient {
    protected final ClientOptions clientOptions;

    public SyspropClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void setNumWarmInstances(Language language, int numWarmInstances) {
        setNumWarmInstances(language, numWarmInstances, null);
    }

    public void setNumWarmInstances(Language language, int numWarmInstances, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("sysprop")
                .addPathSegments("num-warm-instances")
                .addPathSegment(language.toString())
                .addPathSegment(Integer.toString(numWarmInstances))
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("PUT", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
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
            throw new SeedTraceApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedTraceError("Network error executing HTTP request", e);
        }
    }

    public Map<Language, Integer> getNumWarmInstances() {
        return getNumWarmInstances(null);
    }

    public Map<Language, Integer> getNumWarmInstances(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("sysprop")
                .addPathSegments("num-warm-instances")
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
                return ObjectMappers.JSON_MAPPER.readValue(
                        responseBody.string(), new TypeReference<Map<Language, Integer>>() {});
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedTraceApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedTraceError("Network error executing HTTP request", e);
        }
    }
}
