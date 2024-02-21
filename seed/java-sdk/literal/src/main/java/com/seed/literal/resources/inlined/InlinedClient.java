/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.inlined;

import com.seed.literal.core.ApiError;
import com.seed.literal.core.ClientOptions;
import com.seed.literal.core.MediaTypes;
import com.seed.literal.core.ObjectMappers;
import com.seed.literal.core.RequestOptions;
import com.seed.literal.resources.inlined.requests.SendLiteralsInlinedRequest;
import com.seed.literal.types.SendResponse;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class InlinedClient {
    protected final ClientOptions clientOptions;

    public InlinedClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public SendResponse send(SendLiteralsInlinedRequest request) {
        return send(request, null);
    }

    public SendResponse send(SendLiteralsInlinedRequest request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("inlined")
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
                .method("POST", body)
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
