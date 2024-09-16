import { AbsoluteFilePath, RelativeFilePath } from "@fern-api/fs-utils";
import { FernFilepath } from "@fern-fern/ir-sdk/api";
import path from "path";
import { BasePhpCustomConfigSchema } from "../custom-config/BasePhpCustomConfigSchema";
import { File } from "@fern-api/generator-commons";
import { Class } from "../ast/Class";

export type Namespace = string;

export declare namespace PhpFile {
    interface Args {
        /* The class to be written to the PHP File */
        clazz: Class;
        /* Directory of the filepath */
        directory: RelativeFilePath;
        /* The root namespace of the project. Can be pulled directly from context. */
        rootNamespace: string;
        /* Custom generator config */
        customConfig: BasePhpCustomConfigSchema;
    }
}

export class PhpFile extends File {
    constructor({ clazz, directory, rootNamespace, customConfig }: PhpFile.Args) {
        super(
            `${clazz.name}.php`,
            directory,
            phpFileContent({
                clazz,
                rootNamespace,
                customConfig
            })
        );
    }

    public async tryWrite(directoryPrefix: AbsoluteFilePath): Promise<void> {
        await this.write(directoryPrefix);
    }

    public static getFilePathFromFernFilePath(fernFilePath: FernFilepath): RelativeFilePath {
        return RelativeFilePath.of(path.join(...fernFilePath.allParts.map((part) => part.pascalCase.safeName)));
    }
}

function phpFileContent({
    clazz,
    rootNamespace,
    customConfig
}: {
    clazz: Class;
    rootNamespace: string;
    customConfig: BasePhpCustomConfigSchema;
}): string {
    return (
        "<?php\n\n" +
        clazz.toString({
            namespace: clazz.namespace,
            rootNamespace,
            customConfig
        })
    );
}
