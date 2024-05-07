/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../../../../index";
import express from "express";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export interface EnumServiceMethods {
    getAndReturnEnum(
        req: express.Request<never, SeedExhaustive.types.WeatherReport, SeedExhaustive.types.WeatherReport, never>,
        res: {
            send: (responseBody: SeedExhaustive.types.WeatherReport) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class EnumService {
    private router;

    constructor(private readonly methods: EnumServiceMethods, middleware: express.RequestHandler[] = []) {
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
            const request = await serializers.types.WeatherReport.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.getAndReturnEnum(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.WeatherReport.jsonOrThrow(responseBody, {
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
                        console.warn(
                            `Endpoint 'getAndReturnEnum' unexpectedly threw ${error.constructor.name}.` +
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
