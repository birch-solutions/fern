import { assertNever } from "@fern-api/core-utils";
import {
    ExportedDirectory,
    ExportedFilePath,
    getDirectReferenceToExport,
    getReferenceToExportFromPackage,
    getReferenceToExportFromRoot,
    Reference
} from "@fern-typescript/commons";
import { DeclarationReferencer } from "./DeclarationReferencer";

export declare namespace AbstractDeclarationReferencer {
    export interface Init {
        namespaceExport: string;
        containingDirectory: ExportedDirectory[];
        isOutputtingEsm: boolean;
    }
}

export abstract class AbstractDeclarationReferencer<Name = never> implements DeclarationReferencer<Name> {
    public readonly namespaceExport: string;
    protected containingDirectory: ExportedDirectory[];
    protected isOutputtingEsm: boolean;

    constructor({ namespaceExport, containingDirectory, isOutputtingEsm }: AbstractDeclarationReferencer.Init) {
        this.namespaceExport = namespaceExport;
        this.containingDirectory = containingDirectory;
        this.isOutputtingEsm = isOutputtingEsm;
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
                    isOutputtingEsm: this.isOutputtingEsm,
                    referencedIn,
                    subImport
                });
            case "fromRoot":
                return getReferenceToExportFromRoot({
                    exportedName,
                    exportedFromPath: this.getExportedFilepathForReference(name),
                    referencedIn,
                    importsManager,
                    isOutputtingEsm: this.isOutputtingEsm,
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
            default:
                assertNever(importStrategy);
        }
    }
}
