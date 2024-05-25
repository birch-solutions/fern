/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export interface PrimitiveServiceMethods {
    getAndReturnString(
        req: express.Request<never, string, string, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnInt(
        req: express.Request<never, number, number, never>,
        res: {
            send: (responseBody: number) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnLong(
        req: express.Request<never, number, number, never>,
        res: {
            send: (responseBody: number) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnDouble(
        req: express.Request<never, number, number, never>,
        res: {
            send: (responseBody: number) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnBool(
        req: express.Request<never, boolean, boolean, never>,
        res: {
            send: (responseBody: boolean) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnDatetime(
        req: express.Request<never, Date, Date, never>,
        res: {
            send: (responseBody: Date) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnDate(
        req: express.Request<never, string, string, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnUuid(
        req: express.Request<never, string, string, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
    getAndReturnBase64(
        req: express.Request<never, string, string, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
}

export class PrimitiveService {
    private router;

    constructor(private readonly methods: PrimitiveServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/string", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnString.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnString(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnString.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnString' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/integer", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnInt.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnInt(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnInt.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnInt' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/long", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnLong.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnLong(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnLong.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnLong' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/double", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnDouble.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnDouble(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnDouble.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnDouble' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/boolean", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnBool.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnBool(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnBool.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnBool' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/datetime", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnDatetime.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnDatetime(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnDatetime.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnDatetime' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/date", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnDate.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnDate(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnDate.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnDate' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/uuid", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnUuid.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnUuid(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnUuid.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnUUID' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
        this.router.post("/base64", async (req, res, next) => {
            const request = await serializers.endpoints.primitive.getAndReturnBase64.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnBase64(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    await serializers.endpoints.primitive.getAndReturnBase64.Response.jsonOrThrow(
                                        responseBody,
                                        { unrecognizedObjectKeys: "strip" }
                                    )
                                );
                            },
                            cookie: res.cookie.bind(res),
                            locals: res.locals,
                        },
                        next
                    );
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnBase64' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
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
