/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedOauthClientCredentials from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface AuthServiceMethods {
    getTokenWithClientCredentials(
        req: express.Request<
            never,
            SeedOauthClientCredentials.TokenResponse,
            SeedOauthClientCredentials.GetTokenRequest,
            never
        >,
        res: {
            send: (responseBody: SeedOauthClientCredentials.TokenResponse) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    refreshToken(
        req: express.Request<
            never,
            SeedOauthClientCredentials.TokenResponse,
            SeedOauthClientCredentials.RefreshTokenRequest,
            never
        >,
        res: {
            send: (responseBody: SeedOauthClientCredentials.TokenResponse) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class AuthService {
    private router;

    constructor(private readonly methods: AuthServiceMethods, middleware: express.RequestHandler[] = []) {
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
        this.router.post("/token", async (req, res, next) => {
            const request = await serializers.GetTokenRequest.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getTokenWithClientCredentials(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.TokenResponse.jsonOrThrow(responseBody, {
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
                    if (error instanceof errors.SeedOauthClientCredentialsError) {
                        console.warn(
                            `Endpoint 'getTokenWithClientCredentials' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/token", async (req, res, next) => {
            const request = await serializers.RefreshTokenRequest.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.refreshToken(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.TokenResponse.jsonOrThrow(responseBody, {
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
                    if (error instanceof errors.SeedOauthClientCredentialsError) {
                        console.warn(
                            `Endpoint 'refreshToken' unexpectedly threw ${error.constructor.name}.` +
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
