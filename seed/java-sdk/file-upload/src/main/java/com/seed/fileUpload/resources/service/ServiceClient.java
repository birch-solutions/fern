/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.fileUpload.resources.service;

import com.seed.fileUpload.core.ClientOptions;
import com.seed.fileUpload.core.ObjectMappers;
import com.seed.fileUpload.core.RequestOptions;
import com.seed.fileUpload.core.SeedFileUploadApiException;
import com.seed.fileUpload.core.SeedFileUploadException;
import com.seed.fileUpload.resources.service.requests.JustFileRequet;
import com.seed.fileUpload.resources.service.requests.JustFileWithQueryParamsRequet;
import com.seed.fileUpload.resources.service.requests.MyRequest;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public void post(
            File file, File fileList, Optional<File> maybeFile, Optional<File> maybeFileList, MyRequest request) {
        post(file, fileList, maybeFile, maybeFileList, request, null);
    }

    public void post(
            File file,
            File fileList,
            Optional<File> maybeFile,
            Optional<File> maybeFileList,
            MyRequest request,
            RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        MultipartBody.Builder body = new MultipartBody.Builder().setType(MultipartBody.FORM);
        try {
            if (request.getMaybeString().isPresent()) {
                body.addFormDataPart(
                        "maybeString", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getMaybeString()));
            }
            body.addFormDataPart("integer", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getInteger()));
            String fileMimeType = Files.probeContentType(file.toPath());
            MediaType fileMimeTypeMediaType = fileMimeType != null ? MediaType.parse(fileMimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMimeTypeMediaType, file));
            String fileListMimeType = Files.probeContentType(fileList.toPath());
            MediaType fileListMimeTypeMediaType = fileListMimeType != null ? MediaType.parse(fileListMimeType) : null;
            body.addFormDataPart(
                    "fileList", fileList.getName(), RequestBody.create(fileListMimeTypeMediaType, fileList));
            if (maybeFile.isPresent()) {
                String maybeFileMimeType =
                        Files.probeContentType(maybeFile.get().toPath());
                MediaType maybeFileMimeTypeMediaType =
                        maybeFileMimeType != null ? MediaType.parse(maybeFileMimeType) : null;
                body.addFormDataPart(
                        "maybeFile",
                        maybeFile.get().getName(),
                        RequestBody.create(maybeFileMimeTypeMediaType, maybeFile.get()));
            }
            if (maybeFileList.isPresent()) {
                String maybeFileListMimeType =
                        Files.probeContentType(maybeFileList.get().toPath());
                MediaType maybeFileListMimeTypeMediaType =
                        maybeFileListMimeType != null ? MediaType.parse(maybeFileListMimeType) : null;
                body.addFormDataPart(
                        "maybeFileList",
                        maybeFileList.get().getName(),
                        RequestBody.create(maybeFileListMimeTypeMediaType, maybeFileList.get()));
            }
            if (request.getMaybeInteger().isPresent()) {
                body.addFormDataPart(
                        "maybeInteger", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getMaybeInteger()));
            }
            if (request.getOptionalListOfStrings().isPresent()) {
                body.addFormDataPart(
                        "optionalListOfStrings",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalListOfStrings()));
            }
            body.addFormDataPart(
                    "listOfObjects", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getListOfObjects()));
            if (request.getOptionalMetadata().isPresent()) {
                body.addFormDataPart(
                        "optionalMetadata",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalMetadata()));
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("POST", body.build())
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
            throw new SeedFileUploadApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedFileUploadException("Network error executing HTTP request", e);
        }
    }

    public void justFile(File file, JustFileRequet request) {
        justFile(file, request, null);
    }

    public void justFile(File file, JustFileRequet request, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("just-file")
                .build();
        MultipartBody.Builder body = new MultipartBody.Builder().setType(MultipartBody.FORM);
        try {
            String fileMimeType = Files.probeContentType(file.toPath());
            MediaType fileMimeTypeMediaType = fileMimeType != null ? MediaType.parse(fileMimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMimeTypeMediaType, file));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("POST", body.build())
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
            throw new SeedFileUploadApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedFileUploadException("Network error executing HTTP request", e);
        }
    }

    public void justFileWithQueryParams(File file, JustFileWithQueryParamsRequet request) {
        justFileWithQueryParams(file, request, null);
    }

    public void justFileWithQueryParams(
            File file, JustFileWithQueryParamsRequet request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("just-file-with-query-params");
        if (request.getMaybeString().isPresent()) {
            httpUrl.addQueryParameter("maybeString", request.getMaybeString().get());
        }
        httpUrl.addQueryParameter("integer", Integer.toString(request.getInteger()));
        if (request.getMaybeInteger().isPresent()) {
            httpUrl.addQueryParameter(
                    "maybeInteger", request.getMaybeInteger().get().toString());
        }
        httpUrl.addQueryParameter("listOfStrings", request.getListOfStrings());
        if (request.getOptionalListOfStrings().isPresent()) {
            httpUrl.addQueryParameter(
                    "optionalListOfStrings", request.getOptionalListOfStrings().get());
        }
        MultipartBody.Builder body = new MultipartBody.Builder().setType(MultipartBody.FORM);
        try {
            String fileMimeType = Files.probeContentType(file.toPath());
            MediaType fileMimeTypeMediaType = fileMimeType != null ? MediaType.parse(fileMimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMimeTypeMediaType, file));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("POST", body.build())
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
            throw new SeedFileUploadApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedFileUploadException("Network error executing HTTP request", e);
        }
    }
}
