/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../..";
import express from "express";
export interface SubmissionServiceMethods {
    createExecutionSession(req: express.Request<{
        language: SeedTrace.Language;
    }, SeedTrace.ExecutionSessionResponse, never, never>, res: {
        send: (responseBody: SeedTrace.ExecutionSessionResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getExecutionSession(req: express.Request<{
        sessionId: string;
    }, SeedTrace.ExecutionSessionResponse | undefined, never, never>, res: {
        send: (responseBody: SeedTrace.ExecutionSessionResponse | undefined) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    stopExecutionSession(req: express.Request<{
        sessionId: string;
    }, never, never, never>, res: {
        send: () => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getExecutionSessionsState(req: express.Request<never, SeedTrace.GetExecutionSessionStateResponse, never, never>, res: {
        send: (responseBody: SeedTrace.GetExecutionSessionStateResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
/**
 * Responsible for spinning up and spinning down execution.
 */
export declare class SubmissionService {
    private readonly methods;
    private router;
    constructor(methods: SubmissionServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
