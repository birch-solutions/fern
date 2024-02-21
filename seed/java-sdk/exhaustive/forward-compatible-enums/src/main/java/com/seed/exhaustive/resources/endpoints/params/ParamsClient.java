/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.endpoints.params;

import com.seed.exhaustive.core.ApiError;
import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.MediaTypes;
import com.seed.exhaustive.core.ObjectMappers;
import com.seed.exhaustive.core.RequestOptions;
import com.seed.exhaustive.resources.endpoints.params.requests.GetWithMultipleQuery;
import com.seed.exhaustive.resources.endpoints.params.requests.GetWithPathAndQuery;
import com.seed.exhaustive.resources.endpoints.params.requests.GetWithQuery;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ParamsClient {
    protected final ClientOptions clientOptions;

    public ParamsClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * GET with path param
     */
    public String getWithPath(String param) {
        return getWithPath(param, null);
    }

    /**
     * GET with path param
     */
    public String getWithPath(String param, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("params")
                .addPathSegments("path")
                .addPathSegment(param)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * GET with query param
     */
    public void getWithQuery(GetWithQuery request) {
        getWithQuery(request, null);
    }

    /**
     * GET with query param
     */
    public void getWithQuery(GetWithQuery request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("params");
        httpUrl.addQueryParameter("query", request.getQuery());
        httpUrl.addQueryParameter("number", Integer.toString(request.getNumber()));
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * GET with multiple of same query param
     */
    public void getWithAllowMultipleQuery(GetWithMultipleQuery request) {
        getWithAllowMultipleQuery(request, null);
    }

    /**
     * GET with multiple of same query param
     */
    public void getWithAllowMultipleQuery(GetWithMultipleQuery request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("params");
        httpUrl.addQueryParameter("query", request.getQuery());
        httpUrl.addQueryParameter("numer", Integer.toString(request.getNumer()));
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * GET with path and query params
     */
    public void getWithPathAndQuery(String param, GetWithPathAndQuery request) {
        getWithPathAndQuery(param, request, null);
    }

    /**
     * GET with path and query params
     */
    public void getWithPathAndQuery(String param, GetWithPathAndQuery request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("params")
                .addPathSegments("path")
                .addPathSegment(param);
        httpUrl.addQueryParameter("query", request.getQuery());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * PUT to update with path param
     */
    public String modifyWithPath(String param, String request) {
        return modifyWithPath(param, request, null);
    }

    /**
     * PUT to update with path param
     */
    public String modifyWithPath(String param, String request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("params")
                .addPathSegments("path")
                .addPathSegment(param)
                .build();
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("PUT", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
