import { Logger, LogLevel, LOG_LEVELS } from "@fern-api/logger";
import { isVersionAhead } from "@fern-api/semver-utils";
import { Finishable, Startable, TaskContext, TaskResult, TASK_FAILURE } from "@fern-api/task-context";
import { Workspace } from "@fern-api/workspace-loader";
import chalk from "chalk";
import { maxBy } from "lodash-es";
import { CliEnvironment } from "./CliEnvironment";
import { constructErrorMessage } from "./constructErrorMessage";
import { Log } from "./Log";
import { TaskContextImpl } from "./TaskContextImpl";
import { TtyAwareLogger } from "./TtyAwareLogger";
import { getFernCliUpgradeMessage } from "./upgrade-utils/getFernCliUpgradeMessage";
import { getLatestVersionOfCli } from "./upgrade-utils/getLatestVersionOfCli";

const WORKSPACE_NAME_COLORS = ["#2E86AB", "#A23B72", "#F18F01", "#C73E1D", "#CCE2A3"];

export interface FernCliUpgradeInfo {
    isUpgradeAvailable: boolean;
    latestVersion: string;
}

export class CliContext {
    public readonly environment: CliEnvironment;

    private didSucceed = true;

    private numTasks = 0;
    private ttyAwareLogger: TtyAwareLogger;

    private logLevel: LogLevel = LogLevel.Info;

    constructor(private readonly stream: NodeJS.WriteStream) {
        this.ttyAwareLogger = new TtyAwareLogger(stream);

        const packageName = this.getPackageName();
        const packageVersion = this.getPackageVersion();
        const cliName = this.getCliName();
        if (packageName == null || packageVersion == null || cliName == null) {
            this.exitProgram();
        }
        this.environment = {
            packageName,
            packageVersion,
            cliName,
        };
    }

    private getPackageName() {
        if (process.env.CLI_PACKAGE_NAME == null) {
            this.logger.error("CLI_PACKAGE_NAME is not defined");
        }
        return process.env.CLI_PACKAGE_NAME;
    }

    private getPackageVersion() {
        if (process.env.CLI_VERSION == null) {
            this.logger.error("CLI_VERSION is not defined");
        }
        return process.env.CLI_VERSION;
    }

    private getCliName() {
        if (process.env.CLI_NAME == null) {
            this.logger.error("CLI_NAME is not defined");
        }
        return process.env.CLI_NAME;
    }

    public setLogLevel(logLevel: LogLevel): void {
        this.logLevel = logLevel;
    }

    public logDebugInfo(): void {
        this.logger.debug(
            `Running ${chalk.bold(`${this.environment.cliName}`)} (${this.environment.packageName}@${
                this.environment.packageVersion
            })`
        );
    }

    public fail(message?: string, error?: unknown): TASK_FAILURE {
        this.didSucceed = false;
        const errorMessage = constructErrorMessage({ message, error });
        if (errorMessage != null) {
            this.logger.error(errorMessage);
        }
        return TASK_FAILURE;
    }

    public async exit(): Promise<never> {
        this.ttyAwareLogger.finish();
        if (!this._suppressUpgradeMessage) {
            const { isUpgradeAvailable, latestVersion } = await this.isUpgradeAvailable();
            if (isUpgradeAvailable) {
                const upgradeMessage = await getFernCliUpgradeMessage({
                    toVersion: latestVersion,
                    cliEnvironment: this.environment,
                });
                this.stream.write(upgradeMessage);
            }
        }
        this.exitProgram();
    }

    public async exitIfFailed(): Promise<void> {
        if (!this.didSucceed) {
            await this.exit();
        }
    }

    private exitProgram(): never {
        process.exit(this.didSucceed ? 0 : 1);
    }

    private longestWorkspaceName = "";
    public registerWorkspaces(workspaces: readonly Workspace[]): void {
        const longestWorkspaceName = maxBy(
            workspaces.map((workspace) => workspace.name),
            (name) => name.length
        );
        if (longestWorkspaceName != null) {
            this.longestWorkspaceName = longestWorkspaceName;
        }
    }

    public async runTask(run: (context: TaskContext) => void | Promise<void>): Promise<void> {
        await this.runTaskWithInit(this.constructTaskInit(), run);
    }

