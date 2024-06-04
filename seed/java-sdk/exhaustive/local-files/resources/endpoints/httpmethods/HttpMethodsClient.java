/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.endpoints.httpmethods;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.MediaTypes;
import com.fern.sdk.core.ObjectMappers;
import com.fern.sdk.core.RequestOptions;
import com.fern.sdk.core.SeedExhaustiveApiError;
import com.fern.sdk.core.SeedExhaustiveError;
import com.fern.sdk.resources.types.object.types.ObjectWithOptionalField;
import com.fern.sdk.resources.types.object.types.ObjectWithRequiredField;
import java.io.IOException;
import java.lang.Object;
import java.lang.String;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

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
    OkHttpClient client = clientOptions.httpClient();
    if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
      client = clientOptions.httpClientWithTimeout(requestOptions);
    }
    try (Response response = client.newCall(okhttpRequest).execute()) {
      ResponseBody responseBody = response.body();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), String.class);
      }
      String responseBodyString = responseBody != null ? responseBody.string() : "{}";
      try {
      }
      catch (JsonProcessingException ignored) {
      }
      throw new SeedExhaustiveApiError("Error with status code " + response.code(), response.code(), ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
    }
    catch (IOException e) {
      throw new SeedExhaustiveError("Network error executing HTTP request", e);
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
    catch(JsonProcessingException e) {
      throw new SeedExhaustiveError("Failed to serialize request", e);
    }
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("POST", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    OkHttpClient client = clientOptions.httpClient();
    if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
      client = clientOptions.httpClientWithTimeout(requestOptions);
    }
    try (Response response = client.newCall(okhttpRequest).execute()) {
      ResponseBody responseBody = response.body();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithOptionalField.class);
      }
      String responseBodyString = responseBody != null ? responseBody.string() : "{}";
      try {
      }
      catch (JsonProcessingException ignored) {
      }
      throw new SeedExhaustiveApiError("Error with status code " + response.code(), response.code(), ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
    }
    catch (IOException e) {
      throw new SeedExhaustiveError("Network error executing HTTP request", e);
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
    catch(JsonProcessingException e) {
      throw new SeedExhaustiveError("Failed to serialize request", e);
    }
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("PUT", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    OkHttpClient client = clientOptions.httpClient();
    if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
      client = clientOptions.httpClientWithTimeout(requestOptions);
    }
    try (Response response = client.newCall(okhttpRequest).execute()) {
      ResponseBody responseBody = response.body();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithOptionalField.class);
      }
      String responseBodyString = responseBody != null ? responseBody.string() : "{}";
      try {
      }
      catch (JsonProcessingException ignored) {
      }
      throw new SeedExhaustiveApiError("Error with status code " + response.code(), response.code(), ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
    }
    catch (IOException e) {
      throw new SeedExhaustiveError("Network error executing HTTP request", e);
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
    catch(JsonProcessingException e) {
      throw new SeedExhaustiveError("Failed to serialize request", e);
    }
    Request okhttpRequest = new Request.Builder()
      .url(httpUrl)
      .method("PATCH", body)
      .headers(Headers.of(clientOptions.headers(requestOptions)))
      .addHeader("Content-Type", "application/json")
      .build();
    OkHttpClient client = clientOptions.httpClient();
    if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
      client = clientOptions.httpClientWithTimeout(requestOptions);
    }
    try (Response response = client.newCall(okhttpRequest).execute()) {
      ResponseBody responseBody = response.body();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), ObjectWithOptionalField.class);
      }
      String responseBodyString = responseBody != null ? responseBody.string() : "{}";
      try {
      }
      catch (JsonProcessingException ignored) {
      }
      throw new SeedExhaustiveApiError("Error with status code " + response.code(), response.code(), ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
    }
    catch (IOException e) {
      throw new SeedExhaustiveError("Network error executing HTTP request", e);
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
    OkHttpClient client = clientOptions.httpClient();
    if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
      client = clientOptions.httpClientWithTimeout(requestOptions);
    }
    try (Response response = client.newCall(okhttpRequest).execute()) {
      ResponseBody responseBody = response.body();
      if (response.isSuccessful()) {
        return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), boolean.class);
      }
      String responseBodyString = responseBody != null ? responseBody.string() : "{}";
      try {
      }
      catch (JsonProcessingException ignored) {
      }
      throw new SeedExhaustiveApiError("Error with status code " + response.code(), response.code(), ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
    }
    catch (IOException e) {
      throw new SeedExhaustiveError("Network error executing HTTP request", e);
    }
  }
}
