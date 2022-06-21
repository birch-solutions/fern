import { IntermediateRepresentation } from "@fern-api/api";
import { generateTypeScriptProject, ModelContext, TypeResolver } from "@fern-typescript/commons";
import { generateErrorFiles } from "@fern-typescript/errors";
import { generateTypeFiles } from "@fern-typescript/types";
import { Volume } from "memfs/lib/volume";
import { Directory } from "ts-morph";

export async function generateModelProject({
    packageName,
    packageVersion,
    volume,
    intermediateRepresentation,
    typeResolver = new TypeResolver(intermediateRepresentation),
}: {
    packageName: string;
    packageVersion: string;
    volume: Volume;
    intermediateRepresentation: IntermediateRepresentation;
    typeResolver?: TypeResolver;
}): Promise<void> {
    await generateTypeScriptProject({
        volume,
        packageName,
        packageVersion,
        generateSrc: (directory) => {
            generateModelFiles({ intermediateRepresentation, typeResolver, directory });
        },
    });
}

export function generateModelFiles({
    intermediateRepresentation,
    directory,
    typeResolver,
}: {
    intermediateRepresentation: IntermediateRepresentation;
    directory: Directory;
    typeResolver: TypeResolver;
}): Directory {
    const modelDirectory = directory.createDirectory("model");
    const modelContext = new ModelContext(modelDirectory);
    generateTypeFiles({ intermediateRepresentation, typeResolver, modelContext });
    generateErrorFiles({ intermediateRepresentation, typeResolver, modelContext });
    return modelDirectory;
}
