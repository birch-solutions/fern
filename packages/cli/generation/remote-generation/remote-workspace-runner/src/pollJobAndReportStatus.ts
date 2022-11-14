import { TaskContext } from "@fern-api/task-context";
import { FernFiddle } from "@fern-fern/fiddle-client";
import { RemoteTaskHandler } from "./RemoteTaskHandler";
import { REMOTE_GENERATION_SERVICE } from "./service";

const MAX_UNSUCCESSFUL_ATTEMPTS = 3;

export function pollJobAndReportStatus({
    job,
    taskId,
    taskHandler,
    context,
}: {
    job: FernFiddle.remoteGen.CreateJobResponse;
    taskId: FernFiddle.remoteGen.RemoteGenTaskId;
    taskHandler: RemoteTaskHandler;
    context: TaskContext;
}): Promise<void> {
    let numConsecutiveFailed = 0;

    const fetchTaskStatus = async () => {
        const response = await REMOTE_GENERATION_SERVICE.remoteGen.getJobStatus({
            jobId: job.jobId,
        });
        if (response.ok) {
            return response.body[taskId];
        } else {
            context.logger.debug("Failed to get job status.", JSON.stringify(response.error.content));
            return undefined;
        }
    };

    return new Promise((resolve, reject) => {
        void pollForStatus();

        async function pollForStatus() {
            try {
                const taskStatus = await fetchTaskStatus();
                if (taskStatus == null) {
                    numConsecutiveFailed++;
                    if (numConsecutiveFailed === MAX_UNSUCCESSFUL_ATTEMPTS) {
                        context.failAndThrow(`Failed to get job status after ${numConsecutiveFailed} attempts.`);
                    }
                    setTimeout(pollForStatus, 2_000 + 1_000 * numConsecutiveFailed);
                } else {
                    numConsecutiveFailed = 0;
                    await taskHandler.processUpdate(taskStatus);
                    if (taskHandler.isFinished) {
                        resolve();
                    } else {
                        setTimeout(pollForStatus, 2_000);
                    }
                }
            } catch (error) {
                reject(error);
            }
        }
    });
}
