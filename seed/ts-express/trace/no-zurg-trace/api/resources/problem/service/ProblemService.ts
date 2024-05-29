/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";
import express from "express";
import * as errors from "../../../../errors/index";

export interface ProblemServiceMethods {
    createProblem(
        req: express.Request<never, SeedTrace.CreateProblemResponse, SeedTrace.CreateProblemRequest, never>,
        res: {
            send: (responseBody: SeedTrace.CreateProblemResponse) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    updateProblem(
        req: express.Request<
            {
                problemId: SeedTrace.ProblemId;
            },
            SeedTrace.UpdateProblemResponse,
            SeedTrace.CreateProblemRequest,
            never
        >,
        res: {
            send: (responseBody: SeedTrace.UpdateProblemResponse) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    deleteProblem(
        req: express.Request<
            {
                problemId: SeedTrace.ProblemId;
            },
            never,
            never,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getDefaultStarterFiles(
        req: express.Request<
            never,
            SeedTrace.GetDefaultStarterFilesResponse,
            SeedTrace.GetDefaultStarterFilesRequest,
            never
        >,
        res: {
            send: (responseBody: SeedTrace.GetDefaultStarterFilesResponse) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
}

export class ProblemService {
    private router;

    constructor(private readonly methods: ProblemServiceMethods, middleware: express.RequestHandler[] = []) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.post("/create", async (req, res, next) => {
            try {
                await this.methods.createProblem(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(responseBody);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'createProblem' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        this.router.post("/update/:problemId", async (req, res, next) => {
            try {
                await this.methods.updateProblem(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(responseBody);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'updateProblem' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        this.router.delete("/delete/:problemId", async (req, res, next) => {
            try {
                await this.methods.deleteProblem(
                    req as any,
                    {
                        send: async () => {
                            res.sendStatus(204);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'deleteProblem' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        this.router.post("/default-starter-files", async (req, res, next) => {
            try {
                await this.methods.getDefaultStarterFiles(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(responseBody);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'getDefaultStarterFiles' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        return this.router;
    }
}
