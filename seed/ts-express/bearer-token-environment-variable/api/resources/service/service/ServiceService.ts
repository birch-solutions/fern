/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface ServiceServiceMethods {
    getWithBearerToken(
        req: express.Request<never, string, never, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class ServiceService {
    private router;

    constructor(private readonly methods: ServiceServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.get("/apiKey", async (req, res, next) => {
            try {
                await this.methods.getWithBearerToken(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.service.getWithBearerToken.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedBearerTokenEnvironmentVariableError) {
                    console.warn(
                        `Endpoint 'getWithBearerToken' unexpectedly threw ${error.constructor.name}.` +
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
