/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface OptionalServiceMethods {
    sendOptionalBody(
        req: express.Request<never, string, Record<string, unknown> | undefined, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
}

export class OptionalService {
    private router;

    constructor(private readonly methods: OptionalServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/send-optional-body", async (req, res, next) => {
            const request = serializers.optional.sendOptionalBody.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.sendOptionalBody(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.optional.sendOptionalBody.Response.jsonOrThrow(responseBody, {
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
                    if (error instanceof errors.SeedObjectsWithImportsError) {
                        console.warn(
                            `Endpoint 'sendOptionalBody' unexpectedly threw ${error.constructor.name}.` +
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
