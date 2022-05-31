export type Fetcher = (args: Fetcher.Args) => Promise<Fetcher.Response>;

export declare namespace Fetcher {
    export interface Args {
        url: string;
        method: string;
        headers?: Record<string, string>;
        token?: string | (() => string | Promise<string>);
        queryParameters?: URLSearchParams;
        body?: {
            content: string | ArrayBuffer;
            contentType: string;
        };
    }

    export interface Response {
        statusCode: number;
        body: Uint8Array;
    }
}
