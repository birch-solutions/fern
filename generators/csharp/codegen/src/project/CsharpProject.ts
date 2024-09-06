import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { SourceFetcher } from "@fern-api/generator-commons";
import { loggingExeca } from "@fern-api/logging-execa";
import { mkdir, readFile, writeFile } from "fs/promises";
import { template } from "lodash-es";
import path from "path";
import { AsIsFiles } from "../AsIs";
import { AbstractCsharpGeneratorContext } from "../cli";
import { BaseCsharpCustomConfigSchema } from "../custom-config";
import { CSharpFile } from "./CSharpFile";
import { File } from "./File";

const SRC_DIRECTORY_NAME = "src";
const PROTOBUF_DIRECTORY_NAME = "proto";
const AS_IS_DIRECTORY = path.join(__dirname, "asIs");

export const CORE_DIRECTORY_NAME = "Core";
export const TEST_UTILS_DIRECTORY_NAME = "Utils";
export const PUBLIC_CORE_DIRECTORY_NAME = "Public";
/**
 * In memory representation of a C# project.
 */
export class CsharpProject {
    private rawFiles: File[] = [];
    private sourceFiles: CSharpFile[] = [];
    private testFiles: CSharpFile[] = [];
    private coreFiles: File[] = [];
    private coreTestFiles: File[] = [];
    private publicCoreFiles: File[] = [];
    private publicCoreTestFiles: File[] = [];
    private testUtilFiles: File[] = [];
    private absolutePathToOutputDirectory: AbsoluteFilePath;
    private sourceFetcher: SourceFetcher;
    public readonly filepaths: CsharpProjectFilepaths;

    public constructor(
        private readonly context: AbstractCsharpGeneratorContext<BaseCsharpCustomConfigSchema>,
        private readonly name: string
    ) {
        this.absolutePathToOutputDirectory = AbsoluteFilePath.of(this.context.config.output.path);
        this.filepaths = new CsharpProjectFilepaths(name);
        this.sourceFetcher = new SourceFetcher({
            context: this.context,
            sourceConfig: this.context.ir.sourceConfig
        });
    }

    public getProjectDirectory(): RelativeFilePath {
        return this.filepaths.getProjectDirectory();
    }

    public addRawFiles(file: File): void {
        this.rawFiles.push(file);
    }

    public addCoreFiles(file: File): void {
        this.coreFiles.push(file);
    }

    public addCoreTestFiles(file: File): void {
        this.coreTestFiles.push(file);
    }

    public addPublicCoreFiles(file: File): void {
        this.publicCoreFiles.push(file);
    }

    public addPublicCoreTestFiles(file: File): void {
        this.publicCoreTestFiles.push(file);
    }

    public addSourceFiles(file: CSharpFile): void {
        this.sourceFiles.push(file);
    }

    public addTestFiles(file: CSharpFile): void {
        this.testFiles.push(file);
    }

