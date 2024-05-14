/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.queryParameters.resources.user;

import com.seed.queryParameters.core.ApiError;
import com.seed.queryParameters.core.ClientOptions;
import com.seed.queryParameters.core.ObjectMappers;
import com.seed.queryParameters.core.RequestOptions;
import com.seed.queryParameters.resources.user.requests.GetUsersRequest;
import com.seed.queryParameters.resources.user.types.User;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class UserClient {
    protected final ClientOptions clientOptions;

    public UserClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public User getUsername(GetUsersRequest request) {
        return getUsername(request, null);
    }

    public User getUsername(GetUsersRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("user");
        httpUrl.addQueryParameter("limit", Integer.toString(request.getLimit()));
        httpUrl.addQueryParameter("id", request.getId().toString());
        httpUrl.addQueryParameter("date", request.getDate());
        httpUrl.addQueryParameter("deadline", request.getDeadline().toString());
        httpUrl.addQueryParameter("bytes", request.getBytes().toString());
        httpUrl.addQueryParameter("user", request.getUser().toString());
        httpUrl.addQueryParameter("keyValue", request.getKeyValue());
        if (request.getOptionalString().isPresent()) {
            httpUrl.addQueryParameter(
                    "optionalString", request.getOptionalString().get());
        }
        httpUrl.addQueryParameter("nestedUser", request.getNestedUser().toString());
        if (request.getOptionalUser().isPresent()) {
            httpUrl.addQueryParameter(
                    "optionalUser", request.getOptionalUser().get().toString());
        }
        httpUrl.addQueryParameter("excludeUser", request.getExcludeUser().toString());
        httpUrl.addQueryParameter("filter", request.getFilter());
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
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), User.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(
                            responseBody != null ? responseBody.string() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
