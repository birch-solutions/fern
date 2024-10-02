import { ModelGeneratorContext } from "./ModelGeneratorContext";
import { TraitGenerator } from "./trait/TraitGenerator";

export function generateTraits(context: ModelGeneratorContext): void {
    const extendedTypeIdsFromTypes: Set<string> = new Set(
        Object.values(context.ir.types).flatMap((typeDeclaration) =>
            typeDeclaration.shape._visit<string[]>({
                alias: () => [],
                enum: () => [],
                object: (objectDeclaration) =>
                    objectDeclaration.extends.map((declaredTypeName) => declaredTypeName.typeId),
                undiscriminatedUnion: () => [],
                union: () => [],
                _other: () => []
            })
        )
    );
    const extendedTypeIdsFromInlinedRequests = Object.values(context.ir.services)
        .flatMap((service) => service.endpoints)
        .flatMap((endpoint) => {
            return endpoint.requestBody?.type === "inlinedRequestBody"
                ? endpoint.requestBody.extends.map((declaredTypeName) => declaredTypeName.typeId)
                : [];
        });
    for (const typeId of [...extendedTypeIdsFromTypes, ...extendedTypeIdsFromInlinedRequests]) {
        const typeDeclaration = context.getTypeDeclarationOrThrow(typeId);
        const objectTypeDeclaration = context.getUnderlyingObjectTypeDeclarationFromTypeDeclaration(typeDeclaration);
        if (objectTypeDeclaration == null) {
            throw new Error("Unexpected no object type declaration");
        }
        const file = new TraitGenerator(context, typeDeclaration, objectTypeDeclaration).generate();
        context.project.addSourceFiles(file);
    }
}
