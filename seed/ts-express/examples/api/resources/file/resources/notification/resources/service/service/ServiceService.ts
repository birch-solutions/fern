/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExamples from "../../../../../../../index";
import express from "express";
import * as serializers from "../../../../../../../../serialization/index";
import * as errors from "../../../../../../../../errors/index";

export interface ServiceServiceMethods {
    getException(
        req: express.Request<
            {
                notificationId: string;
            },
            SeedExamples.Exception,
            never,
            never
        >,
        res: {
            send: (responseBody: SeedExamples.Exception) => Promise<void>;
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
        this.router.get("", async (req, res, next) => {
            try {
                await this.methods.getException(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.Exception.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                if (error instanceof errors.SeedExamplesError) {
                    console.warn(
                        `Endpoint 'getException' unexpectedly threw ${error.constructor.name}.` +
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
