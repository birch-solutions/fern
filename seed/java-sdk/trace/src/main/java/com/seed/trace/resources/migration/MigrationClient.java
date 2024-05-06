/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.migration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.seed.trace.core.ApiError;
import com.seed.trace.core.ClientOptions;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.core.RequestOptions;
import com.seed.trace.resources.migration.requests.GetAttemptedMigrationsRequest;
import com.seed.trace.resources.migration.types.Migration;
import java.io.IOException;
import java.util.List;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MigrationClient {
    protected final ClientOptions clientOptions;

    public MigrationClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public List<Migration> getAttemptedMigrations(GetAttemptedMigrationsRequest request) {
        return getAttemptedMigrations(request, null);
    }

    public List<Migration> getAttemptedMigrations(
            GetAttemptedMigrationsRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("migration-info")
                .addPathSegments("all")
                .build();
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        _requestBuilder.addHeader("admin-key-header", request.getAdminKeyHeader());
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        response.body().string(), new TypeReference<List<Migration>>() {});
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(
                            response.body() != null ? response.body().toString() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
