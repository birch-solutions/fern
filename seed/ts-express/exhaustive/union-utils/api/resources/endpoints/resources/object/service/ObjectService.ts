/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../../../../index";
import express from "express";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export interface ObjectServiceMethods {
    getAndReturnWithOptionalField(
        req: express.Request<
            never,
            SeedExhaustive.types.ObjectWithOptionalField,
            SeedExhaustive.types.ObjectWithOptionalField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    getAndReturnWithRequiredField(
        req: express.Request<
            never,
            SeedExhaustive.types.ObjectWithRequiredField,
            SeedExhaustive.types.ObjectWithRequiredField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithRequiredField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    getAndReturnWithMapOfMap(
        req: express.Request<
            never,
            SeedExhaustive.types.ObjectWithMapOfMap,
            SeedExhaustive.types.ObjectWithMapOfMap,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithMapOfMap) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    getAndReturnNestedWithOptionalField(
        req: express.Request<
            never,
            SeedExhaustive.types.NestedObjectWithOptionalField,
            SeedExhaustive.types.NestedObjectWithOptionalField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.NestedObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    getAndReturnNestedWithRequiredField(
        req: express.Request<
            never,
            SeedExhaustive.types.NestedObjectWithRequiredField,
            SeedExhaustive.types.NestedObjectWithRequiredField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.NestedObjectWithRequiredField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    getAndReturnNestedWithRequiredFieldAsList(
        req: express.Request<
            never,
            SeedExhaustive.types.NestedObjectWithRequiredField,
            SeedExhaustive.types.NestedObjectWithRequiredField[],
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.NestedObjectWithRequiredField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class ObjectService {
    private router;

    constructor(private readonly methods: ObjectServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/get-and-return-with-optional-field", async (req, res, next) => {
            const request = await serializers.types.ObjectWithOptionalField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnWithOptionalField(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnWithOptionalField' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/get-and-return-with-required-field", async (req, res, next) => {
            const request = await serializers.types.ObjectWithRequiredField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnWithRequiredField(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithRequiredField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnWithRequiredField' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/get-and-return-with-map-of-map", async (req, res, next) => {
            const request = await serializers.types.ObjectWithMapOfMap.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnWithMapOfMap(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithMapOfMap.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnWithMapOfMap' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/get-and-return-nested-with-optional-field", async (req, res, next) => {
            const request = await serializers.types.NestedObjectWithOptionalField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnNestedWithOptionalField(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.NestedObjectWithOptionalField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnNestedWithOptionalField' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/get-and-return-nested-with-required-field", async (req, res, next) => {
            const request = await serializers.types.NestedObjectWithRequiredField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnNestedWithRequiredField(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.NestedObjectWithRequiredField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnNestedWithRequiredField' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/get-and-return-nested-with-required-field-list", async (req, res, next) => {
            const request = await serializers.endpoints.object.getAndReturnNestedWithRequiredFieldAsList.Request.parse(
                req.body
            );
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnNestedWithRequiredFieldAsList(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.NestedObjectWithRequiredField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'getAndReturnNestedWithRequiredFieldAsList' unexpectedly threw ${error.constructor.name}.` +
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
