import { AbstractCsharpGeneratorContext, AsIsFiles } from "@fern-api/csharp-codegen";
import { RelativeFilePath } from "@fern-api/fs-utils";
import { FernFilepath, SubpackageId, TypeId } from "@fern-fern/ir-sdk/api";
import { SdkCustomConfigSchema } from "./SdkCustomConfig";

const TYPES_FOLDER_NAME = "Types";

export class SdkGeneratorContext extends AbstractCsharpGeneratorContext<SdkCustomConfigSchema> {
    /**
     * __package__.yml types are stored in a Types directory (e.g. /src/Types)
     * __{{file}}__.yml types are stored in a directory with the same name as the file
     * (e.g. /src/{{file}}/Types)
     *
     * @param typeId The type id of the type declaration
     * @returns
     */
    public getDirectoryForTypeId(typeId: TypeId): RelativeFilePath {
        const typeDeclaration = this.ir.types[typeId];
        if (typeDeclaration == null) {
            throw new Error(`Type declaration with id ${typeId} not found`);
        }
        return RelativeFilePath.of(
            [
                ...typeDeclaration.name.fernFilepath.allParts.map((path) => path.pascalCase.safeName),
                TYPES_FOLDER_NAME
            ].join("/")
        );
    }

    public getNamespaceForTypeId(typeId: TypeId): string {
        const typeDeclaration = this.ir.types[typeId];
        if (typeDeclaration == null) {
            throw new Error(`Type declaration with id ${typeId} not found`);
        }
        return this.getNamespaceFromFernFilepath(typeDeclaration.name.fernFilepath);
    }

    public getAsIsFiles(): string[] {
        return [AsIsFiles.StringEnum, AsIsFiles.OneOfJsonConverter];
    }

    public getNamespaceForSubpackageId(subpackageId: SubpackageId): string {
        const subpackage = this.ir.services[subpackageId];
        if (subpackage == null) {
            throw new Error(`Subpackage with id ${subpackageId} not found`);
        }
        return this.getNamespaceFromFernFilepath(subpackage.name.fernFilepath);
    }

    public getDirectoryForSubpackageId(subpackageId: SubpackageId): string {
        const subpackage = this.ir.services[subpackageId];
        if (subpackage == null) {
            throw new Error(`Subpackage with id ${subpackageId} not found`);
        }
        return RelativeFilePath.of(
            [...subpackage.name.fernFilepath.allParts.map((path) => path.pascalCase.safeName)].join("/")
        );
    }

    private getNamespaceFromFernFilepath(fernFilepath: FernFilepath): string {
        return [this.getNamespace(), ...fernFilepath.packagePath.map((path) => path.pascalCase.safeName)].join(".");
    }
}
