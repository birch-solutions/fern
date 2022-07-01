import { RawSchemas } from "@fern-api/syntax-analysis";
import { FernFilepath, PrimitiveType, Type, TypeDeclaration, TypeReference } from "@fern-fern/ir-model";
import { getDocs } from "../utils/getDocs";
import { createTypeReferenceParser } from "../utils/parseInlineType";

export function convertId({
    id,
    fernFilepath,
    imports,
}: {
    id: RawSchemas.IdSchema;
    fernFilepath: FernFilepath;
    imports: Record<string, string>;
}): TypeDeclaration {
    const parseTypeReference = createTypeReferenceParser({ fernFilepath, imports });

    return {
        docs: getDocs(id),
        name: {
            fernFilepath,
            name: typeof id === "string" ? id : id.name,
        },
        shape: Type.alias({
            aliasOf:
                typeof id === "string" || id.type == null
                    ? TypeReference.primitive(PrimitiveType.String)
                    : parseTypeReference(id.type),
        }),
    };
}
