/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../index";

export interface BasicAuthSchemeSchema extends FernDefinition.WithDocsSchema {
    scheme: "basic";
    username?: FernDefinition.AuthVariable;
    password?: FernDefinition.AuthVariable;
}
