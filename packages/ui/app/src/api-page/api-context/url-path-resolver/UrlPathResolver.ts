import { assertNever, entries } from "@fern-api/core-utils";
import { FernRegistry } from "@fern-fern/registry";

export type ResolvedUrlPath = ResolvedTopLevelEndpointPath | ResolvedSubpackagePath;

export interface ResolvedTopLevelEndpointPath {
    type: "top-level-endpoint";
    endpoint: FernRegistry.EndpointDefinition;
}

export interface ResolvedSubpackagePath {
    type: "subpackage";
    subpackageId: FernRegistry.SubpackageId;
    endpointId: string | undefined;
}

export interface UrlPathResolver {
    getUrlPathForSubpackage(subpackageId: FernRegistry.SubpackageId): string;
    getUrlPathForEndpoint(subpackageId: FernRegistry.SubpackageId, endpointId: string): string;
    getUrlPathForTopLevelEndpoint(endpointId: string): string;
    resolvePath(args: { pathname: string; hash: string }): ResolvedUrlPath | undefined;
    getHashForEndpoint(endpointId: string): string;
    getHtmlIdForEndpoint(endpointId: string): string;
    isTopLevelEndpointSelected(args: { endpointId: string; pathname: string; hash: string }): boolean;
    isSubpackageEndpointSelected(args: {
        subpackageId: FernRegistry.SubpackageId;
        pathname: string;
        hash: string;
    }): boolean;
    isSubpackageSelected(args: { subpackageId: FernRegistry.SubpackageId; pathname: string; hash: string }): boolean;
    isEndpointSelected(args: {
        subpackageId: FernRegistry.SubpackageId;
        endpointId: string;
        pathname: string;
        hash: string;
    }): boolean;
    stringifyPath: (resolvedPath: ResolvedUrlPath) => string;
}

const HASH_PREFIX_REGEX = /^#/;

interface SubpackageWithId {
    subpackage: FernRegistry.ApiDefinitionSubpackage;
    subpackageId: FernRegistry.SubpackageId;
}
export class UrlPathResolverImpl implements UrlPathResolver {
    private apiDefinition: FernRegistry.ApiDefinition;
    private subpackageIdToParentId: Record<FernRegistry.SubpackageId, FernRegistry.SubpackageId> = {};

    constructor(apiDefinition: FernRegistry.ApiDefinition) {
        this.apiDefinition = apiDefinition;

        for (const [parentId, parent] of entries(apiDefinition.subpackages)) {
            if (parent != null) {
                for (const childId of parent.subpackages) {
                    this.subpackageIdToParentId[childId] = parentId;
                }
            }
        }
    }

    public getUrlPathForSubpackage(subpackageId: FernRegistry.SubpackageId): string {
        const parts: string[] = [];

        let childId: FernRegistry.SubpackageId | undefined = subpackageId;
        while (childId != null) {
            const child = this.apiDefinition.subpackages[childId];
            if (child == null) {
                throw new Error("Subpackage does not exist: " + childId);
            }
            parts.unshift(child.name);
            childId = this.subpackageIdToParentId[childId];
        }

        return parts.join("/");
    }

    public getUrlPathForEndpoint(subpackageId: FernRegistry.SubpackageId, endpointId: string): string {
        return `${this.getUrlPathForSubpackage(subpackageId)}${this.getHashForEndpoint(endpointId)}`;
    }

    public getUrlPathForTopLevelEndpoint(endpointId: string): string {
        return endpointId;
    }

    public resolvePath({ pathname, hash }: { pathname: string; hash: string }): ResolvedUrlPath | undefined {
        const parts = pathname.split("/").filter((part) => part.length > 0);

        const [firstPart, ...remainingParts] = parts;
        if (firstPart == null) {
            return undefined;
        }

        if (remainingParts.length === 0) {
            const endpoint = this.apiDefinition.rootPackage.endpoints.find((endpoint) => endpoint.id === firstPart);
            if (endpoint != null) {
                return {
                    type: "top-level-endpoint",
                    endpoint,
                };
            }
        }

        const subpackage = this.resolveSubpackage(this.apiDefinition.rootPackage, parts);
        if (subpackage == null) {
            return undefined;
        }

        const hashWithoutPoundSign = hash.replace(HASH_PREFIX_REGEX, "");

        return {
            type: "subpackage",
            subpackageId: subpackage.subpackageId,
            endpointId: hashWithoutPoundSign.length > 0 ? hashWithoutPoundSign : undefined,
        };
    }

