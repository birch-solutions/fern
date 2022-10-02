import { DraftGeneratorInvocationSchema } from "@fern-api/generators-configuration";

export const JAVA_GENERATOR_INVOCATION: DraftGeneratorInvocationSchema = {
    name: "fernapi/java-client",
    version: "0.0.109",
};

export const TYPESCRIPT_GENERATOR_INVOCATION: DraftGeneratorInvocationSchema = {
    name: "fernapi/fern-typescript-sdk",
    version: "0.0.199",
};

export const POSTMAN_GENERATOR_INVOCATION: DraftGeneratorInvocationSchema = {
    name: "fernapi/fern-postman",
    version: "0.0.23",
    "local-output": "./generated-postman.json",
};

export const OPENAPI_GENERATOR_INVOCATION: DraftGeneratorInvocationSchema = {
    name: "fernapi/fern-openapi",
    version: "0.0.8",
    "local-output": "./generated-openapi.yaml",
    config: {
        format: "yaml",
    },
};

export const GENERATOR_INVOCATIONS: Record<string, DraftGeneratorInvocationSchema> = {
    [JAVA_GENERATOR_INVOCATION.name]: JAVA_GENERATOR_INVOCATION,
    [TYPESCRIPT_GENERATOR_INVOCATION.name]: TYPESCRIPT_GENERATOR_INVOCATION,
    [POSTMAN_GENERATOR_INVOCATION.name]: POSTMAN_GENERATOR_INVOCATION,
    [OPENAPI_GENERATOR_INVOCATION.name]: OPENAPI_GENERATOR_INVOCATION,
};
