import { EndpointExample, FernOpenapiIr } from "@fern-api/openapi-ir-sdk";
import { RawSchemas } from "@fern-api/yaml-schema";
import { OpenAPIV3 } from "openapi-types";
import { getExtension } from "../../../getExtension";
import { OpenAPIExtension } from "./extensions";
import { FernOpenAPIExtension } from "./fernExtensions";

export function getFernExamples(operationObject: OpenAPIV3.OperationObject): EndpointExample[] {
    const raw =
        getExtension<RawSchemas.ExampleEndpointCallSchema[]>(operationObject, FernOpenAPIExtension.EXAMPLES) ?? [];
    const validated = raw.map((value) => RawSchemas.ExampleEndpointCallSchema.parse(value));
    // TODO: Not validated
    const fernExamples = validated.map(
        (value): EndpointExample => ({
            name: value.name,
            pathParameters: value["path-parameters"]
                ? Object.entries(value["path-parameters"]).map(([name, value]) => ({
                      name,
                      // TODO: Not validated
                      value: value as FernOpenapiIr.FullExample
                  }))
                : undefined,
            queryParameters: value["query-parameters"]
                ? Object.entries(value["query-parameters"]).map(([name, value]) => ({
                      name,
                      // TODO: Not validated
                      value: value as FernOpenapiIr.FullExample
                  }))
                : undefined,
            headers: value.headers
                ? Object.entries(value.headers).map(([name, value]) => ({
                      name,
                      // TODO: Not validated
                      value: value as FernOpenapiIr.FullExample
                  }))
                : undefined,
            request: value.request as FernOpenapiIr.FullExample,
            response: value.response as FernOpenapiIr.FullExample,
            codeSamples: (value["code-samples"] ?? []).map(
                (value): FernOpenapiIr.CustomCodeSample =>
                    "language" in value
                        ? FernOpenapiIr.CustomCodeSample.language({
                              name: value.name,
                              language: value.language,
                              code: value.code,
                              install: value.install,
                              description: value.docs
                          })
                        : FernOpenapiIr.CustomCodeSample.sdk({
                              name: value.name,
                              sdk: value.sdk === "c#" ? "csharp" : value.sdk,
                              code: value.code,
                              description: value.docs
                          })
            ),
            description: undefined
        })
    );

    const redoclyCodeSamplesKebabCase =
        getExtension<RawSchemas.XCodeSampleSchema[]>(operationObject, OpenAPIExtension.CODE_SAMPLES) ?? [];
    const redoclyCodeSamplesCamelCase =
        getExtension<RawSchemas.XCodeSampleSchema[]>(operationObject, OpenAPIExtension.CODESAMPLES) ?? [];
    const redoclyCodeSamples = [...redoclyCodeSamplesKebabCase, ...redoclyCodeSamplesCamelCase].map((value) =>
        RawSchemas.XCodeSampleSchema.parse(value)
    );

    if (redoclyCodeSamples.length > 0) {
        fernExamples.push({
            name: undefined,
            pathParameters: undefined,
            queryParameters: undefined,
            headers: undefined,
            request: undefined,
            response: undefined,
            codeSamples: redoclyCodeSamples.map(
                (value): FernOpenapiIr.CustomCodeSample =>
                    FernOpenapiIr.CustomCodeSample.language({
                        name: value.label ?? value.lang,
                        language: value.lang,
                        code: value.source,
                        install: undefined,
                        description: undefined
                    })
            ),
            description: undefined
        });
    }

    return fernExamples;
}
