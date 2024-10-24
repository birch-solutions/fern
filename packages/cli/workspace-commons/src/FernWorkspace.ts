import { dependenciesYml } from "@fern-api/configuration";
import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { AbstractAPIWorkspace, FernDefinition } from "./AbstractAPIWorkspace";

export declare namespace FernWorkspace {
    export interface Args extends AbstractAPIWorkspace.Args {
        dependenciesConfiguration: dependenciesYml.DependenciesConfiguration;
        definition: FernDefinition;
        sources?: IdentifiableSource[];
    }
}

export interface IdentifiableSource {
    type: "asyncapi" | "openapi" | "protobuf";
    id: string;
    absoluteFilePath: AbsoluteFilePath;
}

export class FernWorkspace extends AbstractAPIWorkspace<void> {
    public definition: FernDefinition;
    public sources: IdentifiableSource[];

    constructor({ definition, sources, ...superArgs }: FernWorkspace.Args) {
        super(superArgs);
        this.definition = definition;
        this.sources = sources ?? [];
    }

    public async getDefinition(): Promise<FernDefinition> {
        return this.definition;
    }

    public async toFernWorkspace(): Promise<FernWorkspace> {
        return this;
    }

    public getSources(): IdentifiableSource[] {
        return this.sources;
    }

    public getAbsoluteFilePaths(): AbsoluteFilePath[] {
        return [this.absoluteFilePath];
    }
}
