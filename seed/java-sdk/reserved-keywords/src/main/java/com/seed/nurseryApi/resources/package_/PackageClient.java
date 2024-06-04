/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.nurseryApi.resources.package_;

import com.seed.nurseryApi.core.ClientOptions;
import com.seed.nurseryApi.core.RequestOptions;
import com.seed.nurseryApi.core.SeedNurseryApiError;
import com.seed.nurseryApi.resources.package_.requests.TestRequest;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class PackageClient {
    protected final ClientOptions clientOptions;

    public PackageClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void test(TestRequest request) {
        test(request, null);
    }

    public void test(TestRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl =
                HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder();

        httpUrl.addQueryParameter("for", request.getFor());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("POST", RequestBody.create("", null))
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
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
        } catch (IOException e) {
            throw new SeedNurseryApiError("Network error executing HTTP request", e);
        }
    }
}
