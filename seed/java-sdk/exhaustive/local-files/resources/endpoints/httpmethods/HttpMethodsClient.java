/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.endpoints.httpmethods;

import com.fern.sdk.core.ApiError;
import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.MediaTypes;
import com.fern.sdk.core.ObjectMappers;
import com.fern.sdk.core.RequestOptions;
import com.fern.sdk.resources.types.object.types.ObjectWithOptionalField;
import com.fern.sdk.resources.types.object.types.ObjectWithRequiredField;
import java.io.IOException;
import java.lang.Exception;
import java.lang.Object;
import java.lang.RuntimeException;
import java.lang.String;
import java.util.concurrent.TimeUnit;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class HttpMethodsClient {
  protected final ClientOptions clientOptions;

  public HttpMethodsClient(ClientOptions clientOptions) {
    this.clientOptions = clientOptions;
  }

  public String testGet(String id) {
    return testGet(id,null);
  }

  public String testGet(String id, RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("http-methods")

      .addPathSegment(id)
      .build();
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("GET", null)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    try {
      OkHttpClient client = clientOptions.httpClient();
      if (requestOptions.getTimeout().isPresent()) {
        client = client.newBuilder().callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit()).connectTimeout(0, TimeUnit.SECONDS).writeTimeout(0, TimeUnit.SECONDS).readTimeout(0, TimeUnit.SECONDS).build();
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public ObjectWithOptionalField testPost(ObjectWithRequiredField request) {
    return testPost(request,null);
  }

  public ObjectWithOptionalField testPost(ObjectWithRequiredField request,
      RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("http-methods")

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
      if (requestOptions.getTimeout().isPresent()) {
        client = client.newBuilder().callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit()).connectTimeout(0, TimeUnit.SECONDS).writeTimeout(0, TimeUnit.SECONDS).readTimeout(0, TimeUnit.SECONDS).build();
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ObjectWithOptionalField.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public ObjectWithOptionalField testPut(String id, ObjectWithRequiredField request) {
    return testPut(id,request,null);
  }

  public ObjectWithOptionalField testPut(String id, ObjectWithRequiredField request,
      RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("http-methods")

      .addPathSegment(id)
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
      .method("PUT", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    try {
      OkHttpClient client = clientOptions.httpClient();
      if (requestOptions.getTimeout().isPresent()) {
        client = client.newBuilder().callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit()).connectTimeout(0, TimeUnit.SECONDS).writeTimeout(0, TimeUnit.SECONDS).readTimeout(0, TimeUnit.SECONDS).build();
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ObjectWithOptionalField.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public ObjectWithOptionalField testPatch(String id) {
    return testPatch(id,ObjectWithOptionalField.builder().build());
  }

  public ObjectWithOptionalField testPatch(String id, ObjectWithOptionalField request) {
    return testPatch(id,request,null);
  }

  public ObjectWithOptionalField testPatch(String id, ObjectWithOptionalField request,
      RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("http-methods")

      .addPathSegment(id)
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
      .method("PATCH", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    try {
      OkHttpClient client = clientOptions.httpClient();
      if (requestOptions.getTimeout().isPresent()) {
        client = client.newBuilder().callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit()).connectTimeout(0, TimeUnit.SECONDS).writeTimeout(0, TimeUnit.SECONDS).readTimeout(0, TimeUnit.SECONDS).build();
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ObjectWithOptionalField.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public boolean testDelete(String id) {
    return testDelete(id,null);
  }

  public boolean testDelete(String id, RequestOptions requestOptions) {
    HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl()).newBuilder()
      .addPathSegments("http-methods")

      .addPathSegment(id)
      .build();
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("DELETE", null)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    try {
      OkHttpClient client = clientOptions.httpClient();
      if (requestOptions.getTimeout().isPresent()) {
        client = client.newBuilder().callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit()).connectTimeout(0, TimeUnit.SECONDS).writeTimeout(0, TimeUnit.SECONDS).readTimeout(0, TimeUnit.SECONDS).build();
      }
      Response response = client.newCall(okhttpRequest).execute();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), boolean.class);
      }
      throw new ApiError(response.code(), ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
