/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDescription } from "./WithDescription";

export const Server: core.serialization.ObjectSchema<serializers.Server.Raw, FernOpenapiIr.Server> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string().optional(),
        url: core.serialization.string(),
    })
    .extend(WithDescription);

export declare namespace Server {
    interface Raw extends WithDescription.Raw {
        name?: string | null;
        url: string;
    }
}
