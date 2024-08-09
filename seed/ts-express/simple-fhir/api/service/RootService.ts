/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedApi from "../index";
import express from "express";
import * as serializers from "../../serialization/index";
import * as errors from "../../errors/index";

export interface RootServiceMethods {
    getAccount(
        req: express.Request<
            {
                account_id: string;
            },
            SeedApi.Account,
            never,
            never
        >,
        res: {
            send: (responseBody: SeedApi.Account) => Promise<void>;
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
        this.router.get("/account/:account_id", async (req, res, next) => {
            try {
                await this.methods.getAccount(
                    req as any,
                    {
                        send: async (responseBody) => {
                            res.json(
                                serializers.Account.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedApiError) {
                    console.warn(
                        `Endpoint 'getAccount' unexpectedly threw ${error.constructor.name}.` +
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
