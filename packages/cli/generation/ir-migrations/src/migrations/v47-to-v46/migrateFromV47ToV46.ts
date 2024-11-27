import { GeneratorName } from "@fern-api/configuration-loader";
import { isNonNullish } from "@fern-api/core-utils";
import { IrSerialization } from "../../ir-serialization";
import { IrVersions } from "../../ir-versions";
import {
    GeneratorWasNeverUpdatedToConsumeNewIR,
    GeneratorWasNotCreatedYet,
    IrMigration
} from "../../types/IrMigration";

export const V47_TO_V46_MIGRATION: IrMigration<
    IrVersions.V47.ir.IntermediateRepresentation,
    IrVersions.V46.ir.IntermediateRepresentation
> = {
    laterVersion: "v47",
    earlierVersion: "v46",
    firstGeneratorVersionToConsumeNewIR: {
        [GeneratorName.TYPESCRIPT_NODE_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.TYPESCRIPT_BROWSER_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.TYPESCRIPT]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.TYPESCRIPT_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.TYPESCRIPT_EXPRESS]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.JAVA]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.JAVA_MODEL]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.JAVA_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.JAVA_SPRING]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.PYTHON_FASTAPI]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.PYTHON_PYDANTIC]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.OPENAPI_PYTHON_CLIENT]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.OPENAPI]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.STOPLIGHT]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.POSTMAN]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.PYTHON_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.GO_FIBER]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.GO_MODEL]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.GO_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.RUBY_MODEL]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.RUBY_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.CSHARP_MODEL]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.CSHARP_SDK]: GeneratorWasNeverUpdatedToConsumeNewIR,
        [GeneratorName.SWIFT_MODEL]: GeneratorWasNotCreatedYet,
        [GeneratorName.SWIFT_SDK]: GeneratorWasNotCreatedYet,
        [GeneratorName.PHP_MODEL]: GeneratorWasNotCreatedYet,
        [GeneratorName.PHP_SDK]: GeneratorWasNotCreatedYet
    },
    jsonifyEarlierVersion: (ir) =>
        IrSerialization.V46.IntermediateRepresentation.jsonOrThrow(ir, {
            unrecognizedObjectKeys: "strip",
            skipValidation: true
        }),
    migrateBackwards: (v47): IrVersions.V46.ir.IntermediateRepresentation => {
        return {
            ...v47,
            services: Object.fromEntries(
                Object.entries(v47.services).map(([serviceId, service]) => {
                    const convertedEndpoints: IrVersions.V46.HttpEndpoint[] = service.endpoints.map((endpoint) => {
                        const { autogeneratedExamples, userSpecifiedExamples, ...endpointWithoutV47Examples } =
                            endpoint;
                        const convertedEndpoint = {
                            ...endpointWithoutV47Examples,
                            autogeneratedExamples: undefined,
                            userSpecifiedExamples: undefined,
                            examples: [
                                // convert user specified back
                                ...endpoint.userSpecifiedExamples
                                    .map((ex) => {
                                        if (ex.example == null) {
                                            return undefined;
                                        }
                                        return IrVersions.V46.HttpEndpointExample.userProvided({
                                            ...ex.example,
                                            codeSamples: ex.codeSamples
                                        });
                                    })
                                    .filter(isNonNullish),
                                // convert autogenerated back
                                ...endpoint.autogeneratedExamples.map((ex) => {
                                    return IrVersions.V46.HttpEndpointExample.generated({
                                        ...ex.example,
                                        codeSamples: undefined
                                    });
                                })
                            ]
                        };
                        return convertedEndpoint;
                    });
                    return [
                        serviceId,
                        {
                            ...service,
                            endpoints: convertedEndpoints
                        }
                    ];
                })
            )
        };
    }
};
