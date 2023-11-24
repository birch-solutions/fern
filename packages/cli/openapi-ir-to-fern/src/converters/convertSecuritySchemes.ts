import { RawSchemas } from "@fern-api/yaml-schema";
import { SecurityScheme, SecuritySchemeId } from "@fern-fern/openapi-ir-model/commons";
import { getHeaderName } from "./utils/getHeaderName";

export interface FernAuth {
    auth: string | undefined;
    authSchemes: Record<string, RawSchemas.AuthSchemeDeclarationSchema> | undefined;
    globalHeaders: Record<string, RawSchemas.HttpHeaderSchema>;
}

const BASIC_AUTH_SCHEME = "BasicAuthScheme";
const BEARER_AUTH_SCHEME = "BearerAuthScheme";

export function convertSecuritySchemes(securitySchemes: Record<SecuritySchemeId, SecurityScheme>): FernAuth {
    let auth: string | undefined = undefined;
    const authSchemes: Record<string, RawSchemas.AuthSchemeDeclarationSchema> = {};
    const globalHeaders: Record<string, RawSchemas.HttpHeaderSchema> = {};
    let headerSchemeAlreadyPresent = false;
    for (const [id, securityScheme] of Object.entries(securitySchemes)) {
        if (securityScheme.type === "basic" && auth == null) {
            auth = "basic";

            let addBasicAuthScheme = false;
            const basicAuthScheme: RawSchemas.AuthSchemeDeclarationSchema = {
                scheme: "basic"
            };
            if (securityScheme.usernameVariableName != null) {
                basicAuthScheme.username = {
                    name: securityScheme.usernameVariableName
                };
                addBasicAuthScheme = true;
            }
            if (securityScheme.passwordVariableName != null) {
                basicAuthScheme.password = {
                    name: securityScheme.passwordVariableName
                };
                addBasicAuthScheme = true;
            }
            if (addBasicAuthScheme) {
                auth = BASIC_AUTH_SCHEME;
                authSchemes[BASIC_AUTH_SCHEME] = basicAuthScheme;
            }
        } else if (securityScheme.type === "bearer" && auth == null) {
            auth = "bearer";

            let addBearerAuthScheme = false;
            const bearerAuthScheme: RawSchemas.AuthSchemeDeclarationSchema = {
                scheme: "bearer"
            };
            if (securityScheme.tokenVariableName != null) {
                bearerAuthScheme.token = {
                    name: securityScheme.tokenVariableName
                };
                addBearerAuthScheme = true;
            }
            if (addBearerAuthScheme) {
                auth = BEARER_AUTH_SCHEME;
                authSchemes[BEARER_AUTH_SCHEME] = bearerAuthScheme;
            }
        }

        if (securityScheme.type === "header") {
            authSchemes[id] = {
                header: securityScheme.headerName,
                name: securityScheme.headerVariableName ?? "apiKey",
                type: "string",
                prefix: securityScheme.prefix ?? undefined
            };
            if (auth == null) {
                auth = id;
            }
            if (!headerSchemeAlreadyPresent) {
                headerSchemeAlreadyPresent = true;
            } else {
                globalHeaders[securityScheme.headerName] = {
                    type: "string",
                    name: securityScheme.headerVariableName ?? getHeaderName(securityScheme.headerName)
                };
            }
        }
    }

    return {
        auth,
        authSchemes: Object.keys(authSchemes).length === 0 ? undefined : authSchemes,
        globalHeaders
    };
}
