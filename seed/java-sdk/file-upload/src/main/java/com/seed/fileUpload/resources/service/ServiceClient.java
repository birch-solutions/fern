/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.fileUpload.resources.service;

import com.seed.fileUpload.core.ApiError;
import com.seed.fileUpload.core.ClientOptions;
import com.seed.fileUpload.core.ObjectMappers;
import com.seed.fileUpload.core.RequestOptions;
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
            MediaType fileMediaType = fileMimeType != null ? MediaType.parse(mimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMediaType, file));
            String fileListMimeType = Files.probeContentType(fileList.toPath());
            MediaType fileListMediaType = fileListMimeType != null ? MediaType.parse(mimeType) : null;
            body.addFormDataPart("fileList", fileList.getName(), RequestBody.create(fileListMediaType, fileList));
            if (maybeFile.isPresent()) {
                String maybeFileMimeType = Files.probeContentType(maybeFile.toPath());
                MediaType maybeFileMediaType = maybeFileMimeType != null ? MediaType.parse(mimeType) : null;
                body.addFormDataPart(
                        "maybeFile", maybeFile.getName(), RequestBody.create(maybeFileMediaType, maybeFile.get()));
            }
            if (maybeFileList.isPresent()) {
                String maybeFileListMimeType = Files.probeContentType(maybeFileList.toPath());
                MediaType maybeFileListMediaType = maybeFileListMimeType != null ? MediaType.parse(mimeType) : null;
                body.addFormDataPart(
                        "maybeFileList",
                        maybeFileList.getName(),
                        RequestBody.create(maybeFileListMediaType, maybeFileList.get()));
            }
            if (request.getMaybeInteger().isPresent()) {
                body.addFormDataPart(
                        "maybeInteger", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getMaybeInteger()));
            }
            body.addFormDataPart(
                    "listOfStrings", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getListOfStrings()));
            body.addFormDataPart(
                    "setOfStrings", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getSetOfStrings()));
            if (request.getOptionalListOfStrings().isPresent()) {
                body.addFormDataPart(
                        "optionalListOfStrings",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalListOfStrings()));
            }
            if (request.getOptionalSetOfStrings().isPresent()) {
                body.addFormDataPart(
                        "optionalSetOfStrings",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalSetOfStrings()));
            }
            body.addFormDataPart("maybeList", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getMaybeList()));
            if (request.getOptionalMaybeList().isPresent()) {
                body.addFormDataPart(
                        "optionalMaybeList",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalMaybeList()));
            }
            body.addFormDataPart(
                    "maybeListOrSet", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getMaybeListOrSet()));
            if (request.getOptionalMaybeListOrSet().isPresent()) {
                body.addFormDataPart(
                        "optionalMaybeListOrSet",
                        ObjectMappers.JSON_MAPPER.writeValueAsString(request.getOptionalMaybeListOrSet()));
            }
            body.addFormDataPart(
                    "listOfObjects", ObjectMappers.JSON_MAPPER.writeValueAsString(request.getListOfObjects()));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("POST", body.build())
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .readTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
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
            MediaType fileMediaType = fileMimeType != null ? MediaType.parse(mimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMediaType, file));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl)
                .method("POST", body.build())
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .readTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
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
            MediaType fileMediaType = fileMimeType != null ? MediaType.parse(mimeType) : null;
            body.addFormDataPart("file", file.getName(), RequestBody.create(fileMediaType, file));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("POST", body.build())
                .headers(Headers.of(clientOptions.headers(requestOptions)));
        Request okhttpRequest = _requestBuilder.build();
        try {
            OkHttpClient client = clientOptions.httpClient();
            if (requestOptions.getTimeout().isPresent()) {
                client = client.newBuilder()
                        .readTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return;
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
