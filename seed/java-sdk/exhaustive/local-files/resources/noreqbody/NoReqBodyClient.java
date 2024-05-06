/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.noreqbody;

import com.fern.sdk.core.ApiError;
import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.ObjectMappers;
import com.fern.sdk.core.RequestOptions;
import com.fern.sdk.resources.types.object.types.ObjectWithOptionalField;
import java.io.IOException;
import java.lang.Object;
import java.lang.RuntimeException;
import java.lang.String;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class NoReqBodyClient {
  protected final ClientOptions clientOptions;

  public NoReqBodyClient(ClientOptions clientOptions) {
    this.clientOptions = clientOptions;
  }

  public ObjectWithOptionalField getWithNoRequestBody() {
    return getWithNoRequestBody(null);
  }

  public ObjectWithOptionalField getWithNoRequestBody(RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("no-req-body")

      .build();
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("GET", null)
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
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ObjectWithOptionalField.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body() != null ? response.body().toString() : "{}", Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public String postWithNoRequestBody() {
    return postWithNoRequestBody(null);
  }

  public String postWithNoRequestBody(RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("no-req-body")

      .build();
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("POST", RequestBody.create("", null))
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
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body() != null ? response.body().toString() : "{}", Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
