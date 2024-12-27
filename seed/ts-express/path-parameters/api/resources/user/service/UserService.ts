/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedPathParameters from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface UserServiceMethods {
    getUser(
        req: express.Request<
            {
                user_id: string;
            },
            SeedPathParameters.User,
            never,
            never
        >,
        res: {
            send: (responseBody: SeedPathParameters.User) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
    createUser(
        req: express.Request<never, SeedPathParameters.User, SeedPathParameters.User, never>,
        res: {
            send: (responseBody: SeedPathParameters.User) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
    updateUser(
        req: express.Request<
            {
                user_id: string;
            },
            SeedPathParameters.User,
            SeedPathParameters.User,
            never
        >,
        res: {
            send: (responseBody: SeedPathParameters.User) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
    searchUsers(
        req: express.Request<
            {
                user_id: string;
            },
            SeedPathParameters.User[],
            never,
            {
                limit?: number;
            }
        >,
        res: {
            send: (responseBody: SeedPathParameters.User[]) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
}

export class UserService {
    private router;

    constructor(
        private readonly methods: UserServiceMethods,
        middleware: express.RequestHandler[] = [],
    ) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware,
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.get("/:user_id", async (req, res, next) => {
            try {
                await this.methods.getUser(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(serializers.User.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }));
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next,
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedPathParametersError) {
                    console.warn(
                        `Endpoint 'getUser' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition.",
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        this.router.post("/", async (req, res, next) => {
            const request = serializers.User.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.createUser(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.User.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }),
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next,
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedPathParametersError) {
                        console.warn(
                            `Endpoint 'createUser' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition.",
                        );
                        await error.send(res);
                    } else {
                        res.status(500).json("Internal Server Error");
                    }
                    next(error);
                }
            } else {
                res.status(422).json({
                    errors: request.errors.map(
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message,
                    ),
                });
                next(request.errors);
            }
        });
        this.router.patch("/:user_id", async (req, res, next) => {
            const request = serializers.User.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.updateUser(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.User.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }),
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next,
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedPathParametersError) {
                        console.warn(
                            `Endpoint 'updateUser' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition.",
                        );
                        await error.send(res);
                    } else {
                        res.status(500).json("Internal Server Error");
                    }
                    next(error);
                }
            } else {
                res.status(422).json({
                    errors: request.errors.map(
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message,
                    ),
                });
                next(request.errors);
            }
        });
        this.router.get("/:user_id/search", async (req, res, next) => {
            try {
                await this.methods.searchUsers(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(
                                serializers.user.searchUsers.Response.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                }),
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next,
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedPathParametersError) {
                    console.warn(
                        `Endpoint 'searchUsers' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition.",
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
