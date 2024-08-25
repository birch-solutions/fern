/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedAliasExtends from "../index";
import express from "express";
import * as serializers from "../../serialization/index";
import * as errors from "../../errors/index";

export interface RootServiceMethods {
    extendedInlineRequestBody(
        req: express.Request<never, never, SeedAliasExtends.InlinedChildRequest, never>,
        res: {
            send: () => Promise<void>;
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
        this.router.post("/extended-inline-request-body", async (req, res, next) => {
            const request = serializers.InlinedChildRequest.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.extendedInlineRequestBody(
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
                    if (error instanceof errors.SeedAliasExtendsError) {
                        console.warn(
                            `Endpoint 'extendedInlineRequestBody' unexpectedly threw ${error.constructor.name}.` +
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
