/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedResponseProperty from "../../../index";
import express from "express";
export interface ServiceServiceMethods {
    getMovie(req: express.Request<never, SeedResponseProperty.Response, string, never>, res: {
        send: (responseBody: SeedResponseProperty.Response) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getMovieDocs(req: express.Request<never, SeedResponseProperty.Response, string, never>, res: {
        send: (responseBody: SeedResponseProperty.Response) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getMovieName(req: express.Request<never, SeedResponseProperty.StringResponse, string, never>, res: {
        send: (responseBody: SeedResponseProperty.StringResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getMovieMetadata(req: express.Request<never, SeedResponseProperty.Response, string, never>, res: {
        send: (responseBody: SeedResponseProperty.Response) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getOptionalMovie(req: express.Request<never, SeedResponseProperty.Response | undefined, string, never>, res: {
        send: (responseBody: SeedResponseProperty.Response | undefined) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getOptionalMovieDocs(req: express.Request<never, SeedResponseProperty.OptionalWithDocs | undefined, string, never>, res: {
        send: (responseBody: SeedResponseProperty.OptionalWithDocs | undefined) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getOptionalMovieName(req: express.Request<never, SeedResponseProperty.OptionalStringResponse | undefined, string, never>, res: {
        send: (responseBody: SeedResponseProperty.OptionalStringResponse | undefined) => Promise<void>;
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
