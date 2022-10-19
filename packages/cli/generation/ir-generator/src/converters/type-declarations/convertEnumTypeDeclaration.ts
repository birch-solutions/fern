import { RawSchemas } from "@fern-api/yaml-schema";
import { Type } from "@fern-fern/ir-model/types";
import { FernFileContext } from "../../FernFileContext";

export function convertEnumTypeDeclaration({
    _enum,
    file,
}: {
    _enum: RawSchemas.EnumSchema;
    file: FernFileContext;
}): Type {
    return Type.enum({
        values: _enum.enum.map((value) => ({
            name: file.casingsGenerator.generateWireCasings({
                wireValue: typeof value === "string" ? value : value.value,
                name: getEnumName(value).name,
            }),
            value: typeof value === "string" ? value : value.value,
            docs: typeof value !== "string" ? value.docs : undefined,
        })),
    });
}

export function getEnumName(enumValue: RawSchemas.EnumValueSchema): { name: string; wasExplicitlySet: boolean } {
    if (typeof enumValue === "string") {
        return {
            name: enumValue,
            wasExplicitlySet: false,
        };
    }

    if (enumValue.name == null) {
        return {
            name: enumValue.value,
            wasExplicitlySet: false,
        };
    }

    return {
        name: enumValue.name,
        wasExplicitlySet: true,
    };
}
