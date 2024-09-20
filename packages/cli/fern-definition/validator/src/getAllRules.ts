import { Rule } from "./Rule";
import {
    CompatibleIrVersionsRule,
    ImportFileExistsRule,
    MatchingEnvironmentUrlsRule,
    NoCircularImportsRule,
    NoComplexQueryParamsRule,
    NoConflictingEndpointParametersRule,
    NoConflictingEndpointPathsRule,
    NoConflictingRequestWrapperPropertiesRule,
    NoDuplicateDeclarationsRule,
    NoDuplicateEnumValuesRule,
    NoDuplicateExampleNamesRule,
    NoDuplicateFieldNamesRule,
    NoErrorStatusCodeConflictRule,
    NoExtensionsWithFileUploadRule,
    NoGetRequestBodyRule,
    NoMissingAuthRule,
    NoMissingErrorDiscriminantRule,
    NoMissingRequestNameRule,
    NoObjectSinglePropertyKeyRule,
    NoResponsePropertyRule,
    NoUndefinedErrorReferenceRule,
    NoUndefinedExampleReferenceRule,
    NoUndefinedPathParametersRule,
    NoUndefinedTypeReferenceRule,
    NoUndefinedVariableReferenceRule,
    NoUnusedGenericRule,
    OnlyObjectExtensionsRule,
    ValidBasePathRule,
    ValidDefaultEnvironmentRule,
    ValidEndpointPathRule,
    ValidExampleEndpointCallRule,
    ValidExampleErrorRule,
    ValidExampleTypeRule,
    ValidFieldNamesRule,
    ValidGenericRule,
    ValidNavigationRule,
    ValidOauthRule,
    ValidPaginationRule,
    ValidServiceUrlsRule,
    ValidStreamConditionRule,
    ValidTypeNameRule,
    ValidTypeReferenceWithDefaultAndValidationRule,
    ValidVersionRule,
    ContentTypeOnlyForMultipartRule
} from "./rules";

export function getAllRules(): Rule[] {
    return [
        NoUndefinedTypeReferenceRule,
        NoDuplicateEnumValuesRule,
        NoUndefinedPathParametersRule,
        ImportFileExistsRule,
        NoDuplicateDeclarationsRule,
        NoUndefinedErrorReferenceRule,
        NoCircularImportsRule,
        ValidFieldNamesRule,
        NoDuplicateFieldNamesRule,
        NoObjectSinglePropertyKeyRule,
        NoGetRequestBodyRule,
        NoComplexQueryParamsRule,
        ValidDefaultEnvironmentRule,
        NoMissingErrorDiscriminantRule,
        ValidExampleTypeRule,
        NoErrorStatusCodeConflictRule,
        NoMissingAuthRule,
        NoMissingRequestNameRule,
        NoConflictingEndpointParametersRule,
        NoConflictingRequestWrapperPropertiesRule,
        ValidExampleEndpointCallRule,
        NoDuplicateExampleNamesRule,
        NoUndefinedExampleReferenceRule,
        MatchingEnvironmentUrlsRule,
        ValidServiceUrlsRule,
        ValidBasePathRule,
        ValidEndpointPathRule,
        NoConflictingEndpointPathsRule,
        ValidTypeNameRule,
        NoExtensionsWithFileUploadRule,
        ValidNavigationRule,
        NoUndefinedVariableReferenceRule,
        OnlyObjectExtensionsRule,
        NoResponsePropertyRule,
        ValidOauthRule,
        ValidPaginationRule,
        ValidExampleErrorRule,
        ValidTypeReferenceWithDefaultAndValidationRule,
        ValidStreamConditionRule,
        ValidVersionRule,
        NoUnusedGenericRule,
        ValidGenericRule,
        CompatibleIrVersionsRule,
        ContentTypeOnlyForMultipartRule
    ];
}

export function getAllEnabledRules(): Rule[] {
    return getAllRules().filter(({ DISABLE_RULE = false }) => !DISABLE_RULE);
}
