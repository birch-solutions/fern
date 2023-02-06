import { RelativeFilePath } from "@fern-api/fs-utils";
import { Logger } from "@fern-api/logger";
import { FernWorkspace } from "@fern-api/workspace-loader";
import { FernRootApiFileAstNodeTypes, FernServiceFileAstNodeTypes, ServiceFileSchema } from "@fern-api/yaml-schema";

export interface Rule {
    name: string;
    DISABLE_RULE?: boolean;
    create: (context: RuleContext) => MaybePromise<RuleVisitors>;
}

export interface RuleContext {
    workspace: FernWorkspace;
    logger: Logger;
}

export interface RuleVisitors {
    rootApiFile?: RuleVisitor<FernRootApiFileAstNodeTypes>;
    serviceFile?: RuleVisitor<FernServiceFileAstNodeTypes>;
}

export type RuleVisitor<AstNodeTypes> = {
    [K in keyof AstNodeTypes]?: (node: AstNodeTypes[K], args: RuleRunnerArgs) => MaybePromise<RuleViolation[]>;
};

export interface RuleRunnerArgs {
    relativeFilepath: RelativeFilePath;
    contents: ServiceFileSchema;
}
export interface RuleViolation {
    severity: "warning" | "error";
    message: string;
}

export type MaybePromise<T> = T | Promise<T>;
