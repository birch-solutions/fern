import { RelativeFilePath } from "@fern-api/core-utils";
import { getResolvedPathOfImportedFile } from "./getResolvedPathOfImportedFile";

export interface ReferenceToTypeName {
    typeName: string;
    relativeFilePath: RelativeFilePath;
}

export function parseReferenceToTypeName({
    reference,
    referencedIn,
    imports,
}: {
    reference: string;
    referencedIn: RelativeFilePath;
    imports: Record<string, RelativeFilePath>;
}): ReferenceToTypeName | undefined {
    const [firstPart, secondPart, ...rest] = reference.split(".");

    if (firstPart == null || rest.length > 0) {
        return undefined;
    }

    if (secondPart == null) {
        return {
            typeName: firstPart,
            relativeFilePath: referencedIn,
        };
    }

    const importAlias = firstPart;
    const importPath = imports[importAlias];
    if (importPath == null) {
        return undefined;
    }

    return {
        relativeFilePath: getResolvedPathOfImportedFile({ referencedIn, importPath }),
        typeName: secondPart,
    };
}
