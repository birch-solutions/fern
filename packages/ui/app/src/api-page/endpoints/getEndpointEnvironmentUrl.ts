import * as FernRegistryApiRead from "@fern-fern/registry-browser/serialization/resources/api/resources/v1/resources/read";

export function getEndpointEnvironmentUrl(endpoint: FernRegistryApiRead.EndpointDefinition.Raw): string | undefined {
    if (endpoint.defaultEnvironment != null) {
        const defaultEnvironment = endpoint.environments.find((env) => env.id === endpoint.defaultEnvironment);
        if (defaultEnvironment != null) {
            return defaultEnvironment.baseUrl;
        }
    }
    return endpoint.environments[0]?.baseUrl;
}
