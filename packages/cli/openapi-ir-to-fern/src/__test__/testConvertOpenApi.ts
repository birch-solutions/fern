import { RawSchemas } from "@fern-api/fern-definition-schema";
import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { CONSOLE_LOGGER } from "@fern-api/logger";
import { parse, Spec } from "@fern-api/openapi-parser";
import { createMockTaskContext } from "@fern-api/task-context";
import path from "path";
import { convert } from "../convert";

const FIXTURES_PATH = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));

// eslint-disable-next-line jest/no-export
export declare namespace TestConvertOpenAPI {
    interface Options {
        asyncApiFilename?: string;
        environmentOverrides?: RawSchemas.WithEnvironmentsSchema;
        authOverrides?: RawSchemas.WithAuthSchema;
    }
}

// eslint-disable-next-line jest/no-export
export function testConvertOpenAPI(fixtureName: string, filename: string, opts: TestConvertOpenAPI.Options = {}): void {
    // eslint-disable-next-line jest/valid-title
    describe(fixtureName, () => {
        it("simple", async () => {
            const openApiPath = path.join(FIXTURES_PATH, fixtureName, filename);
            const mockTaskContext = createMockTaskContext({ logger: CONSOLE_LOGGER });

            const absolutePathToAsyncAPI =
                opts.asyncApiFilename != null
                    ? join(FIXTURES_PATH, RelativeFilePath.of(fixtureName), RelativeFilePath.of(opts.asyncApiFilename))
                    : undefined;

            const specs: Spec[] = [];
            specs.push({
                absoluteFilepath: AbsoluteFilePath.of(openApiPath),
                absoluteFilepathToOverrides: undefined,
                source: {
                    type: "openapi",
                    file: AbsoluteFilePath.of(openApiPath)
                }
            });
            if (absolutePathToAsyncAPI != null) {
                specs.push({
                    absoluteFilepath: absolutePathToAsyncAPI,
                    absoluteFilepathToOverrides: undefined,
                    source: {
                        type: "asyncapi",
                        file: absolutePathToAsyncAPI
                    }
                });
            }

            const openApiIr = await parse({
                absoluteFilePathToWorkspace: FIXTURES_PATH,
                specs,
                taskContext: createMockTaskContext({ logger: CONSOLE_LOGGER })
            });
            const fernDefinition = convert({
                environmentOverrides: opts.environmentOverrides,
                authOverrides: opts.authOverrides,
                ir: openApiIr,
                taskContext: mockTaskContext,
                enableUniqueErrorsPerEndpoint: false,
                detectGlobalHeaders: true
            });
            expect(fernDefinition).toMatchSnapshot();
        });

        it("docs", async () => {
            const openApiPath = path.join(FIXTURES_PATH, fixtureName, filename);
            const mockTaskContext = createMockTaskContext({ logger: CONSOLE_LOGGER });

            const absolutePathToAsyncAPI =
                opts.asyncApiFilename != null
                    ? join(FIXTURES_PATH, RelativeFilePath.of(fixtureName), RelativeFilePath.of(opts.asyncApiFilename))
                    : undefined;

            const specs: Spec[] = [];
            specs.push({
                absoluteFilepath: AbsoluteFilePath.of(openApiPath),
                absoluteFilepathToOverrides: undefined,
                source: {
                    type: "openapi",
                    file: AbsoluteFilePath.of(openApiPath)
                }
            });
            if (absolutePathToAsyncAPI != null) {
                specs.push({
                    absoluteFilepath: absolutePathToAsyncAPI,
                    absoluteFilepathToOverrides: undefined,
                    source: {
                        type: "asyncapi",
                        file: absolutePathToAsyncAPI
                    }
                });
            }

            const openApiIr = await parse({
                absoluteFilePathToWorkspace: FIXTURES_PATH,
                specs,
                taskContext: createMockTaskContext({ logger: CONSOLE_LOGGER })
            });
            const fernDefinition = convert({
                environmentOverrides: opts.environmentOverrides,
                authOverrides: opts.authOverrides,
                ir: openApiIr,
                taskContext: mockTaskContext,
                enableUniqueErrorsPerEndpoint: true,
                detectGlobalHeaders: false
            });
            expect(fernDefinition).toMatchSnapshot();
        });
    });
}
