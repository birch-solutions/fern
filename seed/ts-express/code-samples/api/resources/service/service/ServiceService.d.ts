/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedCodeSamples from "../../../index";
import express from "express";
export interface ServiceServiceMethods {
    hello(req: express.Request<never, SeedCodeSamples.MyResponse, SeedCodeSamples.MyRequest, never>, res: {
        send: (responseBody: SeedCodeSamples.MyResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
export declare class ServiceService {
    private readonly methods;
    private router;
    constructor(methods: ServiceServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