    public async persist(): Promise<void> {
        const absolutePathToSrcDirectory = join(
            this.absolutePathToOutputDirectory,
            this.filepaths.getSourceFileDirectory()
        );
        this.context.logger.debug(`mkdir ${absolutePathToSrcDirectory}`);
        await mkdir(absolutePathToSrcDirectory, { recursive: true });

        const absolutePathToProjectDirectory = await this.createProject({ absolutePathToSrcDirectory });
        const absolutePathToTestProjectDirectory = await this.createTestProject({ absolutePathToSrcDirectory });

        await loggingExeca(this.context.logger, "dotnet", ["new", "gitignore"], {
            doNotPipeOutput: true,
            cwd: this.absolutePathToOutputDirectory
        });

        for (const file of this.rawFiles) {
            await file.write(this.absolutePathToOutputDirectory);
        }

        for (const file of this.sourceFiles) {
            await file.write(absolutePathToProjectDirectory);
        }

        for (const file of this.testFiles) {
            await file.write(absolutePathToTestProjectDirectory);
        }

        for (const filename of this.context.getCoreAsIsFiles()) {
            this.coreFiles.push(
                await this.createAsIsFile({
                    filename,
                    namespace: this.context.getCoreNamespace()
                })
            );
        }

        for (const filename of this.context.getCoreTestAsIsFiles()) {
            this.coreTestFiles.push(
                await this.createAsIsFile({
                    filename,
                    namespace: this.context.getNamespace()
                })
            );
        }

        for (const filename of this.context.getPublicCoreAsIsFiles()) {
            this.publicCoreFiles.push(
                await this.createAsIsFile({
                    filename,
                    namespace: this.context.getNamespace()
                })
            );
        }

        for (const filename of this.context.getPublicCoreTestAsIsFiles()) {
            this.publicCoreTestFiles.push(
                await this.createAsIsFile({
                    filename,
                    namespace: this.context.getNamespace()
                })
            );
        }

        for (const file of this.context.getAsIsTestUtils()) {
            this.testUtilFiles.push(await this.createTestUtilsAsIsFile(file));
        }

        const githubWorkflowTemplate = (await readFile(getAsIsFilepath(AsIsFiles.CiYaml))).toString();
        const githubWorkflow = template(githubWorkflowTemplate)({
            projectName: this.name,
            shouldWritePublishBlock: this.context.publishConfig != null,
            nugetTokenEnvvar:
                this.context.publishConfig?.apiKeyEnvironmentVariable == null ||
                this.context.publishConfig?.apiKeyEnvironmentVariable === ""
                    ? "NUGET_API_TOKEN"
                    : this.context.publishConfig.apiKeyEnvironmentVariable
        }).replaceAll("\\{", "{");
        const ghDir = join(this.absolutePathToOutputDirectory, RelativeFilePath.of(".github/workflows"));
        await mkdir(ghDir, { recursive: true });
        await writeFile(join(ghDir, RelativeFilePath.of("ci.yml")), githubWorkflow);

        await this.createCoreDirectory({ absolutePathToProjectDirectory });
        await this.createCoreTestDirectory({ absolutePathToTestProjectDirectory });
        await this.createPublicCoreDirectory({ absolutePathToProjectDirectory });

        await loggingExeca(this.context.logger, "dotnet", ["csharpier", "."], {
            doNotPipeOutput: true,
            cwd: absolutePathToSrcDirectory,
            env: {
                DOTNET_CLI_TELEMETRY_OPTOUT: "1"
            }
        });
    }

