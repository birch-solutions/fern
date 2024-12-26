/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedEnum from "../../../index";
import express from "express";
import * as errors from "../../../../errors/index";

export interface QueryParamServiceMethods {
    send(
        req: express.Request<
            never,
            never,
            never,
            {
                operand: SeedEnum.Operand;
                maybeOperand?: SeedEnum.Operand;
                operandOrColor: SeedEnum.ColorOrOperand;
                maybeOperandOrColor?: SeedEnum.ColorOrOperand;
            }
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
    sendList(
        req: express.Request<
            never,
            never,
            never,
            {
                operand: SeedEnum.Operand;
                maybeOperand?: SeedEnum.Operand;
                operandOrColor: SeedEnum.ColorOrOperand;
                maybeOperandOrColor?: SeedEnum.ColorOrOperand;
            }
        >,
        res: {
            send: () => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        },
        next: express.NextFunction,
    ): void | Promise<void>;
}

export class QueryParamService {
    private router;

    constructor(
        private readonly methods: QueryParamServiceMethods,
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
        this.router.post("/query", async (req, res, next) => {
            try {
                await this.methods.send(
                    req as any,
                    {
                        send: async () => {
                            res.sendStatus(204);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next,
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedEnumError) {
                    console.warn(
                        `Endpoint 'send' unexpectedly threw ${error.constructor.name}.` +
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
        this.router.post("/query-list", async (req, res, next) => {
            try {
                await this.methods.sendList(
                    req as any,
                    {
                        send: async () => {
                            res.sendStatus(204);
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    },
                    next,
                );
                next();
            } catch (error) {
                if (error instanceof errors.SeedEnumError) {
                    console.warn(
                        `Endpoint 'sendList' unexpectedly threw ${error.constructor.name}.` +
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
