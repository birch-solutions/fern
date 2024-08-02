/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type SubmissionResponse = 
    | SeedTrace.SubmissionResponse.ServerInitialized
    | SeedTrace.SubmissionResponse.ProblemInitialized
    | SeedTrace.SubmissionResponse.WorkspaceInitialized
    | SeedTrace.SubmissionResponse.ServerErrored
    | SeedTrace.SubmissionResponse.CodeExecutionUpdate
    | SeedTrace.SubmissionResponse.Terminated
    | SeedTrace.SubmissionResponse._Unknown;

export declare namespace SubmissionResponse {
    interface ServerInitialized extends _Utils {
        type: "serverInitialized";
    }

    interface ProblemInitialized extends _Utils {
        type: "problemInitialized";
        value: SeedTrace.ProblemId;
    }

    interface WorkspaceInitialized extends _Utils {
        type: "workspaceInitialized";
    }

    interface ServerErrored extends SeedTrace.ExceptionInfo, _Utils {
        type: "serverErrored";
    }

    interface CodeExecutionUpdate extends _Utils {
        type: "codeExecutionUpdate";
        value: SeedTrace.CodeExecutionUpdate;
    }

    interface Terminated extends SeedTrace.TerminatedResponse, _Utils {
        type: "terminated";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        serverInitialized: () => _Result;
        problemInitialized: (value: SeedTrace.ProblemId) => _Result;
        workspaceInitialized: () => _Result;
        serverErrored: (value: SeedTrace.ExceptionInfo) => _Result;
        codeExecutionUpdate: (value: SeedTrace.CodeExecutionUpdate) => _Result;
        terminated: (value: SeedTrace.TerminatedResponse) => _Result;
        _other: (value: {
                type: string;
            }) => _Result;
    }
}

export const SubmissionResponse = {
        serverInitialized: (): SeedTrace.SubmissionResponse.ServerInitialized => {
            return {
                type: "serverInitialized",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.ServerInitialized, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        problemInitialized: (value: SeedTrace.ProblemId): SeedTrace.SubmissionResponse.ProblemInitialized => {
            return {
                value: value,
                type: "problemInitialized",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.ProblemInitialized, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        workspaceInitialized: (): SeedTrace.SubmissionResponse.WorkspaceInitialized => {
            return {
                type: "workspaceInitialized",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.WorkspaceInitialized, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        serverErrored: (value: SeedTrace.ExceptionInfo): SeedTrace.SubmissionResponse.ServerErrored => {
            return {
                ...value,
                type: "serverErrored",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.ServerErrored, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        codeExecutionUpdate: (value: SeedTrace.CodeExecutionUpdate): SeedTrace.SubmissionResponse.CodeExecutionUpdate => {
            return {
                value: value,
                type: "codeExecutionUpdate",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.CodeExecutionUpdate, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        terminated: (value: SeedTrace.TerminatedResponse): SeedTrace.SubmissionResponse.Terminated => {
            return {
                ...value,
                type: "terminated",
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse.Terminated, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        _unknown: (value: {
            type: string;
        }): SeedTrace.SubmissionResponse._Unknown => {
            return {
                ...(value as any),
                "_visit": function <_Result>(this: SeedTrace.SubmissionResponse._Unknown, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>) {
                    return SeedTrace.SubmissionResponse._visit(this, visitor);
                }
            };
        },

        _visit: <_Result>(value: SeedTrace.SubmissionResponse, visitor: SeedTrace.SubmissionResponse._Visitor<_Result>): _Result => {
            switch (value.type) {
                case "serverInitialized": return visitor.serverInitialized();
                case "problemInitialized": return visitor.problemInitialized(value.value);
                case "workspaceInitialized": return visitor.workspaceInitialized();
                case "serverErrored": return visitor.serverErrored(value);
                case "codeExecutionUpdate": return visitor.codeExecutionUpdate(value.value);
                case "terminated": return visitor.terminated(value);
                default: return visitor._other(value as any);
            }
        },
    } as const;
