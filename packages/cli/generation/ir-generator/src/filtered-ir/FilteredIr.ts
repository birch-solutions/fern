import { ErrorDeclaration, HttpEndpoint, HttpService, TypeDeclaration, Webhook } from "@fern-api/ir-sdk";
import { IdGenerator } from "../IdGenerator";
import { EndpointId, ErrorId, ServiceId, SubpackageId, TypeId, WebhookId } from "./ids";

export interface FilteredIr {
    hasType(type: TypeDeclaration): boolean;
    hasTypeId(type: string): boolean;
    hasProperty(type: string, property: string): boolean;
    hasError(error: ErrorDeclaration): boolean;
    hasErrorId(type: string): boolean;
    hasService(service: HttpService): boolean;
    hasServiceId(type: string): boolean;
    hasEndpoint(endpoint: HttpEndpoint): boolean;
    hasWebhook(webhook: Webhook): boolean;
    hasWebhookPayloadProperty(webhookId: string, property: string): boolean;
    hasRequestProperty(endpoint: string, property: string): boolean;
    hasSubpackageId(subpackageId: string): boolean;
}

export class FilteredIrImpl implements FilteredIr {
    private types: Set<TypeId> = new Set();
    private properties: Record<TypeId, Set<string>>;
    private errors: Set<ErrorId> = new Set();
    private services: Set<ServiceId> = new Set();
    private endpoints: Set<EndpointId> = new Set();
    private requestProperties: Record<EndpointId, Set<string>>;
    private webhooks: Set<WebhookId> = new Set();
    private webhookPayloadProperties: Record<WebhookId, Set<string>>;
    private subpackages: Set<SubpackageId> = new Set();

    public constructor({
        types,
        errors,
        services,
        endpoints,
        webhooks,
        subpackages,
        requestProperties,
        webhookPayloadProperties,
        properties
    }: {
        types: Set<TypeId>;
        properties: Record<TypeId, Set<string>>;
        errors: Set<ErrorId>;
        services: Set<ServiceId>;
        requestProperties: Record<EndpointId, Set<string>>;
        endpoints: Set<EndpointId>;
        webhooks: Set<WebhookId>;
        webhookPayloadProperties: Record<WebhookId, Set<string>>;
        subpackages: Set<SubpackageId>;
    }) {
        this.types = types;
        this.properties = properties;
        this.errors = errors;
        this.services = services;
        this.endpoints = endpoints;
        this.webhooks = webhooks;
        this.webhookPayloadProperties = webhookPayloadProperties;
        this.subpackages = subpackages;
        this.requestProperties = requestProperties;
    }

    public hasTypeId(typeId: string): boolean {
        return this.types.has(typeId);
    }

    public hasErrorId(errorId: string): boolean {
        return this.errors.has(errorId);
    }

    public hasServiceId(serviceId: string): boolean {
        return this.services.has(serviceId);
    }

    public hasSubpackageId(subpackageId: string): boolean {
        return this.subpackages.has(subpackageId);
    }

    public hasType(type: TypeDeclaration): boolean {
        const typeId = IdGenerator.generateTypeId(type.name);
        return this.types.has(typeId);
    }

    public hasProperty(typeId: string, property: string): boolean {
        const properties = this.properties[typeId];
        // no properties were filtered for type
        if (properties == null) {
            return true;
        }
        return properties.has(property);
    }

    public hasError(error: ErrorDeclaration): boolean {
        const errorId = IdGenerator.generateErrorId(error.name);
        return this.errors.has(errorId);
    }

    public hasService(service: HttpService): boolean {
        const serviceId = IdGenerator.generateServiceId(service.name);
        return this.services.has(serviceId);
    }

    public hasEndpoint(endpoint: HttpEndpoint): boolean {
        return this.endpoints.has(endpoint.id);
    }

    public hasRequestProperty(endpoint: string, property: string): boolean {
        const properties = this.requestProperties[endpoint];
        // no properties were filtered for inlined request
        if (properties == null) {
            return true;
        }
        return properties.has(property);
    }

    public hasSubpackage(subpackageId: string): boolean {
        return this.subpackages.has(subpackageId);
    }

    public hasWebhook(webhook: Webhook): boolean {
        if (webhook.id) {
            return this.webhooks.has(webhook.id);
        }
        return true;
    }

    public hasWebhookPayloadProperty(webhookId: string, property: string): boolean {
        const properties = this.webhookPayloadProperties[webhookId];
        // no properties were filtered for inlined request
        if (properties == null) {
            return true;
        }
        return properties.has(property);
    }
}
