/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ProgrammingLanguage: core.serialization.Schema<
    serializers.ProgrammingLanguage.Raw,
    FernDocsConfig.ProgrammingLanguage
> = core.serialization.enum_([
    "typescript",
    "javascript",
    "python",
    "java",
    "go",
    "ruby",
    "csharp",
    "nodets",
    "nodejs",
    "dotnet",
    "curl",
    "jvm",
    "ts",
    "js",
]);

export declare namespace ProgrammingLanguage {
    type Raw =
        | "typescript"
        | "javascript"
        | "python"
        | "java"
        | "go"
        | "ruby"
        | "csharp"
        | "nodets"
        | "nodejs"
        | "dotnet"
        | "curl"
        | "jvm"
        | "ts"
        | "js";
}
