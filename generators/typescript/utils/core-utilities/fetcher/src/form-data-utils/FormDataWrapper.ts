import { RUNTIME } from "../runtime";

export type MaybePromise<T> = Promise<T> | T;

type FormDataRequest<Body> = {
    body: Body;
    headers: Record<string, string>;
};

export interface CrossPlatformFormData {
    setup(): Promise<void>;

    append(key: string, value: unknown): void;

    appendFile(key: string, value: unknown, fileName?: string): Promise<void>;

    getRequest(): MaybePromise<FormDataRequest<unknown>>;
}

export async function newFormData(): Promise<CrossPlatformFormData> {
    let formdata: CrossPlatformFormData;
    if (RUNTIME.type === "node" && RUNTIME.parsedVersion != null && RUNTIME.parsedVersion > 18) {
        formdata = new Node19FormData();
    } else if (RUNTIME.type === "node") {
        formdata = new Node16FormData();
    } else {
        formdata = new WebFormData();
    }
    await formdata.setup();
    return formdata;
}

/**
 * Form Data Implementation for Node.js 18+
 */
class Node19FormData implements CrossPlatformFormData {
    private fd:
        | {
              append(name: string, value: unknown, fileName?: string): void;
          }
        | undefined;

    public async setup() {
        this.fd = new (await import("formdata-node")).FormData();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: any, fileName?: string): Promise<void> {
        this.fd?.append(key, new (await import("buffer")).Blob([value]), fileName);
    }

    public async getRequest(): Promise<FormDataRequest<unknown>> {
        const encoder = new (await import("form-data-encoder")).FormDataEncoder(this.fd as any);
        return {
            body: (await import("stream")).Readable.from(encoder),
            headers: encoder.headers
        };
    }
}

/**
 * Form Data Implementation for Node.js 16-18
 */
class Node16FormData implements CrossPlatformFormData {
    private fd:
        | {
              append(
                  name: string,
                  value: unknown,
                  options?: {
                      header?: string | Headers;
                      knownLength?: number;
                      filename?: string;
                      filepath?: string;
                      contentType?: string;
                  }
              ): void;

              getHeaders(): Record<string, string>;
          }
        | undefined;

    public async setup(): Promise<void> {
        this.fd = new (await import("form-data")).default();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: any, fileName?: string): Promise<void> {
        if (fileName == null) {
            this.fd?.append(key, value);
        } else {
            this.fd?.append(key, value, { filename: fileName });
        }
    }

    public getRequest(): FormDataRequest<typeof this.fd> {
        return {
            body: this.fd,
            headers: this.fd ? this.fd.getHeaders() : {}
        };
    }
}

/**
 * Form Data Implementation for Web
 */
class WebFormData implements CrossPlatformFormData {
    private fd: { append(name: string, value: string | Blob, fileName?: string): void } | undefined;

    public async setup(): Promise<void> {
        this.fd = new FormData();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: any, fileName?: string): Promise<void> {
        this.fd?.append(key, new Blob([value]), fileName);
    }

    public getRequest(): FormDataRequest<typeof this.fd> {
        return {
            body: this.fd,
            headers: {}
        };
    }
}
