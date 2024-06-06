/*
 * (c) Copyright 2023 Birch Solutions Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.fern.java.client.generators.endpoint;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fern.irV42.model.commons.ErrorId;
import com.fern.irV42.model.commons.Name;
import com.fern.irV42.model.commons.TypeId;
import com.fern.irV42.model.environment.EnvironmentBaseUrlId;
import com.fern.irV42.model.errors.ErrorDeclaration;
import com.fern.irV42.model.http.BytesRequest;
import com.fern.irV42.model.http.FileDownloadResponse;
import com.fern.irV42.model.http.FileProperty;
import com.fern.irV42.model.http.FileUploadRequest;
import com.fern.irV42.model.http.FileUploadRequestProperty;
import com.fern.irV42.model.http.HttpEndpoint;
import com.fern.irV42.model.http.HttpRequestBody;
import com.fern.irV42.model.http.HttpRequestBodyReference;
import com.fern.irV42.model.http.HttpResponse;
import com.fern.irV42.model.http.HttpService;
import com.fern.irV42.model.http.InlinedRequestBody;
import com.fern.irV42.model.http.InlinedRequestBodyProperty;
import com.fern.irV42.model.http.JsonResponse;
import com.fern.irV42.model.http.JsonResponseBody;
import com.fern.irV42.model.http.JsonResponseBodyWithProperty;
import com.fern.irV42.model.http.JsonStreamChunk;
import com.fern.irV42.model.http.PathParameter;
import com.fern.irV42.model.http.SdkRequest;
import com.fern.irV42.model.http.SdkRequestBodyType;
import com.fern.irV42.model.http.SdkRequestShape;
import com.fern.irV42.model.http.SdkRequestWrapper;
import com.fern.irV42.model.http.SseStreamChunk;
import com.fern.irV42.model.http.StreamingResponse;
import com.fern.irV42.model.http.TextResponse;
import com.fern.irV42.model.http.TextStreamChunk;
import com.fern.irV42.model.types.AliasTypeDeclaration;
import com.fern.irV42.model.types.ContainerType;
import com.fern.irV42.model.types.DeclaredTypeName;
import com.fern.irV42.model.types.EnumTypeDeclaration;
import com.fern.irV42.model.types.ObjectTypeDeclaration;
import com.fern.irV42.model.types.PrimitiveType;
import com.fern.irV42.model.types.Type;
import com.fern.irV42.model.types.TypeDeclaration;
import com.fern.irV42.model.types.UndiscriminatedUnionTypeDeclaration;
import com.fern.irV42.model.types.UnionTypeDeclaration;
import com.fern.java.client.ClientGeneratorContext;
import com.fern.java.client.GeneratedClientOptions;
import com.fern.java.client.GeneratedEnvironmentsClass;
import com.fern.java.client.GeneratedEnvironmentsClass.MultiUrlEnvironmentsClass;
import com.fern.java.client.GeneratedEnvironmentsClass.SingleUrlEnvironmentClass;
import com.fern.java.client.generators.endpoint.HttpUrlBuilder.PathParamInfo;
import com.fern.java.client.generators.visitors.FilePropertyIsOptional;
import com.fern.java.generators.object.EnrichedObjectProperty;
import com.fern.java.output.GeneratedJavaFile;
import com.fern.java.output.GeneratedObjectMapper;
import com.fern.java.utils.JavaDocUtils;
import com.squareup.javapoet.ClassName;
import com.squareup.javapoet.CodeBlock;
import com.squareup.javapoet.FieldSpec;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.ParameterSpec;
import com.squareup.javapoet.ParameterizedTypeName;
import com.squareup.javapoet.TypeName;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.lang.model.element.Modifier;
import okhttp3.OkHttpClient;
import okhttp3.Response;
import okhttp3.ResponseBody;

public abstract class AbstractEndpointWriter {

    public static final String CONTENT_TYPE_HEADER = "Content-Type";
    public static final String APPLICATION_JSON_HEADER = "application/json";
    public static final String APPLICATION_OCTET_STREAM = "application/octet-stream";
    public static final String REQUEST_BUILDER_NAME = "_requestBuilder";
    public static final String REQUEST_OPTIONS_PARAMETER_NAME = "requestOptions";
    private final HttpService httpService;
    private final HttpEndpoint httpEndpoint;
    private final GeneratedClientOptions generatedClientOptions;
    private final FieldSpec clientOptionsField;
    private final ClientGeneratorContext clientGeneratorContext;
    private final MethodSpec.Builder endpointMethodBuilder;
    private final GeneratedObjectMapper generatedObjectMapper;
    private final GeneratedEnvironmentsClass generatedEnvironmentsClass;
    private final Set<String> endpointParameterNames = new HashSet<>();
    protected final ClassName baseErrorClassName;
    protected final ClassName apiErrorClassName;
    private final Map<ErrorId, GeneratedJavaFile> generatedErrors;

    public AbstractEndpointWriter(
            HttpService httpService,
            HttpEndpoint httpEndpoint,
            GeneratedObjectMapper generatedObjectMapper,
            ClientGeneratorContext clientGeneratorContext,
            FieldSpec clientOptionsField,
            GeneratedClientOptions generatedClientOptions,
            GeneratedEnvironmentsClass generatedEnvironmentsClass,
            Map<ErrorId, GeneratedJavaFile> generatedErrors) {
        this.httpService = httpService;
        this.httpEndpoint = httpEndpoint;
        this.clientOptionsField = clientOptionsField;
        this.generatedClientOptions = generatedClientOptions;
        this.clientGeneratorContext = clientGeneratorContext;
        this.generatedObjectMapper = generatedObjectMapper;
        this.generatedEnvironmentsClass = generatedEnvironmentsClass;
        this.endpointMethodBuilder = MethodSpec.methodBuilder(
                        httpEndpoint.getName().get().getCamelCase().getSafeName())
                .addModifiers(Modifier.PUBLIC);
        this.baseErrorClassName = clientGeneratorContext
                .getPoetClassNameFactory()
                .getBaseErrorClassName(
                        clientGeneratorContext.getGeneratorConfig().getOrganization(),
                        clientGeneratorContext.getGeneratorConfig().getWorkspaceName());
        this.apiErrorClassName = clientGeneratorContext
                .getPoetClassNameFactory()
                .getApiErrorClassName(
                        clientGeneratorContext.getGeneratorConfig().getOrganization(),
                        clientGeneratorContext.getGeneratorConfig().getWorkspaceName());
        this.generatedErrors = generatedErrors;
    }

    public static CodeBlock stringify(String reference, TypeName typeName) {
        if (typeName instanceof ParameterizedTypeName
                && ((ParameterizedTypeName) typeName).typeArguments.get(0).equals(ClassName.get(String.class))) {
            return CodeBlock.of(reference);
        } else if (typeName.equals(ClassName.get(String.class))) {
            return CodeBlock.of(reference);
        } else if (typeName.equals(TypeName.DOUBLE)) {
            return CodeBlock.of("$T.toString($L)", Double.class, reference);
        } else if (typeName.equals(TypeName.INT)) {
            return CodeBlock.of("$T.toString($L)", Integer.class, reference);
        } else {
            return CodeBlock.of("$L.toString()", reference);
        }
    }

    private static boolean typeNameIsOptional(TypeName typeName) {
        return typeName instanceof ParameterizedTypeName
                && ((ParameterizedTypeName) typeName).rawType.equals(ClassName.get(Optional.class));
    }

    public final HttpEndpointMethodSpecs generate() {
        // populate all param names
        this.endpointParameterNames.addAll(getPathParameters().stream()
                .map(parameterSpec -> parameterSpec.name)
                .collect(Collectors.toList()));
        this.endpointParameterNames.addAll(additionalParameters().stream()
                .map(parameterSpec -> parameterSpec.name)
                .collect(Collectors.toList()));
        this.endpointParameterNames.add(REQUEST_OPTIONS_PARAMETER_NAME);

        // Step 0: Populate JavaDoc
        if (httpEndpoint.getDocs().isPresent()) {
            endpointMethodBuilder.addJavadoc(
                    JavaDocUtils.render(httpEndpoint.getDocs().get(), true));
        }

        // Step 1: Add Path Params as parameters
        List<ParameterSpec> pathParameters = getPathParameters();

        // Step 2: Add additional parameters
        List<ParameterSpec> additionalParameters = additionalParameters();

        // Step 3: Add path parameters
        endpointMethodBuilder.addParameters(pathParameters);
        endpointMethodBuilder.addParameters(additionalParameters);
        if (httpEndpoint.getIdempotent()) {
            endpointMethodBuilder.addParameter(ParameterSpec.builder(
                            clientGeneratorContext.getPoetClassNameFactory().getIdempotentRequestOptionsClassName(),
                            REQUEST_OPTIONS_PARAMETER_NAME)
                    .build());
        } else {
            endpointMethodBuilder.addParameter(ParameterSpec.builder(
                            clientGeneratorContext.getPoetClassNameFactory().getRequestOptionsClassName(),
                            REQUEST_OPTIONS_PARAMETER_NAME)
                    .build());
        }

        // Step 4: Get http client initializer
        HttpUrlBuilder httpUrlBuilder = new HttpUrlBuilder(
                getHttpUrlName(),
                sdkRequest()
                        .map(sdkRequest -> sdkRequest
                                .getRequestParameterName()
                                .getCamelCase()
                                .getSafeName())
                        .orElse(null),
                clientOptionsField,
                generatedClientOptions,
                CodeBlock.of(
                        "this.$L.$N().$L()",
                        clientOptionsField.name,
                        generatedClientOptions.environment(),
                        getEnvironmentToUrlMethod().name),
                httpEndpoint,
                httpService,
                convertPathParametersToSpecMap(httpService.getPathParameters()),
                convertPathParametersToSpecMap(httpEndpoint.getPathParameters()));
        HttpUrlBuilder.GeneratedHttpUrl generatedHttpUrl = httpUrlBuilder.generateBuilder(getQueryParams());
        endpointMethodBuilder.addCode(generatedHttpUrl.initialization());

        // Step 5: Get request initializer
        boolean sendContentType = httpEndpoint.getRequestBody().isPresent()
                || httpEndpoint.getResponse().isPresent();
        CodeBlock requestInitializer = getInitializeRequestCodeBlock(
                clientOptionsField,
                generatedClientOptions,
                httpEndpoint,
                generatedObjectMapper,
                generatedHttpUrl.inlinableBuild(),
                sendContentType);
        endpointMethodBuilder.addCode(requestInitializer);

        // Step 6: Make http request and handle responses
        CodeBlock responseParser = getResponseParserCodeBlock();
        endpointMethodBuilder.addCode(responseParser);

        MethodSpec endpointWithRequestOptions = endpointMethodBuilder.build();

        List<String> paramNames = Stream.concat(pathParameters.stream(), additionalParameters.stream())
                .map(parameterSpec -> parameterSpec.name)
                .collect(Collectors.toList());
        paramNames.add("null");
        MethodSpec endpointWithoutRequestOptions = MethodSpec.methodBuilder(endpointWithRequestOptions.name)
                .addModifiers(Modifier.PUBLIC)
                .addParameters(pathParameters)
                .addParameters(additionalParameters)
                .addJavadoc(endpointWithRequestOptions.javadoc)
                .addStatement(
                        endpointWithRequestOptions.returnType.equals(TypeName.VOID)
                                ? endpointWithRequestOptions.name + "(" + String.join(",", paramNames) + ")"
                                : "return " + endpointWithRequestOptions.name + "(" + String.join(",", paramNames)
                                        + ")",
                        endpointWithRequestOptions.name)
                .returns(endpointWithRequestOptions.returnType)
                .build();

        MethodSpec endpointWithoutRequest = null;
        if (sdkRequest().isPresent() && sdkRequest().get().getShape().visit(new SdkRequestIsOptional())) {
            MethodSpec.Builder endpointWithoutRequestBldr = MethodSpec.methodBuilder(endpointWithRequestOptions.name)
                    .addJavadoc(endpointWithRequestOptions.javadoc)
                    .addModifiers(Modifier.PUBLIC)
                    .addParameters(pathParameters)
                    .returns(endpointWithoutRequestOptions.returnType);
            List<ParameterSpec> additionalParamsWithoutBody = additionalParameters.stream()
                    .filter(parameterSpec -> !parameterSpec.name.equals(sdkRequest()
                            .get()
                            .getRequestParameterName()
                            .getCamelCase()
                            .getUnsafeName()))
                    .collect(Collectors.toList());
            endpointWithoutRequestBldr.addParameters(additionalParamsWithoutBody);
            List<String> paramNamesWoBody = Stream.concat(pathParameters.stream(), additionalParamsWithoutBody.stream())
                    .map(parameterSpec -> parameterSpec.name)
                    .collect(Collectors.toList());
            ParameterSpec bodyParameterSpec = additionalParameters.stream()
                    .filter(parameterSpec -> parameterSpec.name.equals(sdkRequest()
                            .get()
                            .getRequestParameterName()
                            .getCamelCase()
                            .getUnsafeName()))
                    .collect(Collectors.toList())
                    .get(0);
            if (typeNameIsOptional(bodyParameterSpec.type)) {
                paramNamesWoBody.add("Optional.empty()");
            } else {
                paramNamesWoBody.add("$T.builder().build()");
            }
            endpointWithoutRequest = endpointWithoutRequestBldr
                    .addStatement(
                            endpointWithRequestOptions.returnType.equals(TypeName.VOID)
                                    ? endpointWithRequestOptions.name + "(" + String.join(",", paramNamesWoBody) + ")"
                                    : "return " + endpointWithRequestOptions.name + "("
                                            + String.join(",", paramNamesWoBody) + ")",
                            bodyParameterSpec.type)
                    .build();
        }

        return new HttpEndpointMethodSpecs(
                endpointWithRequestOptions, endpointWithoutRequestOptions, endpointWithoutRequest);
    }

    public abstract Optional<SdkRequest> sdkRequest();

    public abstract List<EnrichedObjectProperty> getQueryParams();

    public abstract List<ParameterSpec> additionalParameters();

    public abstract CodeBlock getInitializeRequestCodeBlock(
            FieldSpec clientOptionsMember,
            GeneratedClientOptions clientOptions,
            HttpEndpoint endpoint,
            GeneratedObjectMapper objectMapper,
            CodeBlock inlineableHttpUrl,
            boolean sendContentType);

    public final CodeBlock getResponseParserCodeBlock() {
        String defaultedClientName = "client";
        CodeBlock.Builder httpResponseBuilder = CodeBlock.builder()
                // Default the request client
                .addStatement(
                        "$T $L = $N.$N()",
                        OkHttpClient.class,
                        defaultedClientName,
                        clientOptionsField,
                        generatedClientOptions.httpClient())
                .beginControlFlow(
                        "if ($L != null && $L.getTimeout().isPresent())",
                        REQUEST_OPTIONS_PARAMETER_NAME,
                        REQUEST_OPTIONS_PARAMETER_NAME)
                // Set the client's callTimeout if requestOptions overrides it has one
                .addStatement(
                        "$L = $N.$N($L)",
                        defaultedClientName,
                        clientOptionsField,
                        generatedClientOptions.httpClientWithTimeout(),
                        REQUEST_OPTIONS_PARAMETER_NAME)
                .endControlFlow()
                .beginControlFlow(
                        "try ($T $L = $N.newCall($L).execute())",
                        Response.class,
                        getResponseName(),
                        defaultedClientName,
                        getOkhttpRequestName())
                .addStatement("$T $L = $N.body()", ResponseBody.class, getResponseBodyName(), getResponseName())
                .beginControlFlow("if ($L.isSuccessful())", getResponseName());
        if (httpEndpoint.getResponse().isPresent()) {
            httpEndpoint
                    .getResponse()
                    .get()
                    .visit(new SuccessResponseWriter(
                            httpResponseBuilder, endpointMethodBuilder, clientGeneratorContext, generatedObjectMapper));
        } else {
            httpResponseBuilder.addStatement("return");
        }
        httpResponseBuilder.endControlFlow();
        httpResponseBuilder.addStatement(
                "$T $L = $L != null ? $L.string() : $S",
                String.class,
                getResponseBodyStringName(),
                getResponseBodyName(),
                getResponseBodyName(),
                "{}");

        // map to status-specific errors
        if (clientGeneratorContext.getIr().getErrorDiscriminationStrategy().isStatusCode()) {
            List<ErrorDeclaration> errorDeclarations = httpEndpoint.getErrors().get().stream()
                    .map(responseError -> clientGeneratorContext
                            .getIr()
                            .getErrors()
                            .get(responseError.getError().getErrorId()))
                    .sorted(Comparator.comparingInt(ErrorDeclaration::getStatusCode))
                    .collect(Collectors.toList());
            if (!errorDeclarations.isEmpty()) {
                boolean multipleErrors = errorDeclarations.size() > 1;
                httpResponseBuilder.beginControlFlow("try");
                if (multipleErrors) {
                    httpResponseBuilder.beginControlFlow("switch ($L.code())", getResponseName());
                }
                errorDeclarations.forEach(errorDeclaration -> {
                    GeneratedJavaFile generatedError =
                            generatedErrors.get(errorDeclaration.getName().getErrorId());
                    ClassName errorClassName = generatedError.getClassName();
                    Optional<TypeName> bodyTypeName = errorDeclaration
                            .getType()
                            .map(typeReference -> clientGeneratorContext
                                    .getPoetTypeNameMapper()
                                    .convertToTypeName(true, typeReference));
                    if (multipleErrors) {
                        httpResponseBuilder.add("case $L:", errorDeclaration.getStatusCode());
                    } else {
                        httpResponseBuilder.beginControlFlow(
                                "if ($L.code() == $L)", getResponseName(), errorDeclaration.getStatusCode());
                    }
                    httpResponseBuilder.addStatement(
                            "throw new $T($T.$L.readValue($L, $T.class))",
                            errorClassName,
                            generatedObjectMapper.getClassName(),
                            generatedObjectMapper.jsonMapperStaticField().name,
                            getResponseBodyStringName(),
                            bodyTypeName.orElse(TypeName.get(Object.class)));
                    if (!multipleErrors) {
                        httpResponseBuilder.endControlFlow();
                    }
                });
                if (multipleErrors) {
                    httpResponseBuilder.endControlFlow();
                }
                httpResponseBuilder
                        .endControlFlow()
                        .beginControlFlow("catch ($T ignored)", JsonProcessingException.class)
                        .add("// unable to map error response, throwing generic error\n")
                        .endControlFlow();
            }
        }
        httpResponseBuilder.addStatement(
                "throw new $T($S + $L.code(), $L.code(), $T.$L.readValue($L, $T.class))",
                apiErrorClassName,
                "Error with status code ",
                getResponseName(),
                getResponseName(),
                generatedObjectMapper.getClassName(),
                generatedObjectMapper.jsonMapperStaticField().name,
                getResponseBodyStringName(),
                Object.class);
        httpResponseBuilder
                .endControlFlow()
                .beginControlFlow("catch ($T e)", IOException.class)
                .addStatement("throw new $T($S, e)", baseErrorClassName, "Network error executing HTTP request")
                .endControlFlow()
                .build();
        return httpResponseBuilder.build();
    }

    protected final MethodSpec getEnvironmentToUrlMethod() {
        if (generatedEnvironmentsClass.info() instanceof SingleUrlEnvironmentClass) {
            return ((SingleUrlEnvironmentClass) generatedEnvironmentsClass.info()).getUrlMethod();
        } else if (generatedEnvironmentsClass.info() instanceof MultiUrlEnvironmentsClass) {
            EnvironmentBaseUrlId environmentBaseUrlId =
                    httpEndpoint.getBaseUrl().get();
            return ((MultiUrlEnvironmentsClass) generatedEnvironmentsClass.info())
                    .urlGetterMethods()
                    .get(environmentBaseUrlId);
        } else {
            throw new RuntimeException("Generated Environments class was unknown : " + generatedEnvironmentsClass);
        }
    }

    public final String getVariableName(String variable) {
        if (this.endpointParameterNames.contains(variable)) {
            return "_" + variable;
        }
        return variable;
    }

    private String getHttpUrlName() {
        if (this.endpointParameterNames.contains("httpUrl")) {
            return "_httpUrl";
        }
        return "httpUrl";
    }

    private String getResponseName() {
        if (this.endpointParameterNames.contains("response")) {
            return "_response";
        }
        return "response";
    }

    private String getResponseBodyName() {
        return getVariableName("responseBody");
    }

    private String getParsedResponseVariableName() {
        return getVariableName("parsedResponse");
    }

    private String getResponseBodyStringName() {
        return getVariableName("responseBodyString");
    }

    protected final String getOkhttpRequestName() {
        if (this.endpointParameterNames.contains("okhttpRequest")) {
            return "_okhttpRequest";
        }
        return "okhttpRequest";
    }

    protected final String getRequestBodyPropertiesName() {
        if (this.endpointParameterNames.contains("properties")) {
            return "_properties";
        }
        return "properties";
    }

    protected final String getOkhttpRequestBodyName() {
        if (this.endpointParameterNames.contains("body")) {
            return "_body";
        }
        return "body";
    }

    protected final String getMultipartBodyPropertiesName() {
        return getVariableName("body");
    }

    private List<ParameterSpec> getPathParameters() {
        List<ParameterSpec> pathParameterSpecs = new ArrayList<>();
        httpService.getPathParameters().forEach(pathParameter -> {
            if (pathParameter.getVariable().isPresent()) {
                return;
            }
            pathParameterSpecs.add(convertPathParameter(pathParameter).poetParam());
        });
        httpEndpoint.getPathParameters().forEach(pathParameter -> {
            if (pathParameter.getVariable().isPresent()) {
                return;
            }
            pathParameterSpecs.add(convertPathParameter(pathParameter).poetParam());
        });
        return pathParameterSpecs;
    }

    private Map<String, PathParamInfo> convertPathParametersToSpecMap(List<PathParameter> pathParameters) {
        return pathParameters.stream()
                .collect(Collectors.toMap(
                        pathParameter -> pathParameter.getName().getOriginalName(), this::convertPathParameter));
    }

    private PathParamInfo convertPathParameter(PathParameter pathParameter) {
        return PathParamInfo.builder()
                .irParam(pathParameter)
                .poetParam(ParameterSpec.builder(
                                clientGeneratorContext
                                        .getPoetTypeNameMapper()
                                        .convertToTypeName(true, pathParameter.getValueType()),
                                pathParameter.getName().getCamelCase().getSafeName())
                        .build())
                .build();
    }

    private final class SuccessResponseWriter implements HttpResponse.Visitor<Void> {

        private final CodeBlock.Builder httpResponseBuilder;
        private final MethodSpec.Builder endpointMethodBuilder;
        private final GeneratedObjectMapper generatedObjectMapper;
        private final ClientGeneratorContext clientGeneratorContext;

        SuccessResponseWriter(
                CodeBlock.Builder httpResponseBuilder,
                MethodSpec.Builder endpointMethodBuilder,
                ClientGeneratorContext clientGeneratorContext,
                GeneratedObjectMapper generatedObjectMapper) {
            this.httpResponseBuilder = httpResponseBuilder;
            this.endpointMethodBuilder = endpointMethodBuilder;
            this.clientGeneratorContext = clientGeneratorContext;
            this.generatedObjectMapper = generatedObjectMapper;
        }

        @Override
        public Void visitJson(JsonResponse json) {
            JsonResponseBodyWithProperty body = json.visit(new JsonResponse.Visitor<>() {
                @Override
                public JsonResponseBodyWithProperty visitResponse(JsonResponseBody response) {
                    return JsonResponseBodyWithProperty.builder()
                            .responseBodyType(response.getResponseBodyType())
                            .build();
                }

                @Override
                public JsonResponseBodyWithProperty visitNestedPropertyAsResponse(
                        JsonResponseBodyWithProperty nestedPropertyAsResponse) {
                    return nestedPropertyAsResponse;
                }

                @Override
                public JsonResponseBodyWithProperty _visitUnknown(Object unknownType) {
                    throw new RuntimeException("Encountered unknown json response body type: " + unknownType);
                }
            });

            TypeName responseType =
                    clientGeneratorContext.getPoetTypeNameMapper().convertToTypeName(true, body.getResponseBodyType());
            boolean isProperty = body.getResponseProperty().isPresent();
            Optional<TypeName> propertyType = body.getResponseProperty().map(objectProperty -> clientGeneratorContext
                    .getPoetTypeNameMapper()
                    .convertToTypeName(true, objectProperty.getValueType()));
            Boolean responseIsOptional = body.getResponseBodyType().visit(new TypeReferenceIsOptional(true));
            TypeName returnType = propertyType
                    .map(type -> {
                        if (responseIsOptional) {
                            return ParameterizedTypeName.get(ClassName.get(Optional.class), type);
                        } else return type;
                    })
                    .orElse(responseType);
            endpointMethodBuilder.returns(returnType);
            if (isProperty) {
                httpResponseBuilder.add("$T $L = ", responseType, getParsedResponseVariableName());
            } else {
                httpResponseBuilder.add("return ");
            }
            if (body.getResponseBodyType().isContainer() || isAliasContainer(body.getResponseBodyType())) {
                httpResponseBuilder.addStatement(
                        "$T.$L.readValue($L.string(), new $T() {})",
                        generatedObjectMapper.getClassName(),
                        generatedObjectMapper.jsonMapperStaticField().name,
                        getResponseBodyName(),
                        ParameterizedTypeName.get(ClassName.get(TypeReference.class), responseType));
            } else {
                httpResponseBuilder.addStatement(
                        "$T.$L.readValue($L.string(), $T.class)",
                        generatedObjectMapper.getClassName(),
                        generatedObjectMapper.jsonMapperStaticField().name,
                        getResponseBodyName(),
                        responseType);
            }
            if (isProperty) {
                Name responsePropertyName =
                        body.getResponseProperty().get().getName().getName();
                if (responseIsOptional) {
                    httpResponseBuilder.addStatement(
                            "return $L.map(res -> res.get$L())",
                            getParsedResponseVariableName(),
                            responsePropertyName.getPascalCase().getUnsafeName());
                } else {
                    httpResponseBuilder.addStatement(
                            "return $L.get$L()",
                            getParsedResponseVariableName(),
                            responsePropertyName.getPascalCase().getUnsafeName());
                }
            }
            return null;
        }

        @Override
        public Void visitFileDownload(FileDownloadResponse fileDownload) {
            endpointMethodBuilder.returns(InputStream.class);
            httpResponseBuilder.addStatement("return $L.byteStream()", getResponseBodyName());
            return null;
        }

        @Override
        public Void visitText(TextResponse text) {
            endpointMethodBuilder.returns(String.class);
            httpResponseBuilder.addStatement("return $L.string()", getResponseBodyName());
            return null;
        }

        @Override
        public Void visitStreaming(StreamingResponse streaming) {
            com.fern.irV42.model.types.TypeReference bodyType = streaming.visit(new StreamingResponse.Visitor<>() {
                @Override
                public com.fern.irV42.model.types.TypeReference visitJson(JsonStreamChunk json) {
                    return json.getPayload();
                }

                @Override
                public com.fern.irV42.model.types.TypeReference visitText(TextStreamChunk text) {
                    throw new RuntimeException("Returning streamed text is not supported.");
                }

                @Override
                public com.fern.irV42.model.types.TypeReference visitSse(SseStreamChunk sse) {
                    return sse.getPayload();
                }

                @Override
                public com.fern.irV42.model.types.TypeReference _visitUnknown(Object unknownType) {
                    throw new RuntimeException("Encountered unknown json response body type: " + unknownType);
                }
            });

            String terminator =
                    streaming.visit(new GetStreamingResponseTerminator()).orElse("\n");
            TypeName bodyTypeName =
                    clientGeneratorContext.getPoetTypeNameMapper().convertToTypeName(true, bodyType);
            endpointMethodBuilder.returns(ParameterizedTypeName.get(ClassName.get(Iterable.class), bodyTypeName));

            httpResponseBuilder.addStatement(
                    "return new $T<$T>($T.class, $L.charStream(), $S)",
                    clientGeneratorContext.getPoetClassNameFactory().getStreamClassName(),
                    bodyTypeName,
                    bodyTypeName,
                    getResponseBodyName(),
                    terminator);

            return null;
        }

        @Override
        public Void _visitUnknown(Object unknownType) {
            return null;
        }

        private boolean isAliasContainer(com.fern.irV42.model.types.TypeReference responseBodyType) {
            if (responseBodyType.getNamed().isPresent()) {
                TypeId typeId = responseBodyType.getNamed().get().getTypeId();
                TypeDeclaration typeDeclaration =
                        clientGeneratorContext.getIr().getTypes().get(typeId);
                return typeDeclaration.getShape().getAlias().isPresent()
                        && typeDeclaration
                                .getShape()
                                .getAlias()
                                .get()
                                .getResolvedType()
                                .isContainer();
            }
            return false;
        }
    }

    private class GetStreamingResponseTerminator implements StreamingResponse.Visitor<Optional<String>> {
        @Override
        public Optional<String> visitJson(JsonStreamChunk json) {
            return json.getTerminator();
        }

        @Override
        public Optional<String> visitText(TextStreamChunk text) {
            throw new RuntimeException("Returning streamed text is not supported.");
        }

        @Override
        public Optional<String> visitSse(SseStreamChunk sse) {
            return sse.getTerminator();
        }

        @Override
        public Optional<String> _visitUnknown(Object unknownType) {
            throw new RuntimeException("Encountered unknown streaming response type " + unknownType);
        }
    }

    private class SdkRequestIsOptional implements SdkRequestShape.Visitor<Boolean> {

        @Override
        public Boolean visitJustRequestBody(SdkRequestBodyType justRequestBody) {
            return justRequestBody.visit(new SdkRequestBodyType.Visitor<Boolean>() {
                @Override
                public Boolean visitTypeReference(HttpRequestBodyReference typeReference) {
                    return typeReference.getRequestBodyType().visit(new TypeReferenceIsOptional(true));
                }

                @Override
                public Boolean visitBytes(BytesRequest bytes) {
                    return bytes.getIsOptional();
                }

                @Override
                public Boolean _visitUnknown(Object unknownType) {
                    throw new RuntimeException("Encountered unknown type " + unknownType);
                }
            });
        }

        @Override
        public Boolean visitWrapper(SdkRequestWrapper wrapper) {
            boolean isOptional = true;
            if (httpEndpoint.getRequestBody().isPresent()) {
                isOptional = httpEndpoint.getRequestBody().get().visit(new HttpRequestBodyIsOptional());
            }
            if (!httpEndpoint.getHeaders().isEmpty() && isOptional) {
                isOptional = httpEndpoint.getHeaders().stream()
                        .allMatch(httpHeader -> httpHeader.getValueType().visit(new TypeReferenceIsOptional(false)));
            }
            if (!httpEndpoint.getQueryParameters().isEmpty() && isOptional) {
                isOptional = httpEndpoint.getQueryParameters().stream()
                        .allMatch(queryParameter ->
                                queryParameter.getValueType().visit(new TypeReferenceIsOptional(false)));
            }
            return isOptional;
        }

        @Override
        public Boolean _visitUnknown(Object unknownType) {
            return false;
        }
    }

    private class TypeReferenceIsOptional implements com.fern.irV42.model.types.TypeReference.Visitor<Boolean> {

        private final boolean visitNamedType;

        TypeReferenceIsOptional(boolean visitNamedType) {
            this.visitNamedType = visitNamedType;
        }

        @Override
        public Boolean visitContainer(ContainerType container) {
            return container.isOptional();
        }

        @Override
        public Boolean visitNamed(DeclaredTypeName named) {
            if (visitNamedType) {
                TypeDeclaration typeDeclaration =
                        clientGeneratorContext.getTypeDeclarations().get(named.getTypeId());
                return typeDeclaration.getShape().visit(new TypeDeclarationIsOptional());
            }
            return false;
        }

        @Override
        public Boolean visitPrimitive(PrimitiveType primitive) {
            return false;
        }

        @Override
        public Boolean visitUnknown() {
            return false;
        }

        @Override
        public Boolean _visitUnknown(Object unknownType) {
            return false;
        }
    }

    private class TypeDeclarationIsOptional implements Type.Visitor<Boolean> {

        @Override
        public Boolean visitAlias(AliasTypeDeclaration alias) {
            return alias.getAliasOf().visit(new TypeReferenceIsOptional(true));
        }

        @Override
        public Boolean visitEnum(EnumTypeDeclaration _enum) {
            return false;
        }

        @Override
        public Boolean visitObject(ObjectTypeDeclaration object) {
            boolean allPropertiesOptional = object.getProperties().stream()
                    .allMatch(
                            objectProperty -> objectProperty.getValueType().visit(new TypeReferenceIsOptional(false)));
            boolean allExtendsAreOptional = object.getExtends().stream().allMatch(declaredTypeName -> {
                TypeDeclaration typeDeclaration =
                        clientGeneratorContext.getTypeDeclarations().get(declaredTypeName.getTypeId());
                return typeDeclaration.getShape().visit(new TypeDeclarationIsOptional());
            });
            return allPropertiesOptional && allExtendsAreOptional;
        }

        @Override
        public Boolean visitUnion(UnionTypeDeclaration union) {
            return false;
        }

        @Override
        public Boolean visitUndiscriminatedUnion(UndiscriminatedUnionTypeDeclaration undiscriminatedUnion) {
            return false;
        }

        @Override
        public Boolean _visitUnknown(Object unknownType) {
            return false;
        }
    }

    class HttpRequestBodyIsOptional implements HttpRequestBody.Visitor<Boolean> {

        @Override
        public Boolean visitInlinedRequestBody(InlinedRequestBody inlinedRequestBody) {
            boolean allPropertiesOptional = inlinedRequestBody.getProperties().stream()
                    .allMatch(
                            objectProperty -> objectProperty.getValueType().visit(new TypeReferenceIsOptional(false)));
            boolean allExtendsAreOptional = inlinedRequestBody.getExtends().stream()
                    .allMatch(declaredTypeName -> {
                        TypeDeclaration typeDeclaration =
                                clientGeneratorContext.getTypeDeclarations().get(declaredTypeName.getTypeId());
                        return typeDeclaration.getShape().visit(new TypeDeclarationIsOptional());
                    });
            return allPropertiesOptional && allExtendsAreOptional;
        }

        @Override
        public Boolean visitReference(HttpRequestBodyReference reference) {
            return reference.getRequestBodyType().visit(new TypeReferenceIsOptional(false));
        }

        @Override
        public Boolean visitFileUpload(FileUploadRequest fileUpload) {
            return fileUpload.getProperties().stream()
                    .allMatch(fileUploadRequestProperty ->
                            fileUploadRequestProperty.visit(new FileUploadRequestPropertyIsOptional()));
        }

        @Override
        public Boolean visitBytes(BytesRequest bytes) {
            return bytes.getIsOptional();
        }

        @Override
        public Boolean _visitUnknown(Object unknownType) {
            return false;
        }
    }

    private class FileUploadRequestPropertyIsOptional implements FileUploadRequestProperty.Visitor<Boolean> {

        @Override
        public Boolean visitFile(FileProperty file) {
            return file.visit(new FilePropertyIsOptional());
        }

        @Override
        public Boolean visitBodyProperty(InlinedRequestBodyProperty bodyProperty) {
            return bodyProperty.getValueType().visit(new TypeReferenceIsOptional(false));
        }

        @Override
        public Boolean _visitUnknown(Object unknownType) {
            return false;
        }
    }
}
