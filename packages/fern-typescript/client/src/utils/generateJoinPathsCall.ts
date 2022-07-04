import { DependencyManager } from "@fern-typescript/commons";
import { SourceFile, ts } from "ts-morph";

const DEFAULT_IMPORT = "urlJoin";

export function generateJoinUrlPathsCall({
    file,
    dependencyManager,
    paths,
}: {
    file: SourceFile;
    dependencyManager: DependencyManager;
    paths: ts.Expression[];
}): ts.Expression {
    file.addImportDeclaration({
        defaultImport: DEFAULT_IMPORT,
        moduleSpecifier: "url-join",
    });
    dependencyManager.addDependency("url-join", "5.0.0");
    return ts.factory.createCallExpression(ts.factory.createIdentifier(DEFAULT_IMPORT), undefined, paths);
}