    public addTask(): Startable<TaskContext & Finishable> {
        return this.addTaskWithInit(this.constructTaskInit());
    }

    public async runTaskForWorkspace(
        workspace: Workspace,
        run: (context: TaskContext) => void | Promise<void>
    ): Promise<void> {
        await this.runTaskWithInit(this.constructTaskInitForWorkspace(workspace), run);
    }

    private addTaskWithInit(init: TaskContextImpl.Init): Startable<TaskContext & Finishable> {
        const context = new TaskContextImpl(init);
        this.ttyAwareLogger.registerTask(context);
        return context;
    }

    private async runTaskWithInit(
        init: TaskContextImpl.Init,
        run: (context: TaskContext) => void | Promise<void>
    ): Promise<void> {
        const context = this.addTaskWithInit(init).start();
        await run(context);
        context.finish();
    }

    get logger(): Logger {
        return {
            debug: (...args) => {
                this.log([
                    {
                        args,
                        level: LogLevel.Debug,
                        prefix: chalk.dim("[debug] "),
                    },
                ]);
            },
            info: (...args) => {
                this.log([
                    {
                        args,
                        level: LogLevel.Info,
                    },
                ]);
            },
            warn: (...args) => {
                this.log([
                    {
                        args,
                        level: LogLevel.Warn,
                    },
                ]);
            },
            error: (...args) => {
                this.log([
                    {
                        args,
                        level: LogLevel.Error,
                    },
                ]);
            },
            log: (level, ...args) => {
                this.log([
                    {
                        args,
                        level,
                    },
                ]);
            },
        };
    }

    private constructTaskInitForWorkspace(workspace: Workspace): TaskContextImpl.Init {
        const prefixForLongestWorkspaceName = wrapWorkspaceNameForPrefix(this.longestWorkspaceName);
        const prefix = wrapWorkspaceNameForPrefix(workspace.name)
            // pad endings so that:
            //   1. all the workspace prefixes are the same length
            //   2. the +1 is so even the longest workspace has a space after its prefix
            .padEnd(prefixForLongestWorkspaceName.length + 1, " ");

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const colorForWorkspace = WORKSPACE_NAME_COLORS[this.numTasks++ % WORKSPACE_NAME_COLORS.length]!;
        const prefixWithColor = chalk.hex(colorForWorkspace)(prefix);
        return {
            ...this.constructTaskInit(),
            logPrefix: prefixWithColor,
        };
    }

    private constructTaskInit(): TaskContextImpl.Init {
        return {
            log: (content) => this.log(content),
            takeOverTerminal: (run) => this.ttyAwareLogger.takeOverTerminal(run),
            onFinish: (result) => {
                if (result === TaskResult.Failure) {
                    this.didSucceed = false;
                }
            },
        };
    }

    private log(logs: Log[]): void {
        const filtered = logs.filter((log) => LOG_LEVELS.indexOf(log.level) >= LOG_LEVELS.indexOf(this.logLevel));
        this.ttyAwareLogger.log(filtered);
    }

    private _suppressUpgradeMessage = false;
    public suppressUpgradeMessage(): void {
        this._suppressUpgradeMessage = true;
    }

    private _isUpgradeAvailable: FernCliUpgradeInfo | undefined;
    public async isUpgradeAvailable(): Promise<FernCliUpgradeInfo> {
        if (this._isUpgradeAvailable == null) {
            this.logger.debug(`Checking if ${this.environment.packageName} upgrade is available...`);

            const latestPackageVersion = await getLatestVersionOfCli(this.environment);
            const isUpgradeAvailable = isVersionAhead(latestPackageVersion, this.environment.packageVersion);

            this.logger.debug(
                `Latest version: ${latestPackageVersion}. ` +
                    (isUpgradeAvailable ? "Upgrade available." : "No upgrade available.")
            );

            this._isUpgradeAvailable = {
                isUpgradeAvailable,
                latestVersion: latestPackageVersion,
            };
        }
        return this._isUpgradeAvailable;
    }
}

function wrapWorkspaceNameForPrefix(workspaceName: string): string {
    return `[${workspaceName}]:`;
}
