/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ProtobufDefinitionSchema {
    /** The path to the `.proto` directory root (e.g. `proto`). */
    root: string;
    /** The path to the target `.proto` file that defines the API (e.g. `proto/user/v1/user.proto`). */
    target: string;
    /** Path to the overrides configuration */
    overrides?: string;
    /** Whether to compile the `.proto` files locally. By default, we generate remotely. */
    "local-generation"?: boolean;
}
