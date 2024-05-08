/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.resources.users;

import com.seed.pagination.core.ApiError;
import com.seed.pagination.core.ClientOptions;
import com.seed.pagination.core.ObjectMappers;
import com.seed.pagination.core.RequestOptions;
import com.seed.pagination.resources.users.requests.ListUsernamesRequest;
import com.seed.pagination.resources.users.requests.ListUsersCursorPaginationRequest;
import com.seed.pagination.resources.users.requests.ListUsersExtendedRequest;
import com.seed.pagination.resources.users.requests.ListUsersOffsetPaginationRequest;
import com.seed.pagination.resources.users.requests.ListWithGlobalConfigRequest;
import com.seed.pagination.resources.users.types.ListUsersExtendedResponse;
import com.seed.pagination.resources.users.types.ListUsersPaginationResponse;
import com.seed.pagination.resources.users.types.UsernameContainer;
import com.seed.pagination.types.UsernameCursor;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class UsersClient {
    protected final ClientOptions clientOptions;

    public UsersClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public ListUsersPaginationResponse listWithCursorPagination() {
        return listWithCursorPagination(
                ListUsersCursorPaginationRequest.builder().build());
    }

    public ListUsersPaginationResponse listWithCursorPagination(ListUsersCursorPaginationRequest request) {
        return listWithCursorPagination(request, null);
    }

    public ListUsersPaginationResponse listWithCursorPagination(
            ListUsersCursorPaginationRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getPage().isPresent()) {
            httpUrl.addQueryParameter("page", request.getPage().get().toString());
        }
        if (request.getPerPage().isPresent()) {
            httpUrl.addQueryParameter("per_page", request.getPerPage().get().toString());
        }
        if (request.getOrder().isPresent()) {
            httpUrl.addQueryParameter("order", request.getOrder().get().toString());
        }
        if (request.getStartingAfter().isPresent()) {
            httpUrl.addQueryParameter(
                    "starting_after", request.getStartingAfter().get());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ListUsersPaginationResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public ListUsersPaginationResponse listWithOffsetPagination() {
        return listWithOffsetPagination(
                ListUsersOffsetPaginationRequest.builder().build());
    }

    public ListUsersPaginationResponse listWithOffsetPagination(ListUsersOffsetPaginationRequest request) {
        return listWithOffsetPagination(request, null);
    }

    public ListUsersPaginationResponse listWithOffsetPagination(
            ListUsersOffsetPaginationRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getPage().isPresent()) {
            httpUrl.addQueryParameter("page", request.getPage().get().toString());
        }
        if (request.getPerPage().isPresent()) {
            httpUrl.addQueryParameter("per_page", request.getPerPage().get().toString());
        }
        if (request.getOrder().isPresent()) {
            httpUrl.addQueryParameter("order", request.getOrder().get().toString());
        }
        if (request.getStartingAfter().isPresent()) {
            httpUrl.addQueryParameter(
                    "starting_after", request.getStartingAfter().get());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ListUsersPaginationResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public ListUsersExtendedResponse listWithExtendedResults() {
        return listWithExtendedResults(ListUsersExtendedRequest.builder().build());
    }

    public ListUsersExtendedResponse listWithExtendedResults(ListUsersExtendedRequest request) {
        return listWithExtendedResults(request, null);
    }

    public ListUsersExtendedResponse listWithExtendedResults(
            ListUsersExtendedRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getCursor().isPresent()) {
            httpUrl.addQueryParameter("cursor", request.getCursor().get().toString());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ListUsersExtendedResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public UsernameCursor listUsernames() {
        return listUsernames(ListUsernamesRequest.builder().build());
    }

    public UsernameCursor listUsernames(ListUsernamesRequest request) {
        return listUsernames(request, null);
    }

    public UsernameCursor listUsernames(ListUsernamesRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getStartingAfter().isPresent()) {
            httpUrl.addQueryParameter(
                    "starting_after", request.getStartingAfter().get());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), UsernameCursor.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public UsernameContainer listWithGlobalConfig() {
        return listWithGlobalConfig(ListWithGlobalConfigRequest.builder().build());
    }

    public UsernameContainer listWithGlobalConfig(ListWithGlobalConfigRequest request) {
        return listWithGlobalConfig(request, null);
    }

    public UsernameContainer listWithGlobalConfig(ListWithGlobalConfigRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getOffset().isPresent()) {
            httpUrl.addQueryParameter("offset", request.getOffset().get().toString());
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
                client = clientOptions.httpClientWithTimeout(requestOptions);
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), UsernameContainer.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