    private async createProject({
        absolutePathToSrcDirectory
    }: {
        absolutePathToSrcDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        await loggingExeca(this.context.logger, "dotnet", ["new", "sln", "-n", this.name], {
            doNotPipeOutput: true,
            cwd: absolutePathToSrcDirectory
        });

        const absolutePathToProjectDirectory = join(absolutePathToSrcDirectory, RelativeFilePath.of(this.name));
        this.context.logger.debug(`mkdir ${absolutePathToProjectDirectory}`);
        await mkdir(absolutePathToProjectDirectory, { recursive: true });

        const absolutePathToProtoDirectory = join(
            this.absolutePathToOutputDirectory,
            RelativeFilePath.of(PROTOBUF_DIRECTORY_NAME)
        );
        const protobufSourceFilePaths = await this.sourceFetcher.copyProtobufSources(absolutePathToProtoDirectory);

        const csproj = new CsProj({
            version: this.context.getVersion(),
            license: this.context.config.license?._visit({
                custom: (val) => {
                    return val.filename;
                },
                basic: (val) => {
                    return val.id;
                },
                _other: () => undefined
            }),
            githubUrl: this.context.config.output?.mode._visit({
                downloadFiles: () => undefined,
                github: (github) => github.repoUrl,
                publish: () => undefined,
                _other: () => undefined
            }),
            context: this.context,
            protobufSourceFilePaths
        });
        const templateCsProjContents = csproj.toString();
        await writeFile(
            join(absolutePathToProjectDirectory, RelativeFilePath.of(`${this.name}.csproj`)),
            templateCsProjContents
        );
        await loggingExeca(this.context.logger, "dotnet", ["sln", "add", `${this.name}/${this.name}.csproj`], {
            doNotPipeOutput: true,
            cwd: absolutePathToSrcDirectory
        });

        return absolutePathToProjectDirectory;
    }

    private async createTestProject({
        absolutePathToSrcDirectory
    }: {
        absolutePathToSrcDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const testProjectName = this.filepaths.getTestProjectName();
        const absolutePathToTestProject = join(
            this.absolutePathToOutputDirectory,
            this.filepaths.getTestFilesDirectory()
        );
        this.context.logger.debug(`mkdir ${absolutePathToTestProject}`);
        await mkdir(absolutePathToTestProject, { recursive: true });

        const testCsProjTemplateContents = (await readFile(getAsIsFilepath(AsIsFiles.TemplateTestCsProj))).toString();
        const testCsProjContents = template(testCsProjTemplateContents)({
            projectName: this.name
        });
        await writeFile(
            join(absolutePathToTestProject, RelativeFilePath.of(`${testProjectName}.csproj`)),
            testCsProjContents
        );
        await loggingExeca(
            this.context.logger,
            "dotnet",
            ["sln", "add", `${testProjectName}/${testProjectName}.csproj`],
            {
                doNotPipeOutput: true,
                cwd: absolutePathToSrcDirectory
            }
        );

        return absolutePathToTestProject;
    }

    private async createCoreDirectory({
        absolutePathToProjectDirectory
    }: {
        absolutePathToProjectDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const absolutePathToCoreDirectory = join(
            absolutePathToProjectDirectory,
            RelativeFilePath.of(CORE_DIRECTORY_NAME)
        );
        this.context.logger.debug(`mkdir ${absolutePathToCoreDirectory}`);
        await mkdir(absolutePathToCoreDirectory, { recursive: true });

        for (const file of this.coreFiles) {
            await file.write(absolutePathToCoreDirectory);
        }

        return absolutePathToCoreDirectory;
    }

    private async createCoreTestDirectory({
        absolutePathToTestProjectDirectory
    }: {
        absolutePathToTestProjectDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const absolutePathToCoreTestDirectory = join(
            absolutePathToTestProjectDirectory,
            RelativeFilePath.of(CORE_DIRECTORY_NAME)
        );
        this.context.logger.debug(`mkdir ${absolutePathToCoreTestDirectory}`);
        await mkdir(absolutePathToCoreTestDirectory, { recursive: true });

        for (const file of this.coreTestFiles) {
            await file.write(absolutePathToCoreTestDirectory);
        }

        return absolutePathToCoreTestDirectory;
    }

    /*
     * Unused until we start generating tests for the public core files.
     */
    private async createPublicCoreTestDirectory({
        absolutePathToTestProjectDirectory
    }: {
        absolutePathToTestProjectDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const absolutePathToPublicCoreTestDirectory = join(
            absolutePathToTestProjectDirectory,
            RelativeFilePath.of(CORE_DIRECTORY_NAME),
            RelativeFilePath.of(PUBLIC_CORE_DIRECTORY_NAME)
        );
        this.context.logger.debug(`mkdir ${absolutePathToPublicCoreTestDirectory}`);
        await mkdir(absolutePathToPublicCoreTestDirectory, { recursive: true });

        for (const file of this.publicCoreTestFiles) {
            await file.write(absolutePathToPublicCoreTestDirectory);
        }

        return absolutePathToPublicCoreTestDirectory;
    }

    /*
     * Unused after removing unneccessary utils file.
     */
    private async createTestUtilsDirectory({
        absolutePathToTestProjectDirectory
    }: {
        absolutePathToTestProjectDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const absolutePathToTestUtilsDirectory = join(
            absolutePathToTestProjectDirectory,
            RelativeFilePath.of(TEST_UTILS_DIRECTORY_NAME)
        );
        this.context.logger.debug(`mkdir ${absolutePathToTestUtilsDirectory}`);
        await mkdir(absolutePathToTestUtilsDirectory, { recursive: true });

        for (const file of this.testUtilFiles) {
            await file.write(absolutePathToTestUtilsDirectory);
        }

        return absolutePathToTestUtilsDirectory;
    }

    private async createPublicCoreDirectory({
        absolutePathToProjectDirectory
    }: {
        absolutePathToProjectDirectory: AbsoluteFilePath;
    }): Promise<AbsoluteFilePath> {
        const absolutePathToPublicCoreDirectory = join(
            absolutePathToProjectDirectory,
            RelativeFilePath.of(CORE_DIRECTORY_NAME),
            RelativeFilePath.of(PUBLIC_CORE_DIRECTORY_NAME)
        );
        this.context.logger.debug(`mkdir ${absolutePathToPublicCoreDirectory}`);
        await mkdir(absolutePathToPublicCoreDirectory, { recursive: true });

        for (const file of this.publicCoreFiles) {
            await file.write(absolutePathToPublicCoreDirectory);
        }

        return absolutePathToPublicCoreDirectory;
    }

    private async createAsIsFile({ filename, namespace }: { filename: string; namespace: string }): Promise<File> {
        const contents = (await readFile(getAsIsFilepath(filename))).toString();
        return new File(
            filename.replace(".Template", ""),
            RelativeFilePath.of(""),
            replaceTemplate({
                contents,
                grpc: this.context.hasGrpcEndpoints(),
                namespace
            })
        );
    }

    private async createTestUtilsAsIsFile(filename: string): Promise<File> {
        const contents = (await readFile(getAsIsFilepath(filename))).toString();
        return new File(
            filename.replace(".Template", ""),
            RelativeFilePath.of(""),
            replaceTemplate({
                contents,
                grpc: this.context.hasGrpcEndpoints(),
                namespace: this.context.getTestUtilsNamespace()
            })
        );
    }
}

function replaceTemplate({
    contents,
    grpc,
    namespace
}: {
    contents: string;
    grpc: boolean;
    namespace: string;
}): string {
    return template(contents)({
        grpc,
        namespace
    });
}

function getAsIsFilepath(filename: string): string {
    return AbsoluteFilePath.of(path.join(AS_IS_DIRECTORY, filename));
}

class CsharpProjectFilepaths {
    constructor(private readonly name: string) {}

    public getProjectDirectory(): RelativeFilePath {
        return join(this.getSourceFileDirectory(), RelativeFilePath.of(this.name));
    }

    public getSourceFileDirectory(): RelativeFilePath {
        return RelativeFilePath.of(SRC_DIRECTORY_NAME);
    }

    public getCoreFilesDirectory(): RelativeFilePath {
        return join(this.getProjectDirectory(), RelativeFilePath.of(CORE_DIRECTORY_NAME));
    }

    public getPublicCoreFilesDirectory(): RelativeFilePath {
        return join(
            this.getProjectDirectory(),
            RelativeFilePath.of(CORE_DIRECTORY_NAME),
            RelativeFilePath.of(PUBLIC_CORE_DIRECTORY_NAME)
        );
    }

    public getTestFilesDirectory(): RelativeFilePath {
        return join(this.getSourceFileDirectory(), RelativeFilePath.of(this.getTestProjectName()));
    }

    public getTestProjectName(): string {
        return `${this.name}.Test`;
    }
}

declare namespace CsProj {
    interface Args {
        version?: string;
        license?: string;
        githubUrl?: string;
        context: AbstractCsharpGeneratorContext<BaseCsharpCustomConfigSchema>;
        protobufSourceFilePaths: RelativeFilePath[];
    }
}

const FOUR_SPACES = "    ";

class CsProj {
    private version: string | undefined;
    private license: string | undefined;
    private githubUrl: string | undefined;
    private packageId: string | undefined;
    private context: AbstractCsharpGeneratorContext<BaseCsharpCustomConfigSchema>;
    private protobufSourceFilePaths: RelativeFilePath[];

    public constructor({ version, license, githubUrl, context, protobufSourceFilePaths }: CsProj.Args) {
        this.version = version;
        this.license = license;
        this.githubUrl = githubUrl;
        this.context = context;
        this.protobufSourceFilePaths = protobufSourceFilePaths;
        this.packageId = this.context.customConfig["package-id"];
    }

    public toString(): string {
        const projectGroup = this.getProjectGroup();
        const dependencies = this.getDependencies();
        return ` 
<Project Sdk="Microsoft.NET.Sdk">

${projectGroup.join("\n")}

    <PropertyGroup Condition="'$(TargetFramework)' == 'net6.0' Or '$(TargetFramework)' == 'net462' Or '$(TargetFramework)' == 'netstandard2.0'">
        <PolySharpIncludeRuntimeSupportedAttributes>true</PolySharpIncludeRuntimeSupportedAttributes>
    </PropertyGroup>
    
    <ItemGroup Condition="'$(TargetFramework)' == 'net462' Or '$(TargetFramework)' == 'netstandard2.0'">
        <PackageReference Include="Portable.System.DateTimeOnly" Version="8.0.1" />
    </ItemGroup>
    
    <ItemGroup Condition="'$(TargetFramework)' == 'net462'">
        <Reference Include="System.Net.Http" />
    </ItemGroup>
    
    <ItemGroup Condition="'$(TargetFramework)' == 'net7.0' Or '$(TargetFramework)' == 'net6.0' Or '$(TargetFramework)' == 'net462' Or '$(TargetFramework)' == 'netstandard2.0'">
        <PackageReference Include="PolySharp" Version="1.14.1">
            <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
            <PrivateAssets>all</PrivateAssets>
        </PackageReference>
    </ItemGroup>

    <ItemGroup>
        ${dependencies.join(`\n${FOUR_SPACES}${FOUR_SPACES}`)}
    </ItemGroup>
${this.getProtobufDependencies(this.protobufSourceFilePaths).join(`\n${FOUR_SPACES}`)}
    <ItemGroup>
        <None Include="..\\..\\README.md" Pack="true" PackagePath=""/>
    </ItemGroup>
${this.getAdditionalItemGroups().join(`\n${FOUR_SPACES}`)}
    <ItemGroup>
        <AssemblyAttribute Include="System.Runtime.CompilerServices.InternalsVisibleTo">
            <_Parameter1>${this.context.project.filepaths.getTestProjectName()}</_Parameter1>
        </AssemblyAttribute>
    </ItemGroup>

</Project>
`;
    }

    private getDependencies(): string[] {
        const result: string[] = [];
        result.push('<PackageReference Include="OneOf" Version="3.0.263" />');
        result.push('<PackageReference Include="OneOf.Extended" Version="3.0.263" />');
        result.push('<PackageReference Include="System.Text.Json" Version="8.0.4" />');
        for (const [name, version] of Object.entries(this.context.getExtraDependencies())) {
            result.push(`<PackageReference Include="${name}" Version="${version}" />`);
        }
        return result;
    }

    private getProtobufDependencies(protobufSourceFilePaths: RelativeFilePath[]): string[] {
        if (protobufSourceFilePaths.length === 0) {
            return [];
        }

        const pathToProtobufDirectory = `..\\..\\${PROTOBUF_DIRECTORY_NAME}`;

        const result: string[] = [];

        result.push("");
        result.push("<ItemGroup>");
        result.push('    <PackageReference Include="Google.Protobuf" Version="3.27.2" />');
        result.push('    <PackageReference Include="Grpc.Net.Client" Version="2.63.0" />');
        result.push('    <PackageReference Include="Grpc.Net.ClientFactory" Version="2.63.0" />');
        result.push('    <PackageReference Include="Grpc.Tools" Version="2.64.0">');
        result.push(
            "        <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>"
        );
        result.push("        <PrivateAssets>all</PrivateAssets>");
        result.push("    </PackageReference>");
        result.push("</ItemGroup>\n");

        result.push("<ItemGroup>");
        for (const protobufSourceFilePath of protobufSourceFilePaths) {
            const protobufSourceWindowsPath = this.relativePathToWindowsPath(protobufSourceFilePath);
            result.push(
                `    <Protobuf Include="${pathToProtobufDirectory}\\${protobufSourceWindowsPath}" GrpcServices="Client" ProtoRoot="${pathToProtobufDirectory}">`
            );
            result.push("    </Protobuf>");
        }
        result.push("</ItemGroup>\n");

        return result;
    }

    private getProjectGroup(): string[] {
        const result: string[] = [];

        result.push(`${FOUR_SPACES}<PropertyGroup>`);
        if (this.packageId != null) {
            result.push(`${FOUR_SPACES}${FOUR_SPACES}<PackageId>${this.packageId}</PackageId>`);
        }
        result.push(
            `${FOUR_SPACES}${FOUR_SPACES}<TargetFrameworks>net462;net8.0;net7.0;net6.0;netstandard2.0</TargetFrameworks>`
        );
        result.push(`${FOUR_SPACES}${FOUR_SPACES}<ImplicitUsings>enable</ImplicitUsings>`);
        result.push(`${FOUR_SPACES}${FOUR_SPACES}<NuGetAudit>false</NuGetAudit>`);
        result.push(`${FOUR_SPACES}${FOUR_SPACES}<LangVersion>12</LangVersion>`);
        result.push(`${FOUR_SPACES}${FOUR_SPACES}<Nullable>enable</Nullable>`);

        const propertyGroups = this.getPropertyGroups();
        for (const propertyGroup of propertyGroups) {
            result.push(`${FOUR_SPACES}${FOUR_SPACES}${propertyGroup}`);
        }
        result.push(`${FOUR_SPACES}</PropertyGroup>`);

        return result;
    }

    private getPropertyGroups(): string[] {
        const result: string[] = [];
        if (this.version != null) {
            result.push(`<Version>${this.version}</Version>`);
        }

        result.push("<PackageReadmeFile>README.md</PackageReadmeFile>");

        if (this.license != null) {
            result.push(`<PackageLicenseFile>${this.license}</PackageLicenseFile>`);
        }

        if (this.githubUrl != null) {
            result.push(`<PackageProjectUrl>${this.githubUrl}</PackageProjectUrl>`);
        }
        return result;
    }

    private getAdditionalItemGroups(): string[] {
        const result: string[] = [];

        if (this.license != null) {
            result.push(`
<ItemGroup>
    <None Include="..\\..\\${this.license}" Pack="true" PackagePath=""/>
</ItemGroup>
`);
        }

        return result;
    }

    private relativePathToWindowsPath(relativePath: RelativeFilePath): RelativeFilePath {
        return RelativeFilePath.of(path.win32.normalize(relativePath));
    }
}
