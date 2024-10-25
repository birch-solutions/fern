import { FernGeneratorExec } from "@fern-api/generator-commons";
import { BaseGoCustomConfigSchema, resolveRootImportPath } from "@fern-api/go-codegen";
import { FernFilepath, dynamic as DynamicSnippets, TypeId, Name, NameAndWireValue } from "@fern-fern/ir-sdk/api";
import { HttpEndpointReferenceParser } from "@fern-api/fern-definition-schema";
import { TypeInstance } from "../TypeInstance";
import { DiscriminatedUnionTypeInstance } from "../DiscriminatedUnionTypeInstance";
import { DynamicTypeMapper } from "./DynamicTypeMapper";
import { DynamicTypeInstantiationMapper } from "./DynamicTypeInstantiationMapper";
import { go } from "@fern-api/go-codegen";
import path from "path";

export class DynamicSnippetsGeneratorContext {
    public ir: DynamicSnippets.DynamicIntermediateRepresentation;
    public config: FernGeneratorExec.config.GeneratorConfig;
    public customConfig: BaseGoCustomConfigSchema;
    public dynamicTypeMapper: DynamicTypeMapper;
    public dynamicTypeInstantiationMapper: DynamicTypeInstantiationMapper;
    public rootImportPath: string;

    private httpEndpointReferenceParser: HttpEndpointReferenceParser;

    constructor({
        ir,
        config
    }: {
        ir: DynamicSnippets.DynamicIntermediateRepresentation;
        config: FernGeneratorExec.config.GeneratorConfig;
    }) {
        this.ir = ir;
        this.config = config;
        this.customConfig = config.customConfig as BaseGoCustomConfigSchema;
        this.dynamicTypeMapper = new DynamicTypeMapper({ context: this });
        this.dynamicTypeInstantiationMapper = new DynamicTypeInstantiationMapper({ context: this });
        this.rootImportPath = resolveRootImportPath({ config, customConfig: this.customConfig });
        this.httpEndpointReferenceParser = new HttpEndpointReferenceParser();
    }

    public associateByWireValue({
        parameters,
        values,
        ignoreMissingParameters
    }: {
        parameters: DynamicSnippets.NamedParameter[];
        values: DynamicSnippets.Values;
        ignoreMissingParameters?: boolean;
    }): TypeInstance[] {
        const instances: TypeInstance[] = [];
        for (const [key, value] of Object.entries(values)) {
            const parameter = parameters.find((param) => param.name.wireValue === key);
            if (parameter == null) {
                if (ignoreMissingParameters) {
                    continue;
                }
                throw new Error(`"${key}" is not a recognized parameter for this endpoint`);
            }
            instances.push({
                name: parameter.name.name,
                typeReference: parameter.typeReference,
                value
            });
        }
        return instances;
    }

    public getRecordOrThrow(value: unknown): Record<string, unknown> {
        if (typeof value !== "object" || Array.isArray(value)) {
            throw new Error(`Expected object with key, value pairs but got: ${JSON.stringify(value)}`);
        }
        if (value == null) {
            return {};
        }
        return value as Record<string, unknown>;
    }

    public resolveNamedTypeOrThrow({ typeId }: { typeId: TypeId }): DynamicSnippets.NamedType {
        const namedType = this.ir.types[typeId];
        if (namedType == null) {
            throw new Error(`Type identified by "${typeId}" could not be found`);
        }
        return namedType;
    }

    public resolveDiscriminatedUnionTypeInstanceOrThrow({
        discriminatedUnion,
        value
    }: {
        discriminatedUnion: DynamicSnippets.DiscriminatedUnionType;
        value: unknown;
    }): DiscriminatedUnionTypeInstance {
        const record = this.getRecordOrThrow(value);

        const discriminantFieldName = discriminatedUnion.discriminant.wireValue;
        const discriminantValue = record[discriminantFieldName];
        if (discriminantValue == null) {
            throw new Error(
                `Missing required discriminant field "${discriminantFieldName}" got ${JSON.stringify(value)}`
            );
        }
        if (typeof discriminantValue !== "string") {
            throw new Error(`Expected discriminant value to be a string but got: ${JSON.stringify(discriminantValue)}`);
        }

        const singleDiscriminatedUnionType = discriminatedUnion.types[discriminantValue];
        if (singleDiscriminatedUnionType == null) {
            throw new Error(`No type found for discriminant value "${discriminantValue}"`);
        }

        // Remove the discriminant from the record so that the value is valid for the type.
        const { [discriminantFieldName]: _, ...filtered } = record;

        return {
            singleDiscriminatedUnionType,
            discriminantValue: singleDiscriminatedUnionType.discriminantValue,
            value: filtered
        };
    }

    public getMethodName(name: Name): string {
        return name.pascalCase.unsafeName;
    }

    public getTypeName(name: Name): string {
        return name.pascalCase.unsafeName;
    }

    public getImportPath(fernFilepath: FernFilepath): string {
        const parts = fernFilepath.packagePath.map((path) => path.pascalCase.unsafeName.toLowerCase());
        return [this.rootImportPath, ...parts].join("/");
    }

    public getContextTypeReference(): go.TypeReference {
        return go.typeReference({
            name: "Context",
            importPath: "context"
        });
    }

    public getContextTodoFunctionInvocation(): go.FuncInvocation {
        return go.invokeFunc({
            func: go.typeReference({
                name: "TODO",
                importPath: "context"
            }),
            arguments_: []
        });
    }

    public getClientImportPath(): string {
        return path.join(this.rootImportPath, "client");
    }

    public getOptionImportPath(): string {
        return path.join(this.rootImportPath, "option");
    }

    public resolveEndpointOrThrow(rawEndpoint: string): DynamicSnippets.Endpoint {
        const parsedEndpoint = this.httpEndpointReferenceParser.tryParse(rawEndpoint);
        if (parsedEndpoint == null) {
            throw new Error(`Failed to parse endpoint reference "${rawEndpoint}"`);
        }
        return this.resolveEndpointLocationOrThrow(parsedEndpoint);
    }

    public resolveEndpointLocationOrThrow(location: DynamicSnippets.EndpointLocation): DynamicSnippets.Endpoint {
        for (const endpoint of Object.values(this.ir.endpoints)) {
            if (this.parsedEndpointMatches({ endpoint, parsedEndpoint: location })) {
                return endpoint;
            }
        }
        throw new Error(`Failed to find endpoint identified by "${JSON.stringify(location)}"`);
    }

    public getGoTypeReferenceFromDeclaration({
        declaration
    }: {
        declaration: DynamicSnippets.Declaration;
    }): go.TypeReference {
        return go.typeReference({
            name: declaration.name.pascalCase.unsafeName,
            importPath: this.getImportPath(declaration.fernFilepath)
        });
    }

    private parsedEndpointMatches({
        endpoint,
        parsedEndpoint
    }: {
        endpoint: DynamicSnippets.Endpoint;
        parsedEndpoint: HttpEndpointReferenceParser.Parsed;
    }): boolean {
        return endpoint.location.method === parsedEndpoint.method && endpoint.location.path === parsedEndpoint.path;
    }
}
