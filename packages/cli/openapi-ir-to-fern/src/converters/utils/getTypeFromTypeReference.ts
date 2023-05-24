import { RawSchemas } from "@fern-api/yaml-schema";

export function getTypeFromTypeReference(typeReference: RawSchemas.TypeReferenceWithDocsSchema): string {
    if (typeof typeReference === "string") {
        return typeReference;
    }
    return typeReference.type;
}

export function getDocsFromTypeReference(typeReference: RawSchemas.TypeReferenceWithDocsSchema): string | undefined {
    if (typeof typeReference === "string") {
        return undefined;
    }
    return typeReference.docs;
}
