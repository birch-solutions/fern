import { RawSchemas } from "@fern-api/yaml-schema";
import { ErrorDeclaration } from "@fern-fern/ir-model/errors";
import { FernFileContext } from "../FernFileContext";
import { parseErrorName } from "../utils/parseErrorName";

export function convertErrorDeclaration({
    errorName,
    errorDeclaration,
    file,
}: {
    errorName: string;
    errorDeclaration: RawSchemas.ErrorDeclarationSchema;
    file: FernFileContext;
}): ErrorDeclaration {
    return {
        name: parseErrorName({
            errorName,
            file,
        }),
        discriminantValue: file.casingsGenerator.generateNameAndWireValue({
            wireValue: errorName,
            name: errorName,
        }),
        docs: typeof errorDeclaration !== "string" ? errorDeclaration.docs : undefined,
        statusCode: errorDeclaration["status-code"],
        type: errorDeclaration.type != null ? file.parseTypeReference(errorDeclaration.type) : undefined,
    };
}
