import { assertNever } from "@fern-api/core-utils";
import {
    ExportedDirectory,
    ExportedFilePath,
    getDirectReferenceToExport,
    getReferenceToExportFromPackage,
    getReferenceToExportFromRoot,
    Reference
} from "@fern-typescript/commons";
import { ts } from "ts-morph";
import { DeclarationReferencer } from "./DeclarationReferencer";

export declare namespace AbstractDeclarationReferencer {
    export interface Init {
        namespaceExport: string;
        containingDirectory: ExportedDirectory[];
    }
}

export abstract class AbstractDeclarationReferencer<Name = never> implements DeclarationReferencer<Name> {
    public readonly namespaceExport: string;
    protected containingDirectory: ExportedDirectory[];

    constructor({ namespaceExport, containingDirectory }: AbstractDeclarationReferencer.Init) {
        this.namespaceExport = namespaceExport;
        this.containingDirectory = containingDirectory;
    }

    public abstract getExportedFilepath(name: Name): ExportedFilePath;
    public abstract getFilename(name: Name): string;

    protected getExportedFilepathForReference(name: Name): ExportedFilePath {
        return this.getExportedFilepath(name);
    }

    protected getReferenceTo(
        exportedName: string,
        {
            name,
            importsManager,
            referencedIn,
            subImport,
            importStrategy
        }: DeclarationReferencer.getReferenceTo.Options<Name>
    ): Reference {
        switch (importStrategy.type) {
            case "direct":
                return getDirectReferenceToExport({
                    exportedName,
                    exportedFromPath: this.getExportedFilepathForReference(name),
                    importAlias: importStrategy.alias,
                    importsManager,
                    referencedIn,
                    subImport
                });
            case "fromRoot":
                return getReferenceToExportFromRoot({
                    exportedName,
                    exportedFromPath: this.getExportedFilepathForReference(name),
                    referencedIn,
                    importsManager,
                    namespaceImport: importStrategy.namespaceImport,
                    useDynamicImport: importStrategy.useDynamicImport,
                    subImport
                });
            case "fromPackage":
                return getReferenceToExportFromPackage({
                    importsManager,
                    namespaceImport: importStrategy.namespaceImport,
                    packageName: importStrategy.packageName,
                    exportedName,
                    subImport
                });
            case "local":
                return this.getReferenceToLocalExport(exportedName);
            default:
                assertNever(importStrategy);
        }
    }

    private getReferenceToLocalExport(exportedName: string): Reference {
        const name = ts.factory.createIdentifier(exportedName);
        return {
            getTypeNode: (_opts) => {
                return ts.factory.createTypeReferenceNode(name);
            },
            getEntityName: (_opts) => {
                return name;
            },
            getExpression: (_opts) => {
                return name;
            }
        };
    }
}
