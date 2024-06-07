package com.fern.java.client;

import com.fern.ir.model.commons.FernFilepath;
import com.fern.ir.model.errors.ErrorDeclaration;
import com.fern.ir.model.http.HttpService;
import com.fern.ir.model.http.SdkRequestWrapper;
import com.fern.ir.model.ir.Subpackage;
import com.fern.java.AbstractNonModelPoetClassNameFactory;
import com.fern.java.utils.CasingUtils;
import com.squareup.javapoet.ClassName;
import java.util.List;
import java.util.Optional;

public final class ClientPoetClassNameFactory extends AbstractNonModelPoetClassNameFactory {

    public ClientPoetClassNameFactory(List<String> packagePrefixTokens) {
        super(packagePrefixTokens);
    }

    public ClassName getErrorClassName(ErrorDeclaration errorDeclaration, String organization, String workspaceName) {
        String packageName = getErrorsPackageName(errorDeclaration.getName().getFernFilepath());
        return ClassName.get(
                packageName,
                getBaseNamePrefix(organization, workspaceName)
                        + errorDeclaration.getName().getName().getPascalCase().getSafeName());
    }

    public ClassName getRetryInterceptorClassName() {
        return ClassName.get(getCorePackage(), "RetryInterceptor");
    }

    public ClassName getRequestOptionsClassName() {
        return ClassName.get(getCorePackage(), "RequestOptions");
    }

    public ClassName getIdempotentRequestOptionsClassName() {
        return ClassName.get(getCorePackage(), "IdempotentRequestOptions");
    }

    public ClassName getMediaTypesClassName() {
        return ClassName.get(getCorePackage(), "MediaTypes");
    }

    public ClassName getClientClassName(Subpackage subpackage) {
        String packageName = getResourcesPackage(Optional.of(subpackage.getFernFilepath()), Optional.empty());
        return ClassName.get(packageName, getClientName(subpackage.getFernFilepath()));
    }

    public ClassName getRequestWrapperBodyClassName(HttpService httpService, SdkRequestWrapper sdkRequestWrapper) {
        String packageName =
                getResourcesPackage(Optional.of(httpService.getName().getFernFilepath()), Optional.of("requests"));
        return ClassName.get(
                packageName, sdkRequestWrapper.getWrapperName().getPascalCase().getSafeName());
    }

    public ClassName getApiErrorClassName(String organization, String workspaceName) {
        return getCoreClassName(getBaseNamePrefix(organization, workspaceName) + "ApiError");
    }

    public ClassName getBaseErrorClassName(String organization, String workspaceName) {
        return getCoreClassName(getBaseNamePrefix(organization, workspaceName) + "Error");
    }

    public static String getBaseNamePrefix(String organization, String workspaceName) {
        return CasingUtils.convertKebabCaseToUpperCamelCase(organization)
                + CasingUtils.convertKebabCaseToUpperCamelCase(workspaceName);
    }

    private static String getClientName(FernFilepath fernFilepath) {
        return fernFilepath
                        .getAllParts()
                        .get(fernFilepath.getAllParts().size() - 1)
                        .getPascalCase()
                        .getUnsafeName() + "Client";
    }
}
