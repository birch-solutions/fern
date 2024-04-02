import { HttpEndpoint, IntermediateRepresentation } from "@fern-fern/ir-sdk/api";
import { PackageId } from "@fern-typescript/commons";
import { GeneratedEndpointErrorUnion } from "@fern-typescript/contexts";
import { ErrorResolver } from "@fern-typescript/resolvers";
import { GeneratedEndpointErrorUnionImpl } from "./GeneratedEndpointErrorUnionImpl";

export declare namespace EndpointErrorUnionGenerator {
    export interface Init {
        intermediateRepresentation: IntermediateRepresentation;
        errorResolver: ErrorResolver;
        includeSerdeLayer: boolean;
        retainOriginalCasing: boolean;
        noOptionalProperties: boolean;
    }

    export namespace generateEndpointErrorUnion {
        export interface Args {
            packageId: PackageId;
            endpoint: HttpEndpoint;
        }
    }
}

export class EndpointErrorUnionGenerator {
    private intermediateRepresentation: IntermediateRepresentation;
    private errorResolver: ErrorResolver;
    private includeSerdeLayer: boolean;
    private retainOriginalCasing: boolean;
    private noOptionalProperties: boolean;

    constructor({
        intermediateRepresentation,
        errorResolver,
        includeSerdeLayer,
        retainOriginalCasing,
        noOptionalProperties
    }: EndpointErrorUnionGenerator.Init) {
        this.intermediateRepresentation = intermediateRepresentation;
        this.errorResolver = errorResolver;
        this.includeSerdeLayer = includeSerdeLayer;
        this.retainOriginalCasing = retainOriginalCasing;
        this.noOptionalProperties = noOptionalProperties;
    }

    public generateEndpointErrorUnion({
        packageId,
        endpoint
    }: EndpointErrorUnionGenerator.generateEndpointErrorUnion.Args): GeneratedEndpointErrorUnion {
        return new GeneratedEndpointErrorUnionImpl({
            packageId,
            endpoint,
            errorResolver: this.errorResolver,
            errorDiscriminationStrategy: this.intermediateRepresentation.errorDiscriminationStrategy,
            includeSerdeLayer: this.includeSerdeLayer,
            retainOriginalCasing: this.retainOriginalCasing,
            noOptionalProperties: this.noOptionalProperties
        });
    }
}
