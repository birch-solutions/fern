/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.query;

import com.seed.literal.core.ApiError;
import com.seed.literal.core.ClientOptions;
import com.seed.literal.core.ObjectMappers;
import com.seed.literal.core.RequestOptions;
import com.seed.literal.resources.query.requests.SendLiteralsInQueryRequest;
import com.seed.literal.types.SendResponse;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class QueryClient {
    protected final ClientOptions clientOptions;

    public QueryClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public SendResponse send(SendLiteralsInQueryRequest request) {
        return send(request, null);
    }

    public SendResponse send(SendLiteralsInQueryRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("query");
        httpUrl.addQueryParameter("prompt", request.getPrompt());
        httpUrl.addQueryParameter("query", request.getQuery());
        httpUrl.addQueryParameter("stream", request.getStream().toString());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("POST", RequestBody.create("", null))
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
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), SendResponse.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
