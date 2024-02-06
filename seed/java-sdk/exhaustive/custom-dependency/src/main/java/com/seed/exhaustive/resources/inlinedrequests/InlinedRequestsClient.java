/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.inlinedrequests;

import com.seed.exhaustive.core.ApiError;
import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.MediaTypes;
import com.seed.exhaustive.core.ObjectMappers;
import com.seed.exhaustive.core.RequestOptions;
import com.seed.exhaustive.resources.inlinedrequests.requests.PostWithObjectBody;
import com.seed.exhaustive.resources.types.object.types.ObjectWithOptionalField;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class InlinedRequestsClient {
    protected final ClientOptions clientOptions;

    public InlinedRequestsClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * POST with custom object in request body, response is an object
     */
    public ObjectWithOptionalField postWithObjectBodyandResponse(PostWithObjectBody request) {
        return postWithObjectBodyandResponse(request, null);
    }

    /**
     * POST with custom object in request body, response is an object
     */
    public ObjectWithOptionalField postWithObjectBodyandResponse(
            PostWithObjectBody request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("req-bodies")
                .addPathSegments("object")
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
            Response response =
                    clientOptions.httpClient().newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ObjectWithOptionalField.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
