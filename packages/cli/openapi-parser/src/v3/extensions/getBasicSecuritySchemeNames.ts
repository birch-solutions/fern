import { OpenAPIV3 } from "openapi-types";
import { FernOpenAPIExtension, getExtension } from "./extensions";

export interface BasicSecuritySchemeNames {
    usernameVariable?: string;
    passwordVariable?: string;
}

export function getBasicSecuritySchemeNames(securityScheme: OpenAPIV3.SecuritySchemeObject): BasicSecuritySchemeNames {
    const usernameVariable = getExtension<string>(
        securityScheme,
        FernOpenAPIExtension.BASIC_AUTH_USERNAME_VARIABLE_NAME
    );
    const passwordVariable = getExtension<string>(
        securityScheme,
        FernOpenAPIExtension.BASIC_AUTH_PASSWORD_VARIABLE_NAME
    );

    return {
        usernameVariable,
        passwordVariable,
    };
}
