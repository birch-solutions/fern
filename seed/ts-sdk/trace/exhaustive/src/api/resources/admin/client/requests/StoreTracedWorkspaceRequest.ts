/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../index.js";

/**
 * @example
 *     {
 *         workspaceRunDetails: {
 *             exceptionV2: SeedTrace.ExceptionV2.generic({
 *                 exceptionType: "exceptionType",
 *                 exceptionMessage: "exceptionMessage",
 *                 exceptionStacktrace: "exceptionStacktrace"
 *             }),
 *             exception: {
 *                 exceptionType: "exceptionType",
 *                 exceptionMessage: "exceptionMessage",
 *                 exceptionStacktrace: "exceptionStacktrace"
 *             },
 *             stdout: "stdout"
 *         },
 *         traceResponses: [{
 *                 submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *                 lineNumber: 1,
 *                 returnValue: SeedTrace.DebugVariableValue.integerValue(1),
 *                 expressionLocation: {
 *                     start: 1,
 *                     offset: 1
 *                 },
 *                 stack: {
 *                     numStackFrames: 1,
 *                     topStackFrame: {
 *                         methodName: "methodName",
 *                         lineNumber: 1,
 *                         scopes: [{
 *                                 variables: {
 *                                     "variables": SeedTrace.DebugVariableValue.integerValue(1)
 *                                 }
 *                             }, {
 *                                 variables: {
 *                                     "variables": SeedTrace.DebugVariableValue.integerValue(1)
 *                                 }
 *                             }]
 *                     }
 *                 },
 *                 stdout: "stdout"
 *             }, {
 *                 submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *                 lineNumber: 1,
 *                 returnValue: SeedTrace.DebugVariableValue.integerValue(1),
 *                 expressionLocation: {
 *                     start: 1,
 *                     offset: 1
 *                 },
 *                 stack: {
 *                     numStackFrames: 1,
 *                     topStackFrame: {
 *                         methodName: "methodName",
 *                         lineNumber: 1,
 *                         scopes: [{
 *                                 variables: {
 *                                     "variables": SeedTrace.DebugVariableValue.integerValue(1)
 *                                 }
 *                             }, {
 *                                 variables: {
 *                                     "variables": SeedTrace.DebugVariableValue.integerValue(1)
 *                                 }
 *                             }]
 *                     }
 *                 },
 *                 stdout: "stdout"
 *             }]
 *     }
 */
export interface StoreTracedWorkspaceRequest {
    workspaceRunDetails: SeedTrace.WorkspaceRunDetails;
    traceResponses: SeedTrace.TraceResponse[];
}
