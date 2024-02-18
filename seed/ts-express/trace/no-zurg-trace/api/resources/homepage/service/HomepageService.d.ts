/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../..";
import express from "express";
export interface HomepageServiceMethods {
    getHomepageProblems(req: express.Request<never, SeedTrace.ProblemId[], never, never>, res: {
        send: (responseBody: SeedTrace.ProblemId[]) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    setHomepageProblems(req: express.Request<never, never, SeedTrace.ProblemId[], never>, res: {
        send: () => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
export declare class HomepageService {
    private readonly methods;
    private router;
    constructor(methods: HomepageServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
