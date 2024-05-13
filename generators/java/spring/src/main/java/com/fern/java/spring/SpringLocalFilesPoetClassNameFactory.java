package com.fern.java.spring;

import com.fern.irV42.model.commons.FernFilepath;
import com.fern.irV42.model.errors.DeclaredErrorName;
import com.fern.irV42.model.http.HttpService;
import com.fern.irV42.model.http.InlinedRequestBody;
import com.fern.java.AbstractNonModelPoetClassNameFactory;
import com.squareup.javapoet.ClassName;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public final class SpringLocalFilesPoetClassNameFactory extends AbstractNonModelPoetClassNameFactory {

    public SpringLocalFilesPoetClassNameFactory(Optional<String> directoryNamePrefix) {
        super(directoryNamePrefix.map(List::of).orElseGet(() -> Collections.emptyList()));
    }

    public ClassName getErrorControllerAdviceName(DeclaredErrorName declaredTypeName) {
        String packageName =
                getResourcesPackage(Optional.of(declaredTypeName.getFernFilepath()), Optional.of("handlers"));
        return ClassName.get(
                packageName, declaredTypeName.getName().getPascalCase().getUnsafeName() + "ExceptionHandler");
    }

    public ClassName getErrorClassName(DeclaredErrorName declaredTypeName) {
        String packageName =
                getResourcesPackage(Optional.of(declaredTypeName.getFernFilepath()), Optional.of("exceptions"));
        return ClassName.get(
                packageName, declaredTypeName.getName().getPascalCase().getSafeName());
    }

    public ClassName getServiceInterfaceClassName(HttpService httpService) {
        String packageName =
                getResourcesPackage(Optional.of(httpService.getName().getFernFilepath()), Optional.empty());
        return ClassName.get(packageName, getServiceName(httpService.getName().getFernFilepath()));
    }

    public ClassName getInlinedRequestBodyClassName(HttpService httpService, InlinedRequestBody inlinedRequestBody) {
        String packageName =
                getResourcesPackage(Optional.of(httpService.getName().getFernFilepath()), Optional.of("requests"));
        return ClassName.get(
                packageName, inlinedRequestBody.getName().getPascalCase().getSafeName());
    }

    private static String getServiceName(FernFilepath fernFilepath) {
        if (fernFilepath.getAllParts().isEmpty()) {
            return "RootService";
        }
        return fernFilepath
                        .getAllParts()
                        .get(fernFilepath.getAllParts().size() - 1)
                        .getPascalCase()
                        .getUnsafeName() + "Service";
    }
}
