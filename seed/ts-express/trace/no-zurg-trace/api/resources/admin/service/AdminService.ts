/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";
import express from "express";
import * as errors from "../../../../errors/index";

export interface AdminServiceMethods {
    updateTestSubmissionStatus(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.TestSubmissionStatus,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    sendTestSubmissionUpdate(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.TestSubmissionUpdate,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    updateWorkspaceSubmissionStatus(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.WorkspaceSubmissionStatus,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    sendWorkspaceSubmissionUpdate(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.WorkspaceSubmissionUpdate,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    storeTracedTestCase(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
                testCaseId: string;
            },
            never,
            SeedTrace.StoreTracedTestCaseRequest,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    storeTracedTestCaseV2(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
                testCaseId: SeedTrace.v2.TestCaseId;
            },
            never,
            SeedTrace.TraceResponseV2[],
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    storeTracedWorkspace(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.StoreTracedWorkspaceRequest,
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    storeTracedWorkspaceV2(
        req: express.Request<
            {
                submissionId: SeedTrace.SubmissionId;
            },
            never,
            SeedTrace.TraceResponseV2[],
            never
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class AdminService {
    private router;

    constructor(private readonly methods: AdminServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/store-test-submission-status/:submissionId", async (req, res, next) => {
            try {
                await this.methods.updateTestSubmissionStatus(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'updateTestSubmissionStatus' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/store-test-submission-status-v2/:submissionId", async (req, res, next) => {
            try {
                await this.methods.sendTestSubmissionUpdate(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'sendTestSubmissionUpdate' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/store-workspace-submission-status/:submissionId", async (req, res, next) => {
            try {
                await this.methods.updateWorkspaceSubmissionStatus(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'updateWorkspaceSubmissionStatus' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/store-workspace-submission-status-v2/:submissionId", async (req, res, next) => {
            try {
                await this.methods.sendWorkspaceSubmissionUpdate(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'sendWorkspaceSubmissionUpdate' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/store-test-trace/submission/:submissionId/testCase/:testCaseId", async (req, res, next) => {
            try {
                await this.methods.storeTracedTestCase(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'storeTracedTestCase' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post(
            "/store-test-trace-v2/submission/:submissionId/testCase/:testCaseId",
            async (req, res, next) => {
                try {
                    await this.methods.storeTracedTestCaseV2(req as any, {
                        send: async () => {
                            res.sendStatus(204);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedTraceError) {
                        console.warn(
                            `Endpoint 'storeTracedTestCaseV2' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
                    } else {
                        res.status(500).json("Internal Server Error");
                    }
                    next(error);
                }
            }
        );
        this.router.post("/store-workspace-trace/submission/:submissionId", async (req, res, next) => {
            try {
                await this.methods.storeTracedWorkspace(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'storeTracedWorkspace' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/store-workspace-trace-v2/submission/:submissionId", async (req, res, next) => {
            try {
                await this.methods.storeTracedWorkspaceV2(req as any, {
                    send: async () => {
                        res.sendStatus(204);
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedTraceError) {
                    console.warn(
                        `Endpoint 'storeTracedWorkspaceV2' unexpectedly threw ${error.constructor.name}.` +
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
