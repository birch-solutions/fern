import { constructFernFileContext, ResolvedType, TypeResolverImpl } from "@fern-api/ir-generator";
import { isRawTextType, parseRawBytesType, parseRawFileType, RawSchemas } from "@fern-api/yaml-schema";
import { Rule, RuleViolation } from "../../Rule";
import { CASINGS_GENERATOR } from "../../utils/casingsGenerator";

export const ValidTypeReferenceWithDefaultAndValidationRule: Rule = {
    name: "valid-type-reference-with-default-and-validation",
    create: async ({ workspace }) => {
        const typeResolver = new TypeResolverImpl(workspace);
        return {
            definitionFile: {
                typeReference: (
                    { typeReference, _default, validation, location },
                    { relativeFilepath, contents: definitionFile }
                ) => {
                    // The 'file', 'bytes', and 'text' types are not supported by the TypeResolver, so
                    // we explicitly check for them upfront.
                    const parsedRawFileType = parseRawFileType(typeReference);
                    if (parsedRawFileType != null) {
                        return [];
                    }

                    const parsedBytesType = parseRawBytesType(typeReference);
                    if (parsedBytesType != null) {
                        return [];
                    }

                    if (isRawTextType(typeReference)) {
                        return [];
                    }

                    const file = constructFernFileContext({
                        relativeFilepath,
                        definitionFile,
                        casingsGenerator: CASINGS_GENERATOR,
                        rootApiFile: workspace.definition.rootApiFile.contents
                    });

                    const resolvedType = typeResolver.resolveTypeOrThrow({
                        type: typeReference,
                        file
                    });

                    return validateResolvedType({
                        resolvedType,
                        _default,
                        validation
                    });
                }
            }
        };
    }
};

function validateResolvedType({
    resolvedType,
    _default,
    validation
}: {
    resolvedType: ResolvedType;
    _default: unknown | undefined;
    validation: RawSchemas.ValidationSchema | undefined;
}): RuleViolation[] {
    const violations: RuleViolation[] = [];

    if (_default == null && validation == null) {
        return [];
    }

    if (resolvedType._type === "container" && resolvedType.container._type === "optional") {
        return validateResolvedType({
            resolvedType: resolvedType.container.itemType,
            _default,
            validation
        });
    }

    let typeName: string = resolvedType._type;
    if (resolvedType._type === "primitive") {
        switch (resolvedType.primitive.v1) {
            case "STRING":
                return validateStringDefaultAndValidation({ _default, validation });
            case "DOUBLE":
                return validateDoubleDefaultAndValidation({ _default, validation });
            case "INTEGER":
                return validateIntegerDefaultAndValidation({ _default, validation });
            case "BOOLEAN":
                typeName = "boolean";
                break;
            case "LONG":
                typeName = "long";
                break;
            case "DATE_TIME":
                typeName = "datetime";
                break;
            case "UUID":
                typeName = "uuid";
                break;
            case "BASE_64":
                typeName = "base64";
                break;
            case "BIG_INTEGER":
                typeName = "bigint";
                break;
        }
    }

    if (_default != null) {
        violations.push({
            message: `Default values are not supported for the ${typeName} type`,
            severity: "error"
        });
    }

    if (validation != null) {
        violations.push({
            message: `Validation rules are not supported for the ${typeName} type`,
            severity: "error"
        });
    }

    return violations;
}

function validateStringDefaultAndValidation({
    _default,
    validation
}: {
    _default: unknown | undefined;
    validation: RawSchemas.ValidationSchema | undefined;
}): RuleViolation[] {
    const violations: RuleViolation[] = [];

    if (_default != null && typeof _default !== "string") {
        violations.push({
            message: `Default value '${_default}' is not a valid string`,
            severity: "error"
        });
    }

    if (validation != null && !isRawStringValidation(validation)) {
        violations.push({
            message: `Validation rules '${JSON.stringify(validation)}' are not compatible with the string type`,
            severity: "error"
        });
    }

    return violations;
}

function validateDoubleDefaultAndValidation({
    _default,
    validation
}: {
    _default: unknown | undefined;
    validation: RawSchemas.ValidationSchema | undefined;
}): RuleViolation[] {
    const violations: RuleViolation[] = [];

    if (_default != null && typeof _default !== "number") {
        violations.push({
            message: `Default value '${_default}' is not a valid double`,
            severity: "error"
        });
    }

    if (validation != null && !isRawNumberValidation(validation)) {
        violations.push({
            message: `Validation rules '${JSON.stringify(validation)}' are not compatible with the double type`,
            severity: "error"
        });
    }

    return violations;
}

function validateIntegerDefaultAndValidation({
    _default,
    validation
}: {
    _default: unknown | undefined;
    validation: RawSchemas.ValidationSchema | undefined;
}): RuleViolation[] {
    const violations: RuleViolation[] = [];

    if (_default != null && !Number.isInteger(_default)) {
        violations.push({
            message: `Default value '${_default}' is not a valid integer`,
            severity: "error"
        });
    }

    if (validation != null) {
        if (!isRawNumberValidation(validation)) {
            violations.push({
                message: `Validation rules '${JSON.stringify(validation)}' are not compatible with the integer type`,
                severity: "error"
            });
        } else {
            violations.push(
                ...validateIntegerValidation({ name: "min", value: validation.min }),
                ...validateIntegerValidation({ name: "max", value: validation.max }),
                ...validateIntegerValidation({ name: "multipleOf", value: validation.multipleOf })
            );
        }
    }

    return violations;
}

function validateIntegerValidation({ name, value }: { name: string; value: number | undefined }): RuleViolation[] {
    if (value != null && !Number.isInteger(value)) {
        return [
            {
                message: `Validation for '${name}' must be an integer, but found '${value}'`,
                severity: "error"
            }
        ];
    }
    return [];
}

function isRawNumberValidation(
    validation: RawSchemas.ValidationSchema
): validation is RawSchemas.NumberValidationSchema {
    const maybeNumberValidation = validation as RawSchemas.NumberValidationSchema;
    return (
        maybeNumberValidation.min != null ||
        maybeNumberValidation.max != null ||
        maybeNumberValidation.exclusiveMin != null ||
        maybeNumberValidation.exclusiveMax != null ||
        maybeNumberValidation.multipleOf != null
    );
}

function isRawStringValidation(
    validation: RawSchemas.ValidationSchema
): validation is RawSchemas.StringValidationSchema {
    const maybeStringValidation = validation as RawSchemas.StringValidationSchema;
    return (
        maybeStringValidation.minLength != null ||
        maybeStringValidation.maxLength != null ||
        maybeStringValidation.pattern != null ||
        maybeStringValidation.format != null
    );
}
