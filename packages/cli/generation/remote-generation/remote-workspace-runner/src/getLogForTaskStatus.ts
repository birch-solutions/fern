import { GeneratorInvocation } from "@fern-api/generators-configuration";
import {
    Package,
    PackageCoordinate,
    PackagePublishStatus,
    RemoteGenTaskId,
    Task,
    TaskStatus,
} from "@fern-fern/fiddle-coordinator-api-client/model/remoteGen";
import chalk from "chalk";
import { SPINNER } from "./spinner";
import { GeneratorInvocationWithTaskId } from "./types";

const DEFAULT_TASK_STATUS = TaskStatus.notStarted();

export function getLogForTaskStatuses({
    tasks,
    generatorInvocationsWithTaskIds,
}: {
    tasks: Record<RemoteGenTaskId, Task> | undefined;
    generatorInvocationsWithTaskIds: readonly GeneratorInvocationWithTaskId[];
}): string {
    // generate next spinner once and reuse it for all tasks.
    // otherwise the spinner goes faster when there's more generators
    const spinnerFrame = SPINNER.frame();

    return generatorInvocationsWithTaskIds
        .map(
            ({ generatorInvocation, taskId }) =>
                "\n" +
                getLogForTaskStatus({
                    generatorInvocation,
                    task: taskId != null ? tasks?.[taskId] : undefined,
                    spinnerFrame,
                }).join("\n") +
                "\n"
        )
        .join("");
}

function getLogForTaskStatus({
    generatorInvocation,
    task,
    spinnerFrame,
}: {
    generatorInvocation: GeneratorInvocation;
    task: Task | undefined;
    spinnerFrame: string;
}): string[] {
    const icon = TaskStatus._visit(task?.status ?? DEFAULT_TASK_STATUS, {
        notStarted: () => spinnerFrame,
        running: () => spinnerFrame,
        failed: () => "❌",
        finished: () => "✅",
        _unknown: () => "❓",
    });

    const title = getTitleForTask(task);
    const messages = [`${icon} ${chalk.bold(generatorInvocation.name)} ${chalk.gray(title)}`];

    if (task != null) {
        for (const packageForTask of task.packages) {
            const logForPackage = getLogForPackage({ packageForTask, spinnerFrame });
            messages.push(logForPackage);
        }

        if (
            task.status._type === "finished" &&
            task.status.hasFilesToDownload &&
            generatorInvocation.generate?.absolutePathToLocalOutput != null
        ) {
            messages.push(getSubLog(`📁 Downloaded ${generatorInvocation.generate.absolutePathToLocalOutput}`));
        }
    }

    return messages;
}

const QUEUED_TEXT = "Queued...";
function getTitleForTask(task: Task | undefined) {
    const lastLog = task != null ? task.logs[task.logs.length - 1]?.message : undefined;
    return TaskStatus._visit(task?.status ?? DEFAULT_TASK_STATUS, {
        notStarted: () => QUEUED_TEXT,
        running: () => lastLog ?? "Generating...",
        failed: (failed) => failed.message,
        finished: () => "Succeeded",
        _unknown: () => "<Unknown status>",
    });
}

function getLogForPackage({ packageForTask, spinnerFrame }: { packageForTask: Package; spinnerFrame: string }) {
    const parts: string[] = [];

    const icon = PackagePublishStatus._visit(packageForTask.status, {
        notStartedPublishing: () => spinnerFrame,
        publishing: () => spinnerFrame,
        published: () => "✔️ ",
        failedToPublish: () => "❌",
        _unknown: () => "❓",
    });
    parts.push(icon);

    const coordinate = PackageCoordinate._visit(packageForTask.coordinate, {
        npm: (npmPackage) => `${npmPackage.name}@${npmPackage.version}`,
        maven: (mavenPackage) => `${mavenPackage.group}:${mavenPackage.artifact}:${mavenPackage.version}`,
        _unknown: () => "<unknown package>",
    });
    parts.push(coordinate);

    const registry = PackageCoordinate._visit(packageForTask.coordinate, {
        npm: () => "npm",
        maven: () => "maven",
        _unknown: () => undefined,
    });
    if (registry != null) {
        parts.push(chalk.gray(`(${registry})`));
    }

    const logForPackage = getSubLog(parts.join(" "));
    return logForPackage;
}

function getSubLog(text: string) {
    return `  ${text}`;
}
