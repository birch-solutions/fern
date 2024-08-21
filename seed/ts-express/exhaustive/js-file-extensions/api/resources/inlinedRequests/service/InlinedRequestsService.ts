/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../../index.js";
import express from "express";
import * as serializers from "../../../../serialization/index.js";
import * as errors from "../../../../errors/index.js";

export interface InlinedRequestsServiceMethods {
    postWithObjectBodyandResponse(
        req: express.Request<
            never,
            SeedExhaustive.types.ObjectWithOptionalField,
            SeedExhaustive.PostWithObjectBody,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction
    ): void | Promise<void>;
}

export class InlinedRequestsService {
    private router;

    constructor(private readonly methods: InlinedRequestsServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/object", async (req, res, next) => {
            const request = serializers.PostWithObjectBody.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.postWithObjectBodyandResponse(
                        req as any,
                        {
                            send: async (responseBody) => {
                                res.json(
                                    serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
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
                    if (error instanceof errors.SeedExhaustiveError) {
                        switch (error.errorName) {
                            case "BadRequestBody":
                                break;
                            default:
                                console.warn(
                                    `Endpoint 'postWithObjectBodyandResponse' unexpectedly threw ${error.constructor.name}.` +
                                        ` If this was intentional, please add ${error.constructor.name} to` +
                                        " the endpoint's errors list in your Fern Definition."
                                );
                        }
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
