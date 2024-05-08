/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.reqwithheaders;

import com.fern.sdk.core.ApiError;
import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.MediaTypes;
import com.fern.sdk.core.ObjectMappers;
import com.fern.sdk.core.RequestOptions;
import com.fern.sdk.resources.reqwithheaders.requests.ReqWithHeaders;
import java.io.IOException;
import java.lang.Exception;
import java.lang.Object;
import java.lang.RuntimeException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ReqWithHeadersClient {
  protected final ClientOptions clientOptions;

  public ReqWithHeadersClient(ClientOptions clientOptions) {
    this.clientOptions = clientOptions;
  }

  public void getWithCustomHeader(ReqWithHeaders request) {
    getWithCustomHeader(request,null);
  }

  public void getWithCustomHeader(ReqWithHeaders request, RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("test-headers")
      .addPathSegments("custom-header")
      .build();
    RequestBody body;
    try {
      body = RequestBody.create(ObjectMappers.JSON_MAPPER.writeValueAsBytes(request.getBody()), MediaTypes.APPLICATION_JSON);
    }
    catch(Exception e) {
      throw new RuntimeException(e);
    }
    Request.Builder _requestBuilder = new Request.Builder()
      .url(httpUrl)
      .method("POST", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json");
    _requestBuilder.addHeader("X-TEST-SERVICE-HEADER", request.getXTestServiceHeader());
    _requestBuilder.addHeader("X-TEST-ENDPOINT-HEADER", request.getXTestEndpointHeader());
    Request okhttpRequest = _requestBuilder.build();
    try {
      OkHttpClient client = clientOptions.httpClient();
      if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
        client = clientOptions.httpClientWithTimeout(requestOptions);
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return;
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
