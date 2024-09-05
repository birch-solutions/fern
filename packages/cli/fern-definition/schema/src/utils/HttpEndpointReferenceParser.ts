import { HttpMethodSchema } from "../schemas/HttpEndpointSchema";

export declare namespace HttpEndpointReferenceParser {
    interface Parsed {
        path: string;
        method: HttpMethodSchema;
    }

    export type ValidationResult = Valid | Invalid;

    interface Valid {
        type: "valid";
    }

    interface Invalid {
        type: "invalid";
    }
}

/**
 * Parses an HTTP endpoint reference like `POST /users/get`
 */
export class HttpEndpointReferenceParser {
    private REFERENCE_REGEX: RegExp = /^(GET|POST|PUT|DELETE|PATCH)\s\/[a-zA-Z0-9\/]*$/;

    public validate(reference: string): HttpEndpointReferenceParser.ValidationResult {
        const validFormat = this.REFERENCE_REGEX.test(reference);
        if (!validFormat) {
            return { type: "invalid" };
        }
        return { type: "valid" };
    }

    public async tryParse(reference: string): Promise<HttpEndpointReferenceParser.Parsed | undefined> {
        const validationResponse = this.validate(reference);
        if (validationResponse.type === "invalid") {
            return undefined;
        }
        const match = reference.match(this.REFERENCE_REGEX);
        if (match == null || match[0] == null || match[1] == null) {
            return undefined;
        }
        return {
            method: match[0] as HttpMethodSchema,
            path: match[1]
        };
    }
}
