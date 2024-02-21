/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.problem;

import com.fasterxml.jackson.core.type.TypeReference;
import com.seed.trace.core.ApiError;
import com.seed.trace.core.ClientOptions;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.core.RequestOptions;
import com.seed.trace.resources.v2.problem.types.LightweightProblemInfoV2;
import com.seed.trace.resources.v2.problem.types.ProblemInfoV2;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class ProblemClient {
    protected final ClientOptions clientOptions;

    public ProblemClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * Returns lightweight versions of all problems
     */
    public List<LightweightProblemInfoV2> getLightweightProblems() {
        return getLightweightProblems(null);
    }

    /**
     * Returns lightweight versions of all problems
     */
    public List<LightweightProblemInfoV2> getLightweightProblems(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("problems-v2")
                .addPathSegments("lightweight-problem-info")
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
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        response.body().string(), new TypeReference<List<LightweightProblemInfoV2>>() {});
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Returns latest versions of all problems
     */
    public List<ProblemInfoV2> getProblems() {
        return getProblems(null);
    }

    /**
     * Returns latest versions of all problems
     */
    public List<ProblemInfoV2> getProblems(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("problems-v2")
                .addPathSegments("problem-info")
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
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        response.body().string(), new TypeReference<List<ProblemInfoV2>>() {});
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Returns latest version of a problem
     */
    public ProblemInfoV2 getLatestProblem(String problemId) {
        return getLatestProblem(problemId, null);
    }

    /**
     * Returns latest version of a problem
     */
    public ProblemInfoV2 getLatestProblem(String problemId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("problems-v2")
                .addPathSegments("problem-info")
                .addPathSegment(problemId)
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
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ProblemInfoV2.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Returns requested version of a problem
     */
    public ProblemInfoV2 getProblemVersion(String problemId, int problemVersion) {
        return getProblemVersion(problemId, problemVersion, null);
    }

    /**
     * Returns requested version of a problem
     */
    public ProblemInfoV2 getProblemVersion(String problemId, int problemVersion, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("problems-v2")
                .addPathSegments("problem-info")
                .addPathSegment(problemId)
                .addPathSegments("version")
                .addPathSegment(Integer.toString(problemVersion))
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
                client = client.newBuilder()
                        .callTimeout(requestOptions.getTimeout().get(), requestOptions.getTimeoutTimeUnit())
                        .connectTimeout(0, TimeUnit.SECONDS)
                        .writeTimeout(0, TimeUnit.SECONDS)
                        .readTimeout(0, TimeUnit.SECONDS)
                        .build();
            }
            Response response = client.newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), ProblemInfoV2.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
