import {
    constructFernFileContext,
    ExampleResolverImpl,
    ExampleValidators,
    TypeResolverImpl
} from "@fern-api/ir-generator";
import { Rule } from "../../Rule";
import { CASINGS_GENERATOR } from "../../utils/casingsGenerator";

export const ValidExampleErrorRule: Rule = {
    name: "valid-example-error",
    create: ({ workspace }) => {
        const typeResolver = new TypeResolverImpl(workspace);
        const exampleResolver = new ExampleResolverImpl(typeResolver);

        return {
            definitionFile: {
                exampleError: async (
                    { errorName, declaration, example },
                    { relativeFilepath, contents: definitionFile }
                ) => {
                    if (declaration.type == null) {
                        return [];
                    }
                    const violations = await ExampleValidators.validateTypeReferenceExample({
                        rawTypeReference: declaration.type,
                        example: example.value,
                        file: constructFernFileContext({
                            relativeFilepath,
                            definitionFile,
                            casingsGenerator: CASINGS_GENERATOR,
                            rootApiFile: (await workspace.getDefinition()).rootApiFile.contents
                        }),
                        workspace,
                        typeResolver,
                        exampleResolver
                    });
                    return violations.map((violation) => {
                        return {
                            severity: "error",
                            message: violation.message
                        };
                    });
                }
            }
        };
    }
};
