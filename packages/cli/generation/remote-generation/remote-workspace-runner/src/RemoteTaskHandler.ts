import { AbsoluteFilePath, assertNeverNoThrow } from "@fern-api/core-utils";
import { DraftGeneratorInvocation } from "@fern-api/generators-configuration";
import { LogLevel } from "@fern-api/logger";
import { Finishable, InteractiveTaskContext } from "@fern-api/task-context";
import {
    CreateJobResponse,
    LogLevel as FiddleLogLevel,
    PackageCoordinate,
    RemoteGenJobId,
    RemoteGenTaskId,
    Task,
} from "@fern-fern/fiddle-coordinator-api-client/model/remoteGen";
import axios from "axios";
import chalk from "chalk";
import { createWriteStream } from "fs";
import urlJoin from "url-join";
import { FIDDLE_API_URL } from "./service";

export declare namespace RemoteTaskHandler {
    export interface Init {
        job: CreateJobResponse;
        taskId: RemoteGenTaskId;
        interactiveTaskContext: Finishable & InteractiveTaskContext;
        generatorInvocation: DraftGeneratorInvocation;
    }
}

export class RemoteTaskHandler {
    private job: CreateJobResponse;
    private taskId: RemoteGenTaskId;
    private context: Finishable & InteractiveTaskContext;
    private generatorInvocation: DraftGeneratorInvocation;
    private lengthOfLastLogs = 0;

    constructor({ job, taskId, interactiveTaskContext, generatorInvocation }: RemoteTaskHandler.Init) {
        this.job = job;
        this.taskId = taskId;
        this.context = interactiveTaskContext;
        this.generatorInvocation = generatorInvocation;
    }

    public processUpdate(remoteTask: Task | undefined): void {
        if (remoteTask == null) {
            this.context.fail("Task is missing on job status");
            this.context.finish();
            return;
        }

        if (this.isFinished()) {
            return;
        }

        this.context.setSubtitle(
            remoteTask.packages.length > 0
                ? remoteTask.packages
                      .map((p) => {
                          const coordinateStr = PackageCoordinate._visit(p.coordinate, {
                              npm: (npmPackage) => `${npmPackage.name}@${npmPackage.version}`,
                              maven: (mavenPackage) =>
                                  `${mavenPackage.group}:${mavenPackage.artifact}:${mavenPackage.version}`,
                              _unknown: () => "<unknown package>",
                          });
                          return `◦ ${coordinateStr}`;
                      })
                      .join("\n")
                : undefined
        );

        for (const newLog of remoteTask.logs.slice(this.lengthOfLastLogs)) {
            const level = FiddleLogLevel._visit(newLog.level, {
                debug: () => LogLevel.Debug,
                info: () => LogLevel.Info,
                warn: () => LogLevel.Warn,
                error: () => LogLevel.Error,
                _unknown: () => LogLevel.Info,
            });
            this.context.logger.log(newLog.message, level);
        }
        this.lengthOfLastLogs = remoteTask.logs.length;

        switch (remoteTask.status._type) {
            case "notStarted":
            case "running":
                break;
            case "failed":
                this.context.fail(remoteTask.status.message);
                this.context.finish();
                break;
            case "finished":
                // kick off, but don't await
                void this.processFinishedTask(remoteTask);
                break;
            default:
                assertNeverNoThrow(remoteTask.status);
                // kick off, but don't await
                void this.processFinishedTask(remoteTask);
                break;
        }
    }

    public isFinished(): boolean {
        return this.context.isFinished();
    }

    private async processFinishedTask(task: Task): Promise<void> {
        if (
            task.status._type === "finished" &&
            task.status.hasFilesToDownload &&
            this.generatorInvocation.absolutePathToLocalOutput != null
        ) {
            try {
                await downloadFilesForTask({
                    jobId: this.job.jobId,
                    taskId: this.taskId,
                    absolutePathToLocalOutput: this.generatorInvocation.absolutePathToLocalOutput,
                    context: this.context,
                });
            } catch {
                this.context.fail(`Failed to download ${this.generatorInvocation.absolutePathToLocalOutput}`);
            }
        }
        this.context.finish();
    }
}

async function downloadFilesForTask({
    jobId,
    taskId,
    absolutePathToLocalOutput,
    context,
}: {
    jobId: RemoteGenJobId;
    taskId: RemoteGenTaskId;
    absolutePathToLocalOutput: AbsoluteFilePath;
    context: Finishable & InteractiveTaskContext;
}) {
    const writer = createWriteStream(absolutePathToLocalOutput);
    await axios
        .get(urlJoin(FIDDLE_API_URL, `/remote-gen/tasks/${taskId}/jobs/${jobId}/downloadFiles`), {
            responseType: "stream",
        })
        .then((response) => {
            response.data.pipe(writer);
            context.logger.info(chalk.green("Downloaded: " + absolutePathToLocalOutput));
        })
        .catch(() => {
            context.fail("Failed to download: " + absolutePathToLocalOutput);
        });
}
