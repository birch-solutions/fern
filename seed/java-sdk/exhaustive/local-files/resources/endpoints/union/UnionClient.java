/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.endpoints.union;

import com.fern.sdk.core.ApiError;
import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.MediaTypes;
import com.fern.sdk.core.ObjectMappers;
import com.fern.sdk.core.RequestOptions;
import com.fern.sdk.resources.types.union.types.Animal;
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

public class UnionClient {
  protected final ClientOptions clientOptions;

  public UnionClient(ClientOptions clientOptions) {
    this.clientOptions = clientOptions;
  }

  public Animal getAndReturnUnion(Animal request) {
    return getAndReturnUnion(request,null);
  }

  public Animal getAndReturnUnion(Animal request, RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("union")

      .build();
    RequestBody body;
    try {
      body = RequestBody.create(ObjectMappers.JSON_MAPPER.writeValueAsBytes(request), MediaTypes.APPLICATION_JSON);
    }
    catch(Exception e) {
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
      if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
        client = clientOptions.httpClientWithTimeout(requestOptions);
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Animal.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body() != null ? response.body().toString() : "{}", Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
