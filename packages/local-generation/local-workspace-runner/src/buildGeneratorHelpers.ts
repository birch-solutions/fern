import { GeneratorHelper, GeneratorInvocation } from "@fern-api/commons";
import { GeneratorHelpers } from "@fern-fern/ir-model/generators";
import { CustomWireMessageEncoding } from "@fern-fern/ir-model/services";
import { getDownloadPathForHelper } from "./downloadHelper";

export declare namespace buildGeneratorHelpers {
    export interface Args {
        generatorInvocation: GeneratorInvocation;
        nonStandardEncodings: CustomWireMessageEncoding[];
        absolutePathToWorkspaceTempDir: string;
    }
}

export function buildGeneratorHelpers({
    generatorInvocation,
    nonStandardEncodings,
    absolutePathToWorkspaceTempDir,
}: buildGeneratorHelpers.Args): GeneratorHelpers {
    const helpers: GeneratorHelpers = { encodings: {} };

    if (nonStandardEncodings.length > 0) {
        const uniqueNonStandardEncodings = nonStandardEncodings.reduce((unique, { encoding }) => {
            unique.add(encoding);
            return unique;
        }, new Set<string>());

        uniqueNonStandardEncodings.forEach((encoding) => {
            const helperForEncoding = getHelperForEncoding({ encoding, generatorInvocation });
            helpers.encodings[encoding] = {
                name: helperForEncoding.name,
                version: helperForEncoding.version,
                absolutePath: getDownloadPathForHelper({
                    helper: helperForEncoding,
                    absolutePathToWorkspaceTempDir,
                }),
            };
        });
    }

    return helpers;
}

function getHelperForEncoding({
    encoding,
    generatorInvocation,
}: {
    encoding: string;
    generatorInvocation: GeneratorInvocation;
}): GeneratorHelper {
    const [helper, ...rest] = generatorInvocation.helpers.filter((helper) =>
        doesHelperHandleEncoding(helper, encoding)
    );
    if (helper == null) {
        throw new Error("No helpers handle the encoding: " + encoding);
    }
    if (rest.length > 0) {
        throw new Error("Multiple helpers handle the encoding: " + encoding);
    }
    return helper;
}

const doesHelperHandleEncoding: (helper: GeneratorHelper, encoding: string) => boolean = () => {
    // TODO check manifest
    return false;
};
