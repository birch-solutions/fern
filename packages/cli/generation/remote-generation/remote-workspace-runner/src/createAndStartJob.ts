import { GeneratorInvocation } from "@fern-api/generators-configuration";
import { migrateIntermediateRepresentation } from "@fern-api/ir-migrations";
import { createFiddleService, getFiddleOrigin } from "@fern-api/services";
import { TaskContext } from "@fern-api/task-context";
import { Workspace } from "@fern-api/workspace-loader";
import { FernFiddle } from "@fern-fern/fiddle-sdk";
import { Fetcher } from "@fern-fern/fiddle-sdk/core";
import { IntermediateRepresentation } from "@fern-fern/ir-model/ir";
import axios, { AxiosError } from "axios";
import FormData from "form-data";
import urlJoin from "url-join";
import { substituteEnvVariables } from "./substituteEnvVariables";

export async function createAndStartJob({
    workspace,
    organization,
    intermediateRepresentation,
    generatorInvocation,
    version,
    context,
    shouldLogS3Url,
    token,
}: {
    workspace: Workspace;
    organization: string;
    intermediateRepresentation: IntermediateRepresentation;
    generatorInvocation: GeneratorInvocation;
    version: string | undefined;
    context: TaskContext;
    shouldLogS3Url: boolean;
    token: string;
}): Promise<FernFiddle.remoteGen.CreateJobResponse> {
    const job = await createJob({
        workspace,
        organization,
        generatorInvocation,
        version,
        context,
        shouldLogS3Url,
        token,
    });
    await startJob({ intermediateRepresentation, job, context, generatorInvocation });
    return job;
}

async function createJob({
    workspace,
    organization,
    generatorInvocation,
    version,
    context,
    shouldLogS3Url,
    token,
}: {
    workspace: Workspace;
    organization: string;
    generatorInvocation: GeneratorInvocation;
    version: string | undefined;
    context: TaskContext;
    shouldLogS3Url: boolean;
    token: string;
}): Promise<FernFiddle.remoteGen.CreateJobResponse> {
    const generatorConfig: FernFiddle.GeneratorConfigV2 = {
        id: generatorInvocation.name,
        version: generatorInvocation.version,
        outputMode: generatorInvocation.outputMode,
        customConfig: generatorInvocation.config,
    };
    const generatorConfigsWithEnvVarSubstitutions = substituteEnvVariables(generatorConfig, context);

    const remoteGenerationService = createFiddleService({ token });
    const createResponse = await remoteGenerationService.remoteGen.createJobV3({
        apiName: workspace.name,
        version,
        organizationName: organization,
        generators: [generatorConfigsWithEnvVarSubstitutions],
        uploadToS3: shouldLogS3Url || generatorConfigsWithEnvVarSubstitutions.outputMode.type === "downloadFiles",
    });

    if (!createResponse.ok) {
        return convertCreateJobError(createResponse.error as unknown as Fetcher.Error)._visit({
            illegalApiNameError: () => {
                return context.failAndThrow("API name is invalid: " + workspace.name);
            },
            cannotPublishToNpmScope: ({ validScope, invalidScope }) => {
                return context.failAndThrow(
                    `You do not have permission to publish to ${invalidScope} (expected ${validScope})`
                );
            },
            cannotPublishToMavenGroup: ({ validGroup, invalidGroup }) => {
                return context.failAndThrow(
                    `You do not have permission to publish to ${invalidGroup} (expected ${validGroup})`
                );
            },
            generatorsDoNotExistError: (value) => {
                return context.failAndThrow(
                    "Generators do not exist: " +
                        value.nonExistentGenerators
                            .map((generator) => `${generator.id}@${generator.version}`)
                            .join(", ")
                );
            },
            insufficientPermissions: () => {
                return context.failAndThrow("Insufficient permissions.");
            },
            _other: (content) => {
                return context.failAndThrow("Failed to create job", content);
            },
        });
    }

    return createResponse.body;
}

async function startJob({
    intermediateRepresentation,
    generatorInvocation,
    job,
    context,
}: {
    intermediateRepresentation: IntermediateRepresentation;
    generatorInvocation: GeneratorInvocation;
    job: FernFiddle.remoteGen.CreateJobResponse;
    context: TaskContext;
}): Promise<void> {
    const migratedIntermediateRepresentation = migrateIntermediateRepresentation({
        generatorName: generatorInvocation.name,
        generatorVersion: generatorInvocation.version,
        intermediateRepresentation,
    });

    const formData = new FormData();
    formData.append("file", JSON.stringify(migratedIntermediateRepresentation));

    const url = urlJoin(getFiddleOrigin(), `/api/remote-gen/jobs/${job.jobId}/start`);
    try {
        await axios.post(url, formData, {
            headers: formData.getHeaders(),
        });
    } catch (error) {
        const errorBody = error instanceof AxiosError ? error.response?.data : error;
        context.failAndThrow("Failed to start job", errorBody);
    }
}

// Fiddle is on the old version of error serialization. Until we upgrade the
// java generator to support the new implementation, we manually migrate
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertCreateJobError(error: any): FernFiddle.remoteGen.createJobV3.Error {
    if (error?.reason === "status-code") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const body = error.body as any;
        switch (body?._error) {
            case "IllegalApiNameError":
                return FernFiddle.remoteGen.createJobV3.Error.illegalApiNameError();
            case "GeneratorsDoNotExistError":
                return FernFiddle.remoteGen.createJobV3.Error.generatorsDoNotExistError(body.body);
            case "CannotPublishToNpmScope":
                return FernFiddle.remoteGen.createJobV3.Error.cannotPublishToNpmScope(body.body);
            case "CannotPublishToMavenScope":
                return FernFiddle.remoteGen.createJobV3.Error.cannotPublishToMavenGroup(body.body);
            case "InsufficientPermissions":
                return FernFiddle.remoteGen.createJobV3.Error.insufficientPermissions(body.body);
        }
    }
    return error;
}
