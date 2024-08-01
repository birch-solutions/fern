/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ExecutionSessionStatus = 
    | "CREATING_CONTAINER"
    | "PROVISIONING_CONTAINER"
    | "PENDING_CONTAINER"
    | "RUNNING_CONTAINER"
    | "LIVE_CONTAINER"
    | "FAILED_TO_LAUNCH";

export const ExecutionSessionStatus = {
        CreatingContainer: "CREATING_CONTAINER",
        ProvisioningContainer: "PROVISIONING_CONTAINER",
        PendingContainer: "PENDING_CONTAINER",
        RunningContainer: "RUNNING_CONTAINER",
        LiveContainer: "LIVE_CONTAINER",
        FailedToLaunch: "FAILED_TO_LAUNCH"
    } as const;
