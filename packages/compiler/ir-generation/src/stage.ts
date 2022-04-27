import { IntermediateRepresentation } from "@fern-api/api";
import { CompilerStage, RelativeFilePath } from "@fern-api/compiler-commons";
import { RawSchemas } from "@fern-api/syntax-analysis";
import { convertErrorDefinition } from "./converters/convertErrorDefinition";
import { convertId } from "./converters/convertId";
import { convertHttpService } from "./converters/services/convertHttpService";
import { convertWebsocketService } from "./converters/services/convertWebsocketService";
import { convertTypeDefinition } from "./converters/type-definitions/convertTypeDefinition";
import { convertToFernFilepath } from "./utils/convertToFernFilepath";
import { noop } from "./utils/noop";
import { visit } from "./utils/visit";

export const IntermediateRepresentationGenerationStage: CompilerStage<
    Record<RelativeFilePath, RawSchemas.RawFernConfigurationSchema>,
    IntermediateRepresentation,
    void
> = {
    run: (schemas) => {
        const intermediateRepresentation: IntermediateRepresentation = {
            types: [],
            errors: [],
            services: {
                http: [],
                websocket: [],
            },
        };

        for (const [filepath, schema] of Object.entries(schemas)) {
            const fernFilepath = convertToFernFilepath(filepath);

            const { imports = {} } = schema;

            visit(schema, {
                imports: noop,
                ids: (ids) => {
                    if (ids == null) {
                        return;
                    }

                    for (const id of ids) {
                        intermediateRepresentation.types.push(convertId({ id, fernFilepath, imports }));
                    }
                },
                types: (types) => {
                    if (types == null) {
                        return;
                    }

                    for (const [typeName, typeDefinition] of Object.entries(types)) {
                        intermediateRepresentation.types.push(
                            convertTypeDefinition({
                                typeName,
                                typeDefinition,
                                fernFilepath,
                                imports,
                            })
                        );
                    }
                },

                errors: (errors) => {
                    if (errors == null) {
                        return;
                    }

                    for (const [errorName, errorDefinition] of Object.entries(errors)) {
                        intermediateRepresentation.errors.push(
                            convertErrorDefinition({ errorName, fernFilepath, errorDefinition, imports })
                        );
                    }
                },

                services: (services) => {
                    if (services == null) {
                        return;
                    }

                    if (services.http != null) {
                        for (const [serviceId, serviceDefinition] of Object.entries(services.http)) {
                            intermediateRepresentation.services.http.push(
                                convertHttpService({ serviceDefinition, serviceId, fernFilepath, imports })
                            );
                        }
                    }

                    if (services.websocket != null) {
                        for (const [serviceId, serviceDefinition] of Object.entries(services.websocket)) {
                            intermediateRepresentation.services.websocket.push(
                                convertWebsocketService({
                                    serviceId,
                                    serviceDefinition,
                                    fernFilepath,
                                    imports,
                                })
                            );
                        }
                    }
                },
            });
        }

        return {
            didSucceed: true,
            result: intermediateRepresentation,
        };
    },
};
