import { generatorsYml } from "@fern-api/configuration";
import { assertNever } from "@fern-api/core-utils";
import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { FernFiddle } from "@fern-fern/fiddle-sdk";
import { GithubPublishInfo, PublishOutputModeV2 } from "@fern-fern/fiddle-sdk/api";
import { OutputMode } from "../config/api";
import { ParsedDockerName } from "../utils/parseDockerOrThrow";

export function getGeneratorInvocation({
    absolutePathToOutput,
    docker,
    language,
    customConfig,
    publishConfig,
    outputMode,
    fixtureName,
    irVersion,
    publishMetadata
}: {
    absolutePathToOutput: AbsoluteFilePath;
    docker: ParsedDockerName;
    language: generatorsYml.GenerationLanguage | undefined;
    customConfig: unknown;
    publishConfig: unknown;
    outputMode: OutputMode;
    fixtureName: string;
    irVersion: string;
    publishMetadata: unknown;
}): generatorsYml.GeneratorInvocation {
    return {
        name: docker.name,
        version: docker.version,
        config: customConfig,
        outputMode: getOutputMode({ outputMode, language, fixtureName, publishConfig }),
        absolutePathToLocalOutput: absolutePathToOutput,
        absolutePathToLocalSnippets: undefined,
        language,
        smartCasing: false,
        disableExamples: false,
        irVersionOverride: irVersion,
        publishMetadata: publishMetadata != null ? (publishMetadata as FernFiddle.PublishingMetadata) : undefined
    };
}

function getOutputMode({
    outputMode,
    language,
    fixtureName,
    publishConfig
}: {
    outputMode: OutputMode;
    language: generatorsYml.GenerationLanguage | undefined;
    fixtureName: string;
    publishConfig: unknown;
}): FernFiddle.OutputMode {
    switch (outputMode) {
        case "github":
            const githubPublishInfo = publishConfig != null ? (publishConfig as GithubPublishInfo) : undefined;
            return FernFiddle.OutputMode.github({
                repo: "fern",
                owner: fixtureName,
                publishInfo:
                    githubPublishInfo ??
                    (language != null ? getGithubPublishInfo({ language, fixtureName }) : undefined)
            });
        case "local_files":
            return FernFiddle.remoteGen.OutputMode.downloadFiles({});
        case "publish": {
            if (language == null) {
                throw new Error("Seed requires a language to be specified to test in publish mode");
            }
            const publishOutputModeConfig = publishConfig != null ? (publishConfig as PublishOutputModeV2) : undefined;
            return FernFiddle.remoteGen.OutputMode.publishV2(
                publishOutputModeConfig ?? getPublishInfo({ language, fixtureName })
            );
        }
        default:
            assertNever(outputMode);
    }
}

function getGithubPublishInfo({
    language,
    fixtureName
}: {
    language: generatorsYml.GenerationLanguage;
    fixtureName: string;
}): GithubPublishInfo | undefined {
    switch (language) {
        case "java":
            return FernFiddle.GithubPublishInfo.maven({
                coordinate: `com.fern:${fixtureName}`,
                registryUrl: ""
            });
        case "python":
            return FernFiddle.GithubPublishInfo.pypi({
                packageName: `fern_${fixtureName}`,
                registryUrl: ""
            });
        case "typescript":
            return FernFiddle.GithubPublishInfo.npm({
                packageName: `@fern/${fixtureName}`,
                registryUrl: ""
            });
        case "go":
            return undefined;
        case "ruby":
            return FernFiddle.GithubPublishInfo.rubygems({
                packageName: `fern_${fixtureName}`,
                registryUrl: ""
            });
        case "csharp":
            return undefined;
        default:
            assertNever(language);
    }
}

function getPublishInfo({
    language,
    fixtureName
}: {
    language: generatorsYml.GenerationLanguage;
    fixtureName: string;
}): PublishOutputModeV2 {
    switch (language) {
        case "java":
            return FernFiddle.remoteGen.PublishOutputModeV2.mavenOverride({
                username: "fern",
                password: "fern1!",
                registryUrl: "https://maven.com",
                coordinate: `com.fern:${fixtureName}`
            });
        case "python":
            return FernFiddle.remoteGen.PublishOutputModeV2.pypiOverride({
                username: "fern",
                password: "fern1!",
                registryUrl: "https://pypi.com",
                coordinate: `fern-${fixtureName}`
            });
        case "typescript":
            return FernFiddle.remoteGen.PublishOutputModeV2.npmOverride({
                token: "fern1!",
                registryUrl: "https://maven.com",
                packageName: `@fern/${fixtureName}`
            });
        case "go":
            throw new Error("Seed doesn't support publish mode in Go!");
        case "ruby":
            throw new Error("Seed doesn't support publish mode in Ruby!");
        case "csharp":
            throw new Error("Seed doesn't support publish mode in Ruby!");
        default:
            assertNever(language);
    }
}
