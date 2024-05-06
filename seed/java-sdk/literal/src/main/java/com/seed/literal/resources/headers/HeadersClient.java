/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.headers;

import com.seed.literal.core.ApiError;
import com.seed.literal.core.ClientOptions;
import com.seed.literal.core.MediaTypes;
import com.seed.literal.core.ObjectMappers;
import com.seed.literal.core.RequestOptions;
import com.seed.literal.resources.headers.requests.SendLiteralsInHeadersRequest;
import com.seed.literal.types.SendResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class HeadersClient {
    protected final ClientOptions clientOptions;

    public HeadersClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public SendResponse send(SendLiteralsInHeadersRequest request) {
        return send(request, null);
    }

    public SendResponse send(SendLiteralsInHeadersRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("headers")
                .build();
        Map<String, Object> properties = new HashMap<>();
        properties.put("query", request.getQuery());
        RequestBody body;
        try {
            body = RequestBody.create(
                    ObjectMappers.JSON_MAPPER.writeValueAsBytes(properties), MediaTypes.APPLICATION_JSON);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("POST", body)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        _requestBuilder.addHeader("X-Endpoint-Version", request.getEndpointVersion());
        _requestBuilder.addHeader("X-Async", request.getAsync().toString());
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
                    ObjectMappers.JSON_MAPPER.readValue(
                            response.body() != null ? response.body().toString() : "{}", Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
