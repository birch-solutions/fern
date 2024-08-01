/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "string",
 *         age: 1
 *     }
 */
export interface CreateUserRequest {
    /**
     * The name of the user to create.
     * This name is unique to each user.
     *
     */
    "name": string;
    /**
     * The age of the user.
     * This propery is not required.
     *
     */
    "age"?: number;
}
