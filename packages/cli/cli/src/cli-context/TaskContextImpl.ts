import { Logger, LogLevel } from "@fern-api/logger";
import {
    CreateInteractiveTaskParams,
    FinishableInteractiveTaskContext,
    InteractiveTaskContext,
    StartableInteractiveTaskContext,
    TaskContext,
    TaskResult,
    TASK_FAILURE,
} from "@fern-api/task-context";
import chalk from "chalk";
import { addPrefixToLog } from "./addPrefixToLog";
import { LogWithLevel } from "./Log";

export declare namespace TaskContextImpl {
    export interface Init {
        log: (logs: LogWithLevel[]) => void;
        logPrefix?: string;
    }
}

export class TaskContextImpl implements TaskContext {
    protected result = TaskResult.Success;
    protected log: (logs: LogWithLevel[]) => void;
    protected logPrefix: string;
    protected subtasks: InteractiveTaskContextImpl[] = [];
    private logs: LogWithLevel[] = [];

    public constructor({ log, logPrefix }: TaskContextImpl.Init) {
        this.log = log;
        this.logPrefix = logPrefix ?? "";
    }

    public fail(message?: string): TASK_FAILURE {
        if (message != null) {
            this.logger.error(message);
        }
        this.result = TaskResult.Failure;
        return TASK_FAILURE;
    }

    public getResult(): TaskResult {
        return this.result;
    }

    public finish(): void {
        this.log(this.logs);
    }

    protected bufferLog(log: LogWithLevel): void {
        this.logs.push({
            ...log,
            content: addPrefixToLog({
                prefix: `${this.logPrefix} `,
                content: log.content,
            }),
        });
    }

    public get logger(): Logger {
        return {
            debug: (content) => {
                this.bufferLog({ content, level: LogLevel.Debug });
            },
            info: (content) => {
                this.bufferLog({ content, level: LogLevel.Info });
            },
            warn: (content) => {
                this.bufferLog({ content, level: LogLevel.Warn });
            },
            error: (content) => {
                this.bufferLog({ content, level: LogLevel.Error });
            },
            log: (content, level) => {
                this.bufferLog({ content, level });
            },
        };
    }

    public addInteractiveTask({ name, subtitle }: CreateInteractiveTaskParams): StartableInteractiveTaskContext {
        const subtask = new InteractiveTaskContextImpl({
            name,
            subtitle,
            log: (content) => this.log(content),
            logPrefix: `${this.logPrefix} ${chalk.blackBright(name)}`,
        });
        this.subtasks.push(subtask);
        return subtask;
    }

    public async runInteractiveTask(
        params: CreateInteractiveTaskParams,
        run: (context: InteractiveTaskContext) => void | Promise<void>
    ): Promise<void> {
        const subtask = this.addInteractiveTask(params).start();
        await run(subtask);
        subtask.finish();
    }

    public printInteractiveTasks({ spinner }: { spinner: string }): string {
        return this.subtasks.map((subtask) => subtask.print({ spinner })).join("\n");
    }
}

/**
 * InteractiveTaskContextImpl is defined in this file because
 * InteractiveTaskContextImpl and TaskContextImpl are co-dependent
 */

export declare namespace InteractiveTaskContextImpl {
    export interface Init extends TaskContextImpl.Init {
        name: string;
        subtitle: string | undefined;
    }
}

export class InteractiveTaskContextImpl
    extends TaskContextImpl
    implements StartableInteractiveTaskContext, FinishableInteractiveTaskContext
{
    private name: string;
    private subtitle: string | undefined;
    private status: "notStarted" | "running" | "finished" = "notStarted";

    constructor({ name, subtitle, ...superArgs }: InteractiveTaskContextImpl.Init) {
        super(superArgs);
        this.name = name;
        this.subtitle = subtitle;
    }

    public setSubtitle(subtitle: string | undefined): void {
        this.subtitle = subtitle;
    }

    public start(): FinishableInteractiveTaskContext {
        this.status = "running";
        this.log([
            {
                content: "Started.",
                level: LogLevel.Info,
                omitOnTTY: true,
            },
        ]);
        return this;
    }

    public isStarted(): boolean {
        return this.status !== "notStarted";
    }

    public finish(): void {
        if (this.result === TaskResult.Success) {
            this.bufferLog({
                content: "Finished.",
                level: LogLevel.Info,
                omitOnTTY: true,
            });
        } else {
            this.bufferLog({
                content: "Failed.",
                level: LogLevel.Error,
                omitOnTTY: true,
            });
        }
        this.status = "finished";
        super.finish();
    }

    public isFinished(): boolean {
        return this.status === "finished";
    }

    public print({ spinner }: { spinner: string }): string {
        const lines = [this.name];
        if (this.subtitle != null) {
            lines.push(chalk.dim(this.subtitle));
        }
        lines.push(...this.subtasks.map((subtask) => subtask.print({ spinner })));

        return addPrefixToLog({
            prefix: `${this.getIcon({ spinner }).padEnd(spinner.length)} `,
            content: lines.join("\n"),
        });
    }

    public printInteractiveTasks({ spinner }: { spinner: string }): string {
        return this.print({ spinner });
    }

    private getIcon({ spinner }: { spinner: string }): string {
        if (!this.isFinished()) {
            return spinner;
        }
        switch (this.getResult()) {
            case TaskResult.Success:
                return chalk.green("✓");
            case TaskResult.Failure:
                return chalk.red("x");
        }
    }

    public getResult(): TaskResult {
        if (this.result === TaskResult.Failure) {
            return TaskResult.Failure;
        }
        for (const subtask of this.subtasks) {
            if (subtask.getResult() === TaskResult.Failure) {
                return TaskResult.Failure;
            }
        }
        return TaskResult.Success;
    }
}
