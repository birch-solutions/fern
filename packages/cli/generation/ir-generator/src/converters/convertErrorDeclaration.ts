import { RawPrimitiveType, RawSchemas } from "@fern-api/yaml-schema";
import { ErrorDeclaration } from "@fern-fern/ir-model/errors";
import { FernFileContext } from "../FernFileContext";
import { TypeResolver } from "../resolvers/TypeResolver";
import { generateStringWithAllCasings, generateWireStringWithAllCasings } from "../utils/generateCasings";
import { convertType } from "./type-declarations/convertTypeDeclaration";

export function convertErrorDeclaration({
    errorName,
    errorDeclaration,
    file,
    typeResolver,
}: {
    errorName: string;
    errorDeclaration: RawSchemas.ErrorDeclarationSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
}): ErrorDeclaration {
    const rawType = typeof errorDeclaration === "string" ? errorDeclaration : errorDeclaration.type;
    const type =
        rawType != null
            ? convertType({
                  typeDeclaration: rawType,
                  file,
                  typeResolver,
              })
            : undefined;

    return {
        name: {
            name: errorName,
            nameV2: generateStringWithAllCasings(errorName),
            fernFilepath: file.fernFilepath,
        },
        discriminantValue: generateWireStringWithAllCasings({
            wireValue: errorName,
            name: errorName,
        }),
        docs: typeof errorDeclaration !== "string" ? errorDeclaration.docs : undefined,
        http:
            typeof errorDeclaration !== "string" && errorDeclaration.http != null
                ? {
                      statusCode: errorDeclaration.http.statusCode,
                  }
                : undefined,
        type:
            type ??
            convertType({
                typeDeclaration:
                    typeof errorDeclaration === "string"
                        ? errorDeclaration
                        : errorDeclaration.type ?? RawPrimitiveType.void,
                file,
                typeResolver,
            }),
        typeV2: type,
    };
}
