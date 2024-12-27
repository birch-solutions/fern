/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedMixedFileDirectory from "../../../../../../../index";
import express from "express";
import * as serializers from "../../../../../../../../serialization/index";
import * as errors from "../../../../../../../../errors/index";

export interface MetadataServiceMethods {
    getMetadata(
        req: express.Request<
            never,
            SeedMixedFileDirectory.user.events.Metadata,
            never,
            {
                id: SeedMixedFileDirectory.Id;
            }
        >,
        res: {
            send: (responseBody: SeedMixedFileDirectory.user.events.Metadata) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
}

export class MetadataService {
    private router;

    constructor(
        private readonly methods: MetadataServiceMethods,
        middleware: express.RequestHandler[] = [],
    ) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware,
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.get("/", async (req, res, next) => {
            try {
                await this.methods.getMetadata(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(
                                serializers.user.events.Metadata.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                }),
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next,
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedMixedFileDirectoryError) {
                    console.warn(
                        `Endpoint 'getMetadata' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition.",
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
