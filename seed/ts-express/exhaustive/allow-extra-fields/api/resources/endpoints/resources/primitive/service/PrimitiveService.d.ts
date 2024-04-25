/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
export interface PrimitiveServiceMethods {
    getAndReturnString(req: express.Request<never, string, string, never>, res: {
        send: (responseBody: string) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnInt(req: express.Request<never, number, number, never>, res: {
        send: (responseBody: number) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnLong(req: express.Request<never, number, number, never>, res: {
        send: (responseBody: number) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnDouble(req: express.Request<never, number, number, never>, res: {
        send: (responseBody: number) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnBool(req: express.Request<never, boolean, boolean, never>, res: {
        send: (responseBody: boolean) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnDatetime(req: express.Request<never, Date, Date, never>, res: {
        send: (responseBody: Date) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnDate(req: express.Request<never, string, string, never>, res: {
        send: (responseBody: string) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnUuid(req: express.Request<never, string, string, never>, res: {
        send: (responseBody: string) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
    getAndReturnBase64(req: express.Request<never, string, string, never>, res: {
        send: (responseBody: string) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
export declare class PrimitiveService {
    private readonly methods;
    private router;
    constructor(methods: PrimitiveServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