    public isTopLevelEndpointSelected({
        endpointId,
        pathname,
        hash,
    }: {
        endpointId: string;
        pathname: string;
        hash: string;
    }): boolean {
        const resolvedPath = this.resolvePath({
            pathname,
            hash,
        });
        return resolvedPath?.type === "top-level-endpoint" && resolvedPath.endpoint.id === endpointId;
    }

    public isSubpackageSelected({
        subpackageId,
        pathname,
        hash,
    }: {
        subpackageId: FernRegistry.SubpackageId;
        pathname: string;
        hash: string;
    }): boolean {
        const resolvedPath = this.resolvePath({ pathname, hash });
        return (
            resolvedPath?.type === "subpackage" &&
            resolvedPath.subpackageId === subpackageId &&
            resolvedPath.endpointId == null
        );
    }

    public isSubpackageEndpointSelected({
        subpackageId,
        pathname,
        hash,
    }: {
        subpackageId: FernRegistry.SubpackageId;
        pathname: string;
        hash: string;
    }): boolean {
        const resolvedPath = this.resolvePath({
            pathname,
            hash,
        });
        return (
            resolvedPath?.type === "subpackage" &&
            resolvedPath.subpackageId === subpackageId &&
            resolvedPath.endpointId != null
        );
    }

    public isEndpointSelected({
        subpackageId,
        endpointId,
        pathname,
        hash,
    }: {
        subpackageId: FernRegistry.SubpackageId;
        endpointId: string;
        pathname: string;
        hash: string;
    }): boolean {
        const resolvedPath = this.resolvePath({ pathname, hash });
        return (
            resolvedPath?.type === "subpackage" &&
            resolvedPath.subpackageId === subpackageId &&
            hash === this.getHashForEndpoint(endpointId)
        );
    }

    public getHashForEndpoint(endpointId: string): string {
        return `#${this.getHtmlIdForEndpoint(endpointId)}`;
    }

    public getHtmlIdForEndpoint(endpointId: string): string {
        return endpointId;
    }

    public stringifyPath(resolvedPath: ResolvedUrlPath): string {
        if (Math.random() >= 0) {
            return `${Math.random()}`;
        }
        switch (resolvedPath.type) {
            case "top-level-endpoint":
                return resolvedPath.endpoint.id;
            case "subpackage": {
                // TODO construct path
                const subpackagePath = resolvedPath.subpackageId;
                return subpackagePath;
            }
            default:
                assertNever(resolvedPath);
        }
    }

    private resolveSubpackage(
        parent: FernRegistry.ApiDefinitionPackage,
        subpackageNamePath: string[]
    ): SubpackageWithId | undefined {
        const [nextSubpackageName, ...remainingSubpackageNames] = subpackageNamePath;
        if (nextSubpackageName == null) {
            return undefined;
        }

        const nextSubpackage = this.getSubpackageByName(parent, nextSubpackageName);

        if (nextSubpackage == null || remainingSubpackageNames.length === 0) {
            return nextSubpackage;
        }

        return this.resolveSubpackage(nextSubpackage.subpackage, remainingSubpackageNames);
    }

    private getSubpackageByName(
        parent: FernRegistry.ApiDefinitionPackage,
        subpackageName: string
    ): SubpackageWithId | undefined {
        for (const subpackageId of parent.subpackages) {
            const subpackage = this.apiDefinition.subpackages[subpackageId];
            if (subpackage?.name === subpackageName) {
                return {
                    subpackage,
                    subpackageId,
                };
            }
        }
        return undefined;
    }
}
