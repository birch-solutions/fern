/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface PropertyBasedErrorServiceMethods {
    throwError(
        req: express.Request<never, string, never, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class PropertyBasedErrorService {
    private router;

    constructor(private readonly methods: PropertyBasedErrorServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.get("/property-based-error", async (req, res, next) => {
            try {
                await this.methods.throwError(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.propertyBasedError.throwError.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedErrorPropertyError) {
                    switch (error.errorName) {
                        case "PropertyBasedErrorTest":
                            break;
                        default:
                            console.warn(
                                `Endpoint 'ThrowError' unexpectedly threw ${error.constructor.name}.` +
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
