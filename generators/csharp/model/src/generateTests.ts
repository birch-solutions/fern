import { CSharpFile } from "@fern-api/csharp-codegen";
import { ModelGeneratorContext } from "./ModelGeneratorContext";
import { ObjectGenerator } from "./object/ObjectGenerator";
import { ObjectSerializationTestGenerator } from "./object/ObjectSerializationTestGenerator";

export function generateModelTests({ context }: { context: ModelGeneratorContext }): CSharpFile[] {
    const files: CSharpFile[] = [];
    for (const [typeId, typeDeclaration] of Object.entries(context.ir.types)) {
        if (typeDeclaration.shape.type !== "object") {
            continue;
        }
        if (context.protobufResolver.isAnyWellKnownProtobufType(typeId)) {
            continue;
        }
        const objectGenerator = new ObjectGenerator(context, typeDeclaration, typeDeclaration.shape);
        const examples = [...typeDeclaration.userProvidedExamples, ...typeDeclaration.autogeneratedExamples];
        if (examples.length === 0) {
            continue;
        }
        const testInputs = examples.map((example) => {
            if (example.shape.type !== "object") {
                throw new Error("Unexpected non object type example");
            }
            const snippet = objectGenerator.doGenerateSnippet({ exampleObject: example.shape, parseDatetimes: true });
            return {
                objectInstantiationSnippet: snippet,
                json: example.jsonExample
            };
        });
        const testGenerator = new ObjectSerializationTestGenerator(context, typeDeclaration, testInputs);
        files.push(testGenerator.generate());
    }
    return files;
}
