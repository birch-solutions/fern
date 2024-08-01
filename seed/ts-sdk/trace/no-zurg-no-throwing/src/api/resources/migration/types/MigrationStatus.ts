/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type MigrationStatus = 
    /**
     * The migration is running */
    | "RUNNING"
    /**
     * The migration is failed */
    | "FAILED"
    | "FINISHED";

export const MigrationStatus = {
        Running: "RUNNING",
        Failed: "FAILED",
        Finished: "FINISHED"
    } as const;
