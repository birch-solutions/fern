import { RelativeFilePath } from "@fern-api/core-utils";
import { ErrorDeclaration } from "@fern-fern/ir-model/errors";
import { Type, TypeReference } from "@fern-fern/ir-model/types";
import { convertErrorDeclaration } from "../converters/convertErrorDeclaration";
import { convertToFernFilepath } from "../utils/convertToFernFilepath";

describe("convertErrorDeclaration", () => {
    it("reference to a type in another file", () => {
        const definition = convertErrorDeclaration({
            errorName: "UnauthorizedError",
            errorDeclaration: {
                type: {
                    properties: {
                        postId: "commons.PostId",
                    },
                },
            },
            fernFilepath: convertToFernFilepath(RelativeFilePath.of("path/to/other")),
            imports: {
                commons: RelativeFilePath.of("./commons"),
            },
        });

        const expectedDefinition: ErrorDeclaration = {
            docs: undefined,
            name: {
                name: "UnauthorizedError",
                fernFilepath: convertToFernFilepath(RelativeFilePath.of("path/to/other")),
            },
            discriminantValue: {
                wireValue: "UnauthorizedError",
                originalValue: "UnauthorizedError",
                camelCase: "unauthorizedError",
                pascalCase: "UnauthorizedError",
                snakeCase: "unauthorized_error",
                screamingSnakeCase: "UNAUTHORIZED_ERROR",
            },
            http: undefined,
            type: Type.object({
                extends: [],
                properties: [
                    {
                        docs: undefined,
                        name: {
                            wireValue: "postId",
                            originalValue: "postId",
                            camelCase: "postId",
                            pascalCase: "PostId",
                            snakeCase: "post_id",
                            screamingSnakeCase: "POST_ID",
                        },
                        valueType: TypeReference.named({
                            fernFilepath: convertToFernFilepath(RelativeFilePath.of("path/to/commons")),
                            name: "PostId",
                        }),
                    },
                ],
            }),
        };

        expect(definition).toEqual(expectedDefinition);
    });
});
