/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as SeedExamples from "../index";
import * as serializers from "../../serialization/index";
import * as errors from "../../errors/index";

export interface RootServiceMethods {
    echo(
        req: express.Request<never, string, string, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    createType(
        req: express.Request<never, SeedExamples.Identifier, SeedExamples.Type, never>,
        res: {
            send: (responseBody: SeedExamples.Identifier) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
}

export class RootService {
    private router;

    constructor(private readonly methods: RootServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("", async (req, res, next) => {
            const request = serializers.echo.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.echo(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.echo.Response.jsonOrThrow(responseBody, {
                                        unrecognizedObjectKeys: "strip",
                                    })
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExamplesError) {
                        console.warn(
                            `Endpoint 'echo' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
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
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message
                    ),
                });
                next(request.errors);
            }
        });
        this.router.post("", async (req, res, next) => {
            const request = serializers.Type.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.createType(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.Identifier.jsonOrThrow(responseBody, {
                                        unrecognizedObjectKeys: "strip",
                                    })
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExamplesError) {
                        console.warn(
                            `Endpoint 'createType' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
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
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message
                    ),
                });
                next(request.errors);
            }
        });
        return this.router;
    }
}
