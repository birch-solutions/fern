/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export interface Server extends FernOpenapiIr.WithDescription {
    /** Populated by `X-Server-Name` */
    name: string | undefined;
    url: string;
    audiences: string[] | undefined;
    /** Populated by `X-Server-Environment` */
    environment: string | undefined;
}
