import axios from "axios";
import { Fetcher } from "./Fetcher";

export const defaultFetcher: Fetcher = async (args) => {
    const headers: Record<string, string> = {
        ...args.headers,
        "Content-Type": args.body != null ? args.body.contentType : "application/json",
    };

    const authHeader = await (typeof args.authHeader === "function" ? args.authHeader() : args.authHeader);
    if (authHeader != null) {
        headers.Authorization = authHeader;
    }

    const response = await axios({
        url: args.url,
        params: args.queryParameters,
        method: args.method,
        headers,
        data: args.body?.content,
        responseType: "arraybuffer",
    });

    return {
        statusCode: response.status,
        body: new Uint8Array(response.data),
    };
};
