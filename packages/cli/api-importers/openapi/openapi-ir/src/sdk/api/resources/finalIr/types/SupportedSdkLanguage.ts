/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SupportedSdkLanguage =
    | "curl"
    | "python"
    | "javascript"
    | "typescript"
    | "go"
    | "ruby"
    | "csharp"
    | "java"
    | "js"
    | "node"
    | "ts"
    | "nodets"
    | "golang"
    | "dotnet"
    | "jvm";
export const SupportedSdkLanguage = {
    Curl: "curl",
    Python: "python",
    Javascript: "javascript",
    Typescript: "typescript",
    Go: "go",
    Ruby: "ruby",
    Csharp: "csharp",
    Java: "java",
    Js: "js",
    Node: "node",
    Ts: "ts",
    Nodets: "nodets",
    Golang: "golang",
    Dotnet: "dotnet",
    Jvm: "jvm",
    _visit: <R>(value: SupportedSdkLanguage, visitor: SupportedSdkLanguage.Visitor<R>) => {
        switch (value) {
            case SupportedSdkLanguage.Curl:
                return visitor.curl();
            case SupportedSdkLanguage.Python:
                return visitor.python();
            case SupportedSdkLanguage.Javascript:
                return visitor.javascript();
            case SupportedSdkLanguage.Typescript:
                return visitor.typescript();
            case SupportedSdkLanguage.Go:
                return visitor.go();
            case SupportedSdkLanguage.Ruby:
                return visitor.ruby();
            case SupportedSdkLanguage.Csharp:
                return visitor.csharp();
            case SupportedSdkLanguage.Java:
                return visitor.java();
            case SupportedSdkLanguage.Js:
                return visitor.js();
            case SupportedSdkLanguage.Node:
                return visitor.node();
            case SupportedSdkLanguage.Ts:
                return visitor.ts();
            case SupportedSdkLanguage.Nodets:
                return visitor.nodets();
            case SupportedSdkLanguage.Golang:
                return visitor.golang();
            case SupportedSdkLanguage.Dotnet:
                return visitor.dotnet();
            case SupportedSdkLanguage.Jvm:
                return visitor.jvm();
            default:
                return visitor._other();
        }
    },
} as const;

export namespace SupportedSdkLanguage {
    export interface Visitor<R> {
        curl: () => R;
        python: () => R;
        javascript: () => R;
        typescript: () => R;
        go: () => R;
        ruby: () => R;
        csharp: () => R;
        java: () => R;
        js: () => R;
        node: () => R;
        ts: () => R;
        nodets: () => R;
        golang: () => R;
        dotnet: () => R;
        jvm: () => R;
        _other: () => R;
    }
}
