/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface NoAuthServiceMethods {
    postWithNoAuth(
        req: express.Request<never, boolean, unknown, never>,
        res: {
            send: (responseBody: boolean) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class NoAuthService {
    private router;

    constructor(private readonly methods: NoAuthServiceMethods, middleware: express.RequestHandler[] = []) {
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
            try {
                await this.methods.postWithNoAuth(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.noAuth.postWithNoAuth.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedExhaustiveError) {
                    switch (error.errorName) {
                        case "BadRequestBody":
                            break;
                        default:
                            console.warn(
                                `Endpoint 'postWithNoAuth' unexpectedly threw ${error.constructor.name}.` +
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
        });
        return this.router;
    }
}
